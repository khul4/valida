import { exec } from 'child_process';
import { promisify } from 'util';
import { existsSync, unlinkSync } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const execAsync = promisify(exec);

interface DownloadRequest {
  url: string;
  format: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DownloadRequest = await request.json();
    const { url, format } = body;

    // Validate URL
    if (!url || !isValidYoutubeUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid YouTube URL' },
        { status: 400 }
      );
    }

    // Validate format
    if (!['mp4-720p', 'mp4-1080p', 'mp4-4k', 'mp3'].includes(format)) {
      return NextResponse.json(
        { error: 'Invalid format' },
        { status: 400 }
      );
    }

    // Extract video ID
    const videoId = extractVideoId(url);
    if (!videoId) {
      return NextResponse.json(
        { error: 'Could not extract video ID' },
        { status: 400 }
      );
    }

    // Create temp filename
    const extension = format === 'mp3' ? 'mp3' : 'mp4';
    const filename = `youtube_${videoId}_${Date.now()}.${extension}`;
    const filepath = path.join('/tmp', filename);

    // Prepare yt-dlp command based on format
    let command = '';
    
    if (format === 'mp3') {
      // Download as MP3 (audio only)
      command = `yt-dlp -f "bestaudio/best" -x --audio-format mp3 --audio-quality 192K -o "${filepath}" "${url}"`;
    } else {
      // Download as MP4 with specific quality
      let qualityFormat = '';
      switch (format) {
        case 'mp4-720p':
          qualityFormat = 'best[height<=720]';
          break;
        case 'mp4-1080p':
          qualityFormat = 'best[height<=1080]';
          break;
        case 'mp4-4k':
          qualityFormat = 'best[height<=2160]';
          break;
        default:
          qualityFormat = 'best';
      }
      command = `yt-dlp -f "${qualityFormat}" -o "${filepath}" "${url}"`;
    }

    // Execute yt-dlp command with timeout
    const timeout = 300000; // 5 minutes timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      await execAsync(command, {
        maxBuffer: 10 * 1024 * 1024, // 10MB buffer
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    // Check if file was created
    if (!existsSync(filepath)) {
      return NextResponse.json(
        { error: 'Failed to download video' },
        { status: 500 }
      );
    }

    // Read file
    const { readFile } = await import('fs/promises');
    const fileBuffer = await readFile(filepath);

    // Clean up temp file
    try {
      unlinkSync(filepath);
    } catch (err) {
      console.error('Error deleting temp file:', err);
    }

    // Return file
    const mimeType = extension === 'mp3' ? 'audio/mpeg' : 'video/mp4';
    const headers = {
      'Content-Type': mimeType,
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': fileBuffer.length.toString(),
    };

    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Download error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('yt-dlp')) {
        return NextResponse.json(
          { error: 'yt-dlp not installed or not found in PATH' },
          { status: 500 }
        );
      }
      if (error.message.includes('timeout') || error.message.includes('AbortError')) {
        return NextResponse.json(
          { error: 'Download timeout - video file too large or network issue' },
          { status: 408 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process download request' },
      { status: 500 }
    );
  }
}

function isValidYoutubeUrl(url: string): boolean {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/[\w\-]+(\?[\w\-=&]*)?$/i;
  return youtubeRegex.test(url);
}

function extractVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

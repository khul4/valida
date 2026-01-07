# YouTube Video Downloader - Setup Guide

## Backend Requirements

This tool uses `yt-dlp` to download YouTube videos. Follow these steps to set up the production environment:

### 1. Install yt-dlp

```bash
# Using pip (Python package manager)
pip install yt-dlp

# Or using homebrew (macOS)
brew install yt-dlp

# Or using apt (Ubuntu/Debian)
sudo apt-get install yt-dlp
```

### 2. Verify Installation

```bash
yt-dlp --version
```

### 3. Ensure /tmp Directory Access

The API creates temporary files in `/tmp`. Ensure your server has write permissions:

```bash
mkdir -p /tmp
chmod 777 /tmp
```

### 4. FFmpeg (Optional but Recommended)

For better format conversion, install FFmpeg:

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# CentOS/RHEL
sudo yum install ffmpeg
```

### 5. Environment Variables (Optional)

You can configure these via environment variables:

```bash
# Server timeout in milliseconds (default: 300000 = 5 minutes)
NEXT_PUBLIC_DOWNLOAD_TIMEOUT=300000

# Maximum file size allowed (default: 1GB)
NEXT_PUBLIC_MAX_FILE_SIZE=1073741824
```

## API Endpoint

**POST** `/api/youtube-download`

### Request Body
```json
{
  "url": "https://www.youtube.com/watch?v=...",
  "format": "mp4-1080p|mp4-720p|mp4-4k|mp3"
}
```

### Response
- **Success**: Binary file stream with appropriate MIME type
- **Error**: JSON with error message

## Supported Formats

- `mp4-720p` - 720p HD MP4 video
- `mp4-1080p` - 1080p Full HD MP4 video
- `mp4-4k` - 4K Ultra HD MP4 video (if available)
- `mp3` - MP3 audio only

## Error Handling

The API will return appropriate error messages:

- **400**: Invalid URL or format
- **408**: Download timeout (file too large or network issue)
- **500**: yt-dlp not installed or other server error

## Security Considerations

1. **Rate Limiting**: Add rate limiting to prevent abuse
2. **URL Validation**: The API validates YouTube URLs
3. **Timeout**: Default 5-minute timeout to prevent long-running processes
4. **File Cleanup**: Temporary files are cleaned up after download
5. **CORS**: Configure CORS policies as needed

## Performance Notes

- Download time depends on video length and quality
- 1080p videos typically take 30-120 seconds
- 4K videos can take 2-5 minutes
- MP3 extraction is faster (30-60 seconds)

## Troubleshooting

### "yt-dlp not found" Error
Ensure yt-dlp is installed and in your system PATH:
```bash
which yt-dlp
```

### "Download timeout" Error
Increase the timeout in the API route for slower connections:
```typescript
const timeout = 600000; // 10 minutes
```

### File Permission Errors
Ensure the server has write access to /tmp:
```bash
chmod 777 /tmp
```

### "403 Forbidden" Error
Some videos have restrictions. yt-dlp handles most cases, but:
- Age-restricted videos may require cookies
- Premium/membership content may not be downloadable
- Some regions may have geo-restrictions

## Advanced Configuration

### Custom Output Format
Edit the yt-dlp command in the API route to customize output format:

```typescript
// For specific codec
command = `yt-dlp -f "best[ext=mp4]" -o "${filepath}" "${url}"`;

// For custom bitrate
command = `yt-dlp -f "best[vcodec=h264]" -o "${filepath}" "${url}"`;
```

### Parallel Downloads
For production use, consider:
1. Using a job queue (Bull, RabbitMQ)
2. Implementing rate limiting per IP
3. Caching commonly downloaded videos
4. Monitoring disk space usage

## Legal Notice

Ensure users have the right to download content. Add appropriate terms of service to your application.

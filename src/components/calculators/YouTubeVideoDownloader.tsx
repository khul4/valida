"use client";

import React, { useState, useRef } from 'react';
import RelatedTools from './RelatedTools';
import { AlertCircle, Download, CheckCircle } from 'lucide-react';

interface FormatOption {
  id: string;
  label: string;
  extension: string;
  description: string;
}

const formatOptions: FormatOption[] = [
  { id: 'mp4-720p', label: 'MP4 720p', extension: 'mp4', description: 'HD Quality' },
  { id: 'mp4-1080p', label: 'MP4 1080p', extension: 'mp4', description: 'Full HD' },
  { id: 'mp4-4k', label: 'MP4 4K', extension: 'mp4', description: 'Ultra HD' },
  { id: 'mp3', label: 'MP3 Audio', extension: 'mp3', description: 'Audio Only' },
];

interface VideoInfo {
  title: string;
  duration: string;
  views: string;
  channel: string;
  quality: string;
}

export default function YouTubeVideoDownloader() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('mp4-1080p');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  
  const urlInputRef = useRef<HTMLInputElement>(null);

  // Validate YouTube URL
  const isValidYoutubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/[\w\-]+(\?[\w\-=&]*)?$/i;
    return youtubeRegex.test(url);
  };

  // Extract video ID from URL
  const extractVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const handleAnalyzeVideo = async () => {
    setError('');
    setSuccess('');
    setVideoInfo(null);

    if (!youtubeUrl.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    if (!isValidYoutubeUrl(youtubeUrl)) {
      setError('Invalid YouTube URL. Please enter a valid YouTube video link.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to analyze video
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const videoId = extractVideoId(youtubeUrl);
      
      if (!videoId) {
        throw new Error('Could not extract video ID');
      }
      
      // Mock video information
      const mockVideoInfo: VideoInfo = {
        title: 'YouTube Video Ready to Download',
        duration: '12:45',
        views: '1.2M',
        channel: 'Example Channel',
        quality: '1080p',
      };

      setVideoInfo(mockVideoInfo);
      setSuccess('✓ Video found! Ready to download.');
    } catch (err) {
      console.error('Error analyzing video:', err);
      setError('Failed to analyze video. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!videoInfo) {
      setError('Please analyze the video first');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const format = formatOptions.find(f => f.id === selectedFormat);
      const videoId = extractVideoId(youtubeUrl);
      
      // NOTE: Real implementation requires a backend API
      // This demo creates a placeholder file with the correct extension
      
      if (format?.extension === 'mp4') {
        // Create a minimal valid MP4 file (demo)
        // In production, this would be the actual video data from your backend
        const mp4Header = new Uint8Array([
          0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70,
          0x69, 0x73, 0x6F, 0x6D, 0x00, 0x00, 0x02, 0x00,
          0x69, 0x73, 0x6F, 0x6D, 0x69, 0x73, 0x6F, 0x32,
          0x6D, 0x70, 0x34, 0x31, 0x00, 0x00, 0x00, 0x08,
          0x66, 0x72, 0x65, 0x65
        ]);
        
        const blob = new Blob([mp4Header], { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `youtube_video_${videoId}_${format.id}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setSuccess(`✓ Demo MP4 file downloaded! (In production, this would be the actual ${format.label} video)`);
      } else if (format?.extension === 'mp3') {
        // Create a minimal valid MP3 file (demo)
        // In production, this would be the actual audio data from your backend
        const mp3Header = new Uint8Array([
          0xFF, 0xFB, 0x90, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        ]);
        
        const blob = new Blob([mp3Header], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `youtube_audio_${videoId}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setSuccess(`✓ Demo MP3 file downloaded! (In production, this would be the actual audio from the video)`);
      }
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSuccess('');
      }, 5000);
    } catch (err) {
      console.error('Download error:', err);
      setError('Download failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearUrl = () => {
    setYoutubeUrl('');
    setVideoInfo(null);
    setError('');
    setSuccess('');
    urlInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free YouTube Video Downloader
          </h1>
          <p className="text-lg text-gray-600">
            Download YouTube videos in HD, Full HD, 4K quality or extract audio as MP3
          </p>
        </div>

        {/* Main Tool Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* URL Input Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              YouTube Video URL
            </label>
            <div className="flex gap-2 mb-3">
              <input
                ref={urlInputRef}
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && youtubeUrl.trim()) {
                    handleAnalyzeVideo();
                  }
                }}
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {youtubeUrl && (
                <button
                  type="button"
                  onClick={handleClearUrl}
                  className="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-colors whitespace-nowrap"
                  title="Clear input"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-3">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 mb-3">
                <CheckCircle size={20} />
                <span>{success}</span>
              </div>
            )}

            {/* Analyze Button */}
            <button
              onClick={handleAnalyzeVideo}
              disabled={isLoading || !youtubeUrl.trim()}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Analyzing...' : 'Analyze Video'}
            </button>
          </div>

          {/* Video Info Section */}
          {videoInfo && (
            <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📹 Video Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 text-xs uppercase">Title</p>
                  <p className="font-semibold text-gray-900 break-words">{videoInfo.title}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs uppercase">Channel</p>
                  <p className="font-semibold text-gray-900">{videoInfo.channel}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs uppercase">Duration</p>
                  <p className="font-semibold text-gray-900">{videoInfo.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs uppercase">Views</p>
                  <p className="font-semibold text-gray-900">{videoInfo.views}</p>
                </div>
              </div>
            </div>
          )}

          {/* Format Selection */}
          {videoInfo && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Download Format & Quality
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {formatOptions.map((format) => (
                  <label
                    key={format.id}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedFormat === format.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="format"
                      value={format.id}
                      checked={selectedFormat === format.id}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="mr-3 w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{format.label}</p>
                      <p className="text-sm text-gray-600">{format.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                {isLoading ? 'Processing...' : 'Download Video'}
              </button>
              
              {/* Demo Notice */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Mode:</strong> This tool demonstrates the UI/UX. The download will create a sample file with video information. For production use, backend integration with video processing services is required.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Multiple Formats',
              description: 'Download in MP4 (720p, 1080p, 4K) or extract audio as MP3',
              icon: '🎬',
            },
            {
              title: 'No Registration',
              description: 'Completely free - no signup or login required',
              icon: '✨',
            },
            {
              title: 'Mobile Friendly',
              description: 'Works on all devices - PC, Mac, iPhone, and Android',
              icon: '📱',
            },
            {
              title: 'HD Quality',
              description: 'Download videos in original quality up to 4K resolution',
              icon: '📺',
            },
            {
              title: 'Fast Downloads',
              description: 'Quick processing - most videos ready within seconds',
              icon: '⚡',
            },
            {
              title: 'Secure & Safe',
              description: 'SSL encrypted downloads with no data storage',
              icon: '🔒',
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How do I download YouTube videos?',
                a: 'Simply paste the YouTube URL above, click "Analyze Video", choose your preferred format and quality, then click "Download Video". The video will be saved to your device.',
              },
              {
                q: 'Can I download YouTube videos in 4K quality?',
                a: 'Yes! If the original video was uploaded in 4K, you can select the 4K option when downloading. We preserve the highest available quality from YouTube.',
              },
              {
                q: 'Can I download YouTube Shorts?',
                a: 'Yes! Our tool supports all YouTube video types including Shorts. Simply paste the YouTube Shorts URL and download in your preferred format.',
              },
              {
                q: 'Can I convert YouTube videos to MP3?',
                a: 'Yes! Select the "MP3 Audio" format option to extract audio from any YouTube video as a high-quality MP3 file.',
              },
              {
                q: 'Is this tool really free?',
                a: 'Yes, completely free! No registration, no hidden costs, and no subscription fees. Download unlimited videos.',
              },
              {
                q: 'What formats can I download?',
                a: 'You can download videos in MP4 format (720p, 1080p, 4K) or extract audio as MP3 files.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 group-open:bg-blue-50">
                  <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                  <span className="text-gray-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="p-4 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
            <AlertCircle size={20} />
            Important Notice
          </h3>
          <p className="text-sm text-yellow-800">
            Please ensure you have the right to download and use any content before saving it. Always respect
            copyright laws, intellectual property rights, and platform terms of service. Only download content you
            have permission to use.
          </p>
        </div>

        {/* Related Tools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
          <RelatedTools currentTool="youtube-video-downloader" />
        </div>
      </div>
    </div>
  );
}

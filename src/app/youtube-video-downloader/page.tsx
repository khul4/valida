import React from 'react';
import { Metadata } from 'next';
import YouTubeVideoDownloader from '@/components/calculators/YouTubeVideoDownloader';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Free YouTube Video Downloader | Download HD Videos & Audio | Valida',
  description: 'Download YouTube videos in HD, Full HD, and 4K quality or extract audio as MP3. No registration required. Fast, secure, and completely free.',
  keywords: 'YouTube video downloader, download YouTube videos, YouTube to MP4, YouTube to MP3, HD video downloader, 4K downloader, YouTube audio extractor, free video downloader, YouTube Shorts downloader',
  openGraph: {
    title: 'Free YouTube Video Downloader | Download HD Videos & Audio',
    description: 'Download YouTube videos in HD, Full HD, and 4K quality or extract audio as MP3. No registration required. Fast, secure, and completely free.',
    type: 'website',
  },
};

export default function YouTubeVideoDownloaderPage() {
  return (
    <div className="min-h-screen bg-white">
      <YouTubeVideoDownloader />
      
      <Container>
        <div className="max-w-4xl mx-auto py-16 px-4">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Everything About YouTube Video Downloading
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Download YouTube Videos?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    There are many legitimate reasons to download YouTube videos. Content creators often need reference materials, educators use videos for offline presentations, and researchers archive educational content. Whether creating derivative works, studying multimedia, or simply watching offline, our downloader makes it quick and easy.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Video Quality Options
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>720p (HD) - Good for most uses</li>
                    <li>1080p (Full HD) - Best for desktop viewing</li>
                    <li>4K (Ultra HD) - Best for large screens</li>
                    <li>MP3 Audio - Perfect for music and podcasts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How to Use
                  </h3>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>Copy the YouTube URL</li>
                    <li>Paste it in our tool</li>
                    <li>Click &quot;Analyze Video&quot;</li>
                    <li>Select quality and format</li>
                    <li>Click &quot;Download Video&quot;</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Privacy & Security
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>SSL encryption for all downloads</li>
                    <li>Videos not stored on servers</li>
                    <li>No registration required</li>
                    <li>No download history tracking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Supported Content
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Regular YouTube videos</li>
                    <li>YouTube Shorts</li>
                    <li>Archived live streams</li>
                    <li>YouTube premieres</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Legal Notice
                  </h3>
                  <p className="text-gray-700">
                    Only download content you have permission to use. Always respect copyright laws, intellectual property rights, and platform terms of service. Use downloaded content only for personal, educational, or transformative purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Device Compatibility
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Windows, Mac, Linux</li>
                    <li>iPhone, iPad, Android</li>
                    <li>Chrome, Firefox, Safari, Edge</li>
                    <li>No app installation needed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    FAQ
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Can I download YouTube Shorts?</p>
                      <p className="text-gray-700">Yes! Our tool supports YouTube Shorts and downloads them in their original vertical format.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Can I convert to MP3?</p>
                      <p className="text-gray-700">Yes! Select the MP3 Audio format to extract high-quality audio from any video.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Is it really free?</p>
                      <p className="text-gray-700">Completely free! No registration, no hidden costs, no subscription fees.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Works on mobile?</p>
                      <p className="text-gray-700">Yes! Our tool is fully mobile-optimized for iPhone, iPad, and Android devices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

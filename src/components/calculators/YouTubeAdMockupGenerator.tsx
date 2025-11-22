"use client";

import React, { useState, useRef } from 'react';
import RelatedTools from './RelatedTools';
import { downloadElementAsImage } from '@/lib/download-utils';
import { Monitor, Smartphone, Download, Upload } from 'lucide-react';

type ViewMode = 'desktop' | 'mobile';

interface AdData {
  thumbnail: string;
  channelName: string;
  adTitle: string;
  adUrl: string;
  ctaText: string;
  adIcon: string;
  advertiserText: string;
}

const initialAdData: AdData = {
  thumbnail: '',
  channelName: 'Your Brand',
  adTitle: 'Amazing Product - Get 20% Off Today',
  adUrl: 'yourbrand.com',
  ctaText: 'Shop Now',
  adIcon: '',
  advertiserText: 'Visit advertiser',
};

export default function YouTubeAdMockupGenerator() {
  const [adData, setAdData] = useState<AdData>(initialAdData);
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [isDownloading, setIsDownloading] = useState(false);
  
  const mockupRef = useRef<HTMLDivElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const adIconInputRef = useRef<HTMLInputElement>(null);

  const handleThumbnailUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdData(prev => ({ ...prev, thumbnail: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdIconUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdData(prev => ({ ...prev, adIcon: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (!mockupRef.current) return;
    
    setIsDownloading(true);
    try {
      await downloadElementAsImage(
        mockupRef.current,
        `youtube-ad-mockup-${viewMode}.png`,
        viewMode === 'desktop' ? '#ffffff' : '#0f0f0f'
      );
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderDesktopMockup = () => (
    <div className="bg-white shadow-2xl flex gap-6" style={{ width: '1280px' }}>
      {/* Left: Main Video Section */}
      <div className="flex-1" style={{ maxWidth: '854px' }}>
        {/* Video Player */}
        <div className="relative bg-black group cursor-pointer" style={{ height: '480px' }} onClick={() => thumbnailInputRef.current?.click()}>
          {/* Thumbnail/Video */}
          {adData.thumbnail ? (
            <img src={adData.thumbnail} alt="Ad thumbnail" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-700 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="text-gray-600 text-sm">Click to upload thumbnail</p>
              </div>
            </div>
          )}
          {/* Hover Overlay */}
          {adData.thumbnail && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <Upload className="w-12 h-12 text-white mx-auto mb-2" />
                <p className="text-white font-medium">Click to change thumbnail</p>
              </div>
            </div>
          )}

          {/* Ad Banner Overlay - Bottom Left Corner */}
          <div className="absolute bottom-4 left-4 z-20" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden" style={{ width: '320px' }}>
              <div className="flex items-center gap-3 p-3">
                {/* Ad Icon */}
                <div 
                  className="w-12 h-12 rounded flex-shrink-0 flex items-center justify-center cursor-pointer group/icon relative overflow-hidden"
                  style={{ backgroundColor: adData.adIcon ? 'transparent' : '#f97316' }}
                  onClick={() => adIconInputRef.current?.click()}
                >
                  {adData.adIcon ? (
                    <>
                      <img src={adData.adIcon} alt="Ad icon" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover/icon:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover/icon:opacity-100">
                        <Upload className="w-5 h-5 text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <svg className="w-7 h-7 text-white group-hover/icon:opacity-50 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="2" />
                        <text x="12" y="16" fontSize="12" textAnchor="middle" fill="currentColor" fontWeight="bold">Ad</text>
                      </svg>
                      <div className="absolute inset-0 bg-black/0 group-hover/icon:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/icon:opacity-100">
                        <Upload className="w-4 h-4 text-white" />
                      </div>
                    </>
                  )}
                </div>

                {/* Ad Content */}
                <div className="flex-1 min-w-0">
                  <div 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent;
                      if (text !== null) setAdData(prev => ({ ...prev, adTitle: text }));
                    }}
                    className="text-white text-sm font-semibold outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded line-clamp-1 mb-0.5"
                  >
                    {adData.adTitle}
                  </div>
                  <div 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent;
                      if (text !== null) setAdData(prev => ({ ...prev, adUrl: text }));
                    }}
                    className="text-gray-400 text-xs outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded line-clamp-1"
                  >
                    {adData.adUrl}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm transition-colors flex-shrink-0">
                  <span 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent;
                      if (text !== null) setAdData(prev => ({ ...prev, ctaText: text }));
                    }}
                    className="outline-none cursor-text"
                  >
                    {adData.ctaText}
                  </span>
                </button>
              </div>
              
              {/* Sponsored Label */}
              <div className="px-3 pb-2 flex items-center gap-2 text-xs">
                <span className="text-gray-500">Sponsored</span>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <text x="12" y="16" fontSize="12" textAnchor="middle" fill="currentColor">i</text>
                  </svg>
                  <span 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent;
                      if (text !== null) setAdData(prev => ({ ...prev, advertiserText: text }));
                    }}
                    className="text-gray-400 underline outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded"
                  >
                    {adData.advertiserText}
                  </span>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        {/* Video Info Below */}
        <div className="p-4 bg-white" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
              {adData.channelName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-[#0f0f0f] mb-1 line-clamp-2">
                Sample Video Title - How to Use This Product
              </div>
              <div className="text-sm text-[#606060] mb-2">
                <span 
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const text = e.currentTarget.textContent;
                    if (text !== null) setAdData(prev => ({ ...prev, channelName: text }));
                  }}
                  className="outline-none cursor-text hover:bg-gray-100 px-1 -mx-1 rounded"
                >
                  {adData.channelName}
                </span> • 1.2M views • 2 days ago
              </div>
              <div className="text-sm text-[#0f0f0f] mt-2 line-clamp-2">
                This is a sample video description that would normally contain details about the video content, links, and other relevant information.
              </div>
            </div>
            <button className="bg-[#0f0f0f] hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="text-base font-semibold mb-4">1,234 Comments</div>
          
          {/* Sample Comment 1 */}
          <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
              J
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">@johndoe</span>
                <span className="text-xs text-[#606060]">2 hours ago</span>
              </div>
              <p className="text-sm text-[#0f0f0f]">Great product! Really helpful video.</p>
            </div>
          </div>

          {/* Sample Comment 2 */}
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">@sarahsmith</span>
                <span className="text-xs text-[#606060]">5 hours ago</span>
              </div>
              <p className="text-sm text-[#0f0f0f]">Thanks for sharing this!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Suggested Videos Sidebar */}
      <div className="bg-white" style={{ width: '402px' }}>
        <div className="space-y-2 pt-4">
          {/* Suggested Video 1 */}
          <div className="flex gap-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
            <div className="w-40 h-24 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#0f0f0f] line-clamp-2 mb-1">
                Related Video Title About Product
              </div>
              <div className="text-xs text-[#606060]">Channel Name</div>
              <div className="text-xs text-[#606060]">2M views • 1 week ago</div>
            </div>
          </div>

          {/* Suggested Video 2 */}
          <div className="flex gap-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
            <div className="w-40 h-24 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#0f0f0f] line-clamp-2 mb-1">
                Another Suggested Video Title
              </div>
              <div className="text-xs text-[#606060]">Channel Name</div>
              <div className="text-xs text-[#606060]">5M views • 3 days ago</div>
            </div>
          </div>

          {/* Suggested Video 3 */}
          <div className="flex gap-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
            <div className="w-40 h-24 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#0f0f0f] line-clamp-2 mb-1">
                More Related Content Here
              </div>
              <div className="text-xs text-[#606060]">Channel Name</div>
              <div className="text-xs text-[#606060]">800K views • 2 weeks ago</div>
            </div>
          </div>

          {/* Suggested Video 4 */}
          <div className="flex gap-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
            <div className="w-40 h-24 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-[#0f0f0f] line-clamp-2 mb-1">
                Trending Video About Similar Topic
              </div>
              <div className="text-xs text-[#606060]">Channel Name</div>
              <div className="text-xs text-[#606060]">10M views • 1 month ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileMockup = () => (
    <div className="bg-black shadow-2xl rounded-2xl overflow-hidden" style={{ width: '300px' }}>
      {/* Mobile Video Player */}
      <div className="relative bg-black group/mobile cursor-pointer" style={{ height: '533px' }} onClick={() => thumbnailInputRef.current?.click()}>
        {/* Thumbnail/Video */}
        {adData.thumbnail ? (
          <img src={adData.thumbnail} alt="Ad thumbnail" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-center px-4">
              <svg className="w-16 h-16 text-gray-700 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <p className="text-gray-600 text-xs">Click to upload thumbnail</p>
            </div>
          </div>
        )}
        {/* Hover Overlay */}
        {adData.thumbnail && (
          <div className="absolute inset-0 bg-black/0 group-hover/mobile:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover/mobile:opacity-100">
            <div className="text-center">
              <Upload className="w-10 h-10 text-white mx-auto mb-2" />
              <p className="text-white font-medium text-sm">Click to change thumbnail</p>
            </div>
          </div>
        )}

        {/* Skip Ad Button */}
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs text-white font-medium">
            Skip Ad
          </div>
        </div>

        {/* Ad Info Overlay - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#181818]/95 backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
          <div className="p-3 space-y-2.5">
            {/* Ad Icon Section */}
            <div className="flex items-center gap-2.5">
              <div 
                className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center cursor-pointer group/icon-mobile relative overflow-hidden"
                style={{ backgroundColor: adData.adIcon ? 'transparent' : '#f97316' }}
                onClick={() => adIconInputRef.current?.click()}
              >
                {adData.adIcon ? (
                  <>
                    <img src={adData.adIcon} alt="Ad icon" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover/icon-mobile:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover/icon-mobile:opacity-100">
                      <Upload className="w-4 h-4 text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-white group-hover/icon-mobile:opacity-50 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <text x="12" y="16" fontSize="12" textAnchor="middle" fill="currentColor" fontWeight="bold">Ad</text>
                    </svg>
                    <div className="absolute inset-0 bg-black/0 group-hover/icon-mobile:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/icon-mobile:opacity-100">
                      <Upload className="w-3 h-3 text-white" />
                    </div>
                  </>
                )}
              </div>
              <div className="flex-1 flex items-center gap-1.5 text-xs">
                <span className="text-gray-400">Sponsored</span>
                <span className="text-gray-500">•</span>
                <span 
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const text = e.currentTarget.textContent;
                    if (text !== null) setAdData(prev => ({ ...prev, advertiserText: text }));
                  }}
                  className="text-gray-400 underline outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded"
                >
                  {adData.advertiserText}
                </span>
              </div>
            </div>

            {/* Ad Title */}
            <div 
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const text = e.currentTarget.textContent;
                if (text !== null) setAdData(prev => ({ ...prev, adTitle: text }));
              }}
              className="text-white text-sm font-medium outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded line-clamp-2"
            >
              {adData.adTitle}
            </div>

            {/* Channel Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                {adData.channelName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-xs">
                  <span 
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const text = e.currentTarget.textContent;
                      if (text !== null) setAdData(prev => ({ ...prev, channelName: text }));
                    }}
                    className="text-[#aaa] outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded"
                  >
                    {adData.channelName}
                  </span>
                  <span className="text-[#aaa]">•</span>
                  <span className="text-[#aaa]">Ad</span>
                </div>
                <div 
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const text = e.currentTarget.textContent;
                    if (text !== null) setAdData(prev => ({ ...prev, adUrl: text }));
                  }}
                  className="text-[#3ea6ff] text-xs outline-none cursor-text hover:bg-white/10 px-1 -mx-1 rounded"
                >
                  {adData.adUrl}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#065fd4] hover:bg-[#0c69de] text-white font-medium py-2.5 rounded text-sm transition-colors">
              <span 
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const text = e.currentTarget.textContent;
                  if (text !== null) setAdData(prev => ({ ...prev, ctaText: text }));
                }}
                className="outline-none cursor-text"
              >
                {adData.ctaText}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header & Controls */}
        <div className="flex items-center justify-between mb-8 px-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900">
            YouTube Ad Mockup
          </h1>

          {/* Hidden File Inputs */}
          <input
            ref={thumbnailInputRef}
            type="file"
            accept="image/*,video/*"
            onChange={handleThumbnailUpload}
            className="hidden"
          />
          <input
            ref={adIconInputRef}
            type="file"
            accept="image/*"
            onChange={handleAdIconUpload}
            className="hidden"
          />

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  viewMode === 'desktop'
                    ? 'bg-white shadow text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  viewMode === 'mobile'
                    ? 'bg-white shadow text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-3.5 h-3.5" />
              {isDownloading ? 'Downloading...' : 'Download'}
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex justify-center mb-12">
          <div ref={mockupRef} className="inline-block">
            {viewMode === 'desktop' ? renderDesktopMockup() : renderMobileMockup()}
          </div>
        </div>

      

        {/* Related Tools */}
        <RelatedTools currentTool="youtube-ad-mockup-generator" />
      </div>
    </div>
  );
}

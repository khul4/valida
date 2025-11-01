'use client';

import React, { useState, useRef } from 'react';
import Container from '../ui/container';
import RelatedTools from './RelatedTools';

interface TikTokAdData {
  adVideo: string;
  profileImage: string;
  username: string;
  caption: string;
  soundName: string;
  cta: string;
  likes: string;
  format: 'story' | 'story-cta';
}

export default function TikTokAdMockupGenerator() {
  const [adData, setAdData] = useState<TikTokAdData>({
    adVideo: '',
    profileImage: '',
    username: '@yourbrand',
    caption: 'Check out our amazing product! #trending #fyp',
    soundName: 'Original Sound',
    cta: 'Learn More',
    likes: '2.1K',
    format: 'story'
  });

  const videoInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState<'video' | 'profile' | null>(null);

  const handleVideoUpload = (file: File) => {
    if (file && (file.type === 'video/mp4' || file.type === 'video/quicktime' || file.type === 'video/mov')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdData(prev => ({ ...prev, adVideo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid video file (.mp4, .mov, .quicktime)');
    }
  };

  const handleProfileImageUpload = (file: File) => {
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAdData(prev => ({ ...prev, profileImage: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file (.png, .jpg, .jpeg)');
    }
  };

  const handleDragOver = (e: React.DragEvent, type: 'video' | 'profile') => {
    e.preventDefault();
    setDragActive(type);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(null);
  };

  const handleDrop = (e: React.DragEvent, type: 'video' | 'profile') => {
    e.preventDefault();
    setDragActive(null);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      if (type === 'video') {
        handleVideoUpload(files[0]);
      } else {
        handleProfileImageUpload(files[0]);
      }
    }
  };

  const downloadMockup = () => {
    // This would generate and download the mockup
    alert('TikTok mockup download functionality would be implemented here');
  };

  const TikTokPreview = ({ adData }: { adData: TikTokAdData }) => {
    return (
      <div className="w-full max-w-[280px] mx-auto bg-black rounded-[24px] overflow-hidden relative" style={{ aspectRatio: '9/16', height: '500px' }}>
        {/* Video Background */}
        <div className="absolute inset-0">
          {adData.adVideo ? (
            <video 
              src={adData.adVideo} 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-sm opacity-70">Upload your TikTok video</p>
                <p className="text-xs opacity-50 mt-1">Recommended: 1080x1920 (9:16)</p>
              </div>
            </div>
          )}
        </div>

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-3">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm font-medium">For You</div>
            <div className="text-white text-sm font-medium">Following</div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="absolute right-3 bottom-24 flex flex-col items-center space-y-4 z-20">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              {adData.profileImage ? (
                <img src={adData.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>

          {/* Like Button */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span className="text-white text-xs font-medium">{adData.likes}</span>
          </div>

          {/* Comment Button */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-white text-xs font-medium">521</span>
          </div>

          {/* Share Button */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-white text-xs font-medium">87</span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-6">
          <div className="mb-3">
            <div className="text-white font-semibold text-sm mb-1">{adData.username}</div>
            <div className="text-white text-sm leading-tight">{adData.caption}</div>
          </div>
          
          {/* Sound */}
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <span className="text-white text-xs">{adData.soundName}</span>
          </div>

          {/* CTA Button (only for story-cta format) */}
          {adData.format === 'story-cta' && (
            <button className="w-full py-3 bg-white text-black rounded-lg font-semibold text-sm">
              {adData.cta}
            </button>
          )}
        </div>

        {/* Sponsored Label */}
        <div className="absolute top-12 left-3 z-20">
          <span className="text-white text-xs opacity-75">Sponsored</span>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TikTok Ad Mockup Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Design your own TikTok ad & preview all the in-app overlays before it goes live on the platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Ad Content & Format</h3>
              
              {/* Ad Format Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Type & Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setAdData(prev => ({ ...prev, format: 'story' }))}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      adData.format === 'story' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-8 bg-gray-300 rounded mr-2"></div>
                      <span className="font-medium text-sm">Story (9:16)</span>
                    </div>
                    <p className="text-xs text-gray-600">Full-screen vertical video</p>
                  </button>
                  <button
                    onClick={() => setAdData(prev => ({ ...prev, format: 'story-cta' }))}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      adData.format === 'story-cta' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-8 bg-gray-300 rounded mr-2"></div>
                      <span className="font-medium text-sm">Story CTA (9:16)</span>
                    </div>
                    <p className="text-xs text-gray-600">With call-to-action button</p>
                  </button>
                </div>
              </div>

              {/* Video Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Video
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Recommended video size is 1080x1920 pixels (9:16 aspect ratio)
                </p>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                    dragActive === 'video' 
                      ? 'border-blue-400 bg-blue-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragOver={(e) => handleDragOver(e, 'video')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'video')}
                  onClick={() => videoInputRef.current?.click()}
                >
                  {adData.adVideo ? (
                    <div className="space-y-2">
                      <div className="w-16 h-20 mx-auto bg-gray-100 rounded overflow-hidden">
                        <video src={adData.adVideo} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm text-gray-600">Video uploaded successfully</p>
                      <p className="text-xs text-gray-500">Click to change video</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-600">Click to upload or drag-and-drop</p>
                      <p className="text-xs text-gray-500">Supports .mp4, .mov, .quicktime</p>
                    </div>
                  )}
                </div>
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/mp4,video/quicktime,video/mov"
                  onChange={(e) => e.target.files?.[0] && handleVideoUpload(e.target.files[0])}
                  className="hidden"
                />
              </div>

              {/* Profile Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture and Username
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer mb-3 ${
                    dragActive === 'profile' 
                      ? 'border-blue-400 bg-blue-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragOver={(e) => handleDragOver(e, 'profile')}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'profile')}
                  onClick={() => profileInputRef.current?.click()}
                >
                  {adData.profileImage ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src={adData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-600">Profile image uploaded</p>
                        <p className="text-xs text-gray-500">Click to change</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm text-gray-600">Upload profile picture</p>
                      <p className="text-xs text-gray-500">Supports .png, .jpg</p>
                    </div>
                  )}
                </div>
                <input
                  ref={profileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={(e) => e.target.files?.[0] && handleProfileImageUpload(e.target.files[0])}
                  className="hidden"
                />
                <input
                  type="text"
                  value={adData.username}
                  onChange={(e) => setAdData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@yourbrand"
                />
              </div>

              {/* Caption */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Caption
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Grab interest with more info about what you&apos;re advertising. Keep it short - we recommend 90 characters or less.
                </p>
                <textarea
                  value={adData.caption}
                  onChange={(e) => setAdData(prev => ({ ...prev, caption: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Check out our amazing product! #trending #fyp"
                />
                <div className="text-right mt-1">
                  <span className={`text-xs ${adData.caption.length > 90 ? 'text-red-500' : 'text-gray-500'}`}>
                    {adData.caption.length}/90
                  </span>
                </div>
              </div>

              {/* Sound Name */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sound Name
                </label>
                <input
                  type="text"
                  value={adData.soundName}
                  onChange={(e) => setAdData(prev => ({ ...prev, soundName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Original Sound"
                />
              </div>

              {/* Call to Action (only for story-cta) */}
              {adData.format === 'story-cta' && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Call to Action
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    The displayed CTA on the bottom of the ad
                  </p>
                  <select
                    value={adData.cta}
                    onChange={(e) => setAdData(prev => ({ ...prev, cta: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Learn More">Learn More</option>
                    <option value="Shop Now">Shop Now</option>
                    <option value="Sign Up">Sign Up</option>
                    <option value="Download">Download</option>
                    <option value="Get Quote">Get Quote</option>
                    <option value="Contact Us">Contact Us</option>
                    <option value="Book Now">Book Now</option>
                    <option value="Watch More">Watch More</option>
                  </select>
                </div>
              )}

              {/* Likes */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Likes
                </label>
                <input
                  type="text"
                  value={adData.likes}
                  onChange={(e) => setAdData(prev => ({ ...prev, likes: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2.1K"
                />
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">TikTok Ad Preview</h3>
              
              <TikTokPreview adData={adData} />

              {/* Download Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={downloadMockup}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Download Mockup
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-16">
          <RelatedTools currentTool="tiktok-ad-mockup-generator" />
        </div>
      </div>
    </Container>
  );
}
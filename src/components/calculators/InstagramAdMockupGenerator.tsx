"use client";

import React, { useState, useRef } from 'react';
import RelatedTools from './RelatedTools';
import { downloadElementAsImage } from '@/lib/download-utils';

type AdFormat = '1:1' | '4:5' | '16:9' | '9:16' | 'carousel' | 'reel';

interface AdData {
  format: AdFormat;
  profileImage: string;
  username: string;
  adImage: string;
  adImages: string[]; // For carousel
  cta: string;
  likes: string;
  caption: string;
}

const formatOptions = [
  { value: '1:1', label: 'Square (1:1)', icon: '⬜' },
  { value: '4:5', label: 'Portrait (4:5)', icon: '📱' },
  { value: '16:9', label: 'Landscape (16:9)', icon: '🖥️' },
  { value: '9:16', label: 'Story (9:16)', icon: '📲' },
  { value: 'carousel', label: 'Carousel (1:1)', icon: '🎠' },
  { value: 'reel', label: 'Reel (9:16)', icon: '🎬' },
];

const ctaOptions = [
  'Learn More', 'Shop Now', 'Sign Up', 'Download', 'Get Quote', 'Call Now', 
  'Book Now', 'Contact Us', 'Apply Now', 'Subscribe', 'Install Now', 'See Menu'
];

export default function InstagramAdMockupGenerator() {
  const [adData, setAdData] = useState<AdData>({
    format: '1:1',
    profileImage: '',
    username: 'yourbrand',
    adImage: '',
    adImages: [], // For carousel
    cta: 'Learn More',
    likes: '1,234',
    caption: 'Check out our amazing product! Perfect for your lifestyle. #ad #sponsored'
  });

  const [isDragOver, setIsDragOver] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const profileInputRef = useRef<HTMLInputElement>(null);
  const adImageInputRef = useRef<HTMLInputElement>(null);
  const carouselInputRef = useRef<HTMLInputElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'ad') => {
    const file = event.target.files?.[0];
    if (file) {
      processImageFile(file, type);
    }
  };

  const processImageFile = (file: File, type: 'profile' | 'ad' | 'carousel') => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'profile') {
          setAdData(prev => ({ ...prev, profileImage: result }));
        } else if (type === 'ad') {
          setAdData(prev => ({ ...prev, adImage: result }));
        } else if (type === 'carousel') {
          setAdData(prev => ({
            ...prev,
            adImages: [...prev.adImages, result]
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent, type: 'profile' | 'ad') => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      if (type === 'ad' && adData.format === 'carousel') {
        // Handle multiple files for carousel
        Array.from(files).forEach(file => {
          if (file.type.startsWith('image/') && adData.adImages.length < 10) {
            processImageFile(file, 'carousel');
          }
        });
      } else {
        processImageFile(files[0], type);
      }
    }
  };

  const addCarouselImage = (file: File) => {
    if (adData.adImages.length >= 10) return; // Instagram carousel max is 10
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setAdData(prev => ({
        ...prev,
        adImages: [...prev.adImages, result]
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeCarouselImage = (index: number) => {
    setAdData(prev => ({
      ...prev,
      adImages: prev.adImages.filter((_, i) => i !== index)
    }));
  };

  const handleCarouselUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/') && adData.adImages.length < 10) {
          addCarouselImage(file);
        }
      });
    }
  };

  const getAdImageDimensions = () => {
    switch (adData.format) {
      case '1:1':
      case 'carousel':
        return { width: '100%', paddingBottom: '100%' }; // 1:1
      case '4:5':
        return { width: '100%', paddingBottom: '125%' }; // 4:5
      case '16:9':
        return { width: '100%', paddingBottom: '56.25%' }; // 16:9
      case '9:16':
      case 'reel':
        return { width: '100%', paddingBottom: '177.78%' }; // 9:16
      default:
        return { width: '100%', paddingBottom: '100%' }; // default 1:1
    }
  };

  const downloadMockup = async () => {
    if (!mockupRef.current || isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      await downloadElementAsImage(
        mockupRef.current,
        `instagram-ad-mockup-${adData.format}-${Date.now()}.png`,
        '#ffffff'
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const CarouselPreview = ({ adData }: { adData: AdData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = adData.format === 'carousel' && adData.adImages.length > 0 
      ? adData.adImages 
      : adData.adImage ? [adData.adImage] : [];

    const dimensions = getAdImageDimensions();

    if (images.length === 0) {
      return (
        <div style={{ position: 'relative', width: dimensions.width, backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
          <div style={{ paddingBottom: dimensions.paddingBottom }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #e5e7eb, #d1d5db)' }}>
            <div style={{ textAlign: 'center' }}>
              <svg style={{ width: '48px', height: '48px', color: '#9ca3af', margin: '0 auto 8px auto' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span style={{ color: '#6b7280', fontSize: '14px' }}>
                {adData.format === 'carousel' ? 'Upload carousel images' : 'Upload your ad image'}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ position: 'relative', width: dimensions.width, backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
        <div style={{ paddingBottom: dimensions.paddingBottom }}></div>
        <img 
          src={images[currentImageIndex]} 
          alt={`Ad ${currentImageIndex + 1}`} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        {/* Carousel indicators */}
        {images.length > 1 && (
          <>
            <div style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}>
              {currentImageIndex + 1}/{images.length}
            </div>
            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '4px' }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ←
              </button>
            )}
            {currentImageIndex < images.length - 1 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                →
              </button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12 pt-20">
        <h1 className="font-medium text-4xl sm:text-5xl leading-[1.02] tracking-[-0.02em] mb-3 relative z-20 px-4 sm:px-0">
          Instagram Ad Mockup Generator
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 relative z-20 px-4 sm:px-0">
          Generate pixel-perfect Instagram ads, sponsored carousels, reels & stories in every format.
          Preview your ads before they go live.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Controls Panel */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Type & Format</h3>
            <div className="grid grid-cols-2 gap-3">
              {formatOptions.map((format) => (
                <button
                  key={format.value}
                  onClick={() => setAdData(prev => ({ ...prev, format: format.value as AdFormat }))}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    adData.format === format.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-lg mb-1">{format.icon}</div>
                  <div className="text-sm font-medium">{format.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile & Username</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border-2 border-gray-200 cursor-pointer hover:border-blue-300 transition-colors"
                    onClick={() => profileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, 'profile')}
                  >
                    {adData.profileImage ? (
                      <img 
                        src={adData.profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => profileInputRef.current?.click()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        {adData.profileImage ? 'Change' : 'Upload'}
                      </button>
                      {adData.profileImage && (
                        <button
                          onClick={() => setAdData(prev => ({ ...prev, profileImage: '' }))}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {adData.profileImage && (
                      <p className="text-xs text-green-600 mt-1 font-medium">✓ Profile image uploaded</p>
                    )}
                  </div>
                  <input
                    ref={profileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => handleImageUpload(e, 'profile')}
                    className="hidden"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Recommended: Square image, at least 150x150px</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={adData.username}
                  onChange={(e) => setAdData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="yourbrand"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {adData.format === 'carousel' ? 'Carousel Images' : 'Ad Image'}
            </h3>
            <div className="space-y-4">
              {adData.format === 'carousel' ? (
                // Carousel Interface
                <div>
                  {adData.adImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {adData.adImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={image} 
                            alt={`Carousel ${index + 1}`} 
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <div className="absolute top-1 left-1 bg-black bg-opacity-50 text-white text-xs px-1.5 py-0.5 rounded">
                            {index + 1}
                          </div>
                          <button
                            onClick={() => removeCarouselImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {adData.adImages.length < 10 && (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, 'ad')}
                      onClick={() => carouselInputRef.current?.click()}
                      className={`w-full h-24 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                        isDragOver 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      <svg className={`w-6 h-6 mb-1 ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className={`text-xs ${isDragOver ? 'text-blue-600' : 'text-gray-500'}`}>
                        Add Image ({adData.adImages.length}/10)
                      </span>
                    </div>
                  )}
                  
                  <input
                    ref={carouselInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    multiple
                    onChange={handleCarouselUpload}
                    className="hidden"
                  />
                  <p className="text-xs text-gray-500">You can add up to 10 images for carousel. Click + or drag multiple images.</p>
                </div>
              ) : (
                // Single Image Interface
                <div>
                  {adData.adImage ? (
                    <div className="relative">
                      <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={adData.adImage} 
                          alt="Ad" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <p className="text-sm text-green-600 font-medium">✓ Image uploaded successfully</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => adImageInputRef.current?.click()}
                            className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            Change
                          </button>
                          <button
                            onClick={() => setAdData(prev => ({ ...prev, adImage: '' }))}
                            className="px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, 'ad')}
                      onClick={() => adImageInputRef.current?.click()}
                      className={`w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                        isDragOver 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      } group`}
                    >
                      <svg className={`w-8 h-8 mb-2 transition-colors ${
                        isDragOver ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className={`text-sm font-medium transition-colors ${
                        isDragOver ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
                      }`}>
                        {isDragOver ? 'Drop image here' : 'Click to upload or drag-and-drop'}
                      </span>
                      <span className="text-xs text-gray-400">Supports .png or .jpg (max 10MB)</span>
                    </div>
                  )}
                  
                  <input
                    ref={adImageInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => handleImageUpload(e, 'ad')}
                    className="hidden"
                  />
                  <p className="text-xs text-gray-500">Recommended image size is 1080x1080 pixels</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Call to Action</h3>
            <select
              value={adData.cta}
              onChange={(e) => setAdData(prev => ({ ...prev, cta: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ctaOptions.map((cta) => (
                <option key={cta} value={cta}>{cta}</option>
              ))}
            </select>
          </div>

          {/* <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Likes
              </label>
              <input
                type="text"
                value={adData.likes}
                onChange={(e) => setAdData(prev => ({ ...prev, likes: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1,234"
              />
              <p className="text-xs text-gray-500 mt-1">Set the number of likes for your post</p>
            </div>
          </div> */}

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Caption</h3>
            <textarea
              value={adData.caption}
              onChange={(e) => setAdData(prev => ({ ...prev, caption: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Grab interest with more info about what you're advertising..."
            />
            <p className="text-xs text-gray-500 mt-1">Keep it short - we recommend 90 characters or less</p>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Ad Preview</h3>
            
            {/* Instagram Mock */}
            <div 
              ref={mockupRef} 
              className="mx-auto bg-white overflow-hidden"
              style={{
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                border: '1px solid #dbdbdb',
                borderRadius: '3px',
                width: '470px',
                maxWidth: '100%',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', backgroundColor: '#fff', borderBottom: '1px solid #efefef' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px', flexShrink: 0 }}>
                  {adData.profileImage ? (
                    <img src={adData.profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ width: '16px', height: '16px', display: 'inline-block' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0, overflow: 'visible' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', lineHeight: '18px', color: '#262626', overflow: 'visible', whiteSpace: 'nowrap' }}>{adData.username}</div>
                  <div style={{ fontSize: '12px', color: '#8e8e8e', lineHeight: '16px' }}>Sponsored</div>
                </div>
                <div style={{ color: '#262626', width: '24px', height: '24px', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px', display: 'block' }}>
                    <circle cx="12" cy="7" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="17" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Ad Image/Carousel */}
              <CarouselPreview adData={adData} />

              {/* Content Section - CTA, Engagement, Caption */}
              <div style={{ padding: '0' }}>
                {/* CTA Button - Directly below image */}
                <div style={{ padding: '12px 16px', backgroundColor: '#fff', borderBottom: '1px solid #efefef' }}>
                  <button style={{ 
                    width: '100%', 
                    padding: '10px 16px', 
                    backgroundColor: '#FFFFFF', 
                    color: '#262626', 
                    border: 'none',
                    borderRadius: '8px', 
                    fontSize: '15px', 
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    lineHeight: '1'
                  }}>
                    <span style={{ lineHeight: '1' }}>{adData.cta}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', flexShrink: 0, marginLeft: '8px' }}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                {/* Engagement Icons */}
                <div style={{ padding: '8px 16px 12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '4px', paddingBottom: '10px', height: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '30px' }}>
                      {/* Heart icon with count */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '30px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px', display: 'block' }}>
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span style={{ fontSize: '15px', color: '#000000', fontWeight: '400', marginTop: '3px' }}></span>
                      </div>
                      
                      {/* Comment icon with count */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', gap: '8px', height: '30px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px', display: 'block' }}>
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        
                      </div>
                      
                      {/* Share icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px', display: 'block' }}>
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </div>
                    
                    {/* Bookmark icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px', display: 'block' }}>
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  
                  <div style={{ fontSize: '15px', color: '#000000', lineHeight: '20px', marginBottom: '6px', marginTop: '10px' }}>
                    <span style={{ fontWeight: '600' }}>{adData.username}</span> {adData.caption}
                  </div>
                  
                  <div style={{ fontSize: '15px', color: '#8e8e8e', marginTop: '6px', cursor: 'pointer' }}>View all 56 comments</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-6 text-center">
              <button
                onClick={downloadMockup}
                disabled={isDownloading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download as PNG
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-2">High-quality PNG ready for presentations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What is an Ad Mockup Generator?</h3>
          <p className="text-gray-600 leading-relaxed">
            An ad mockup generator is a tool that allows you to create realistic previews of your 
            advertisements before they go live. You can test different formats, copy, and visuals 
            to see exactly how your ads will appear to users on the platform.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Why Use Instagram Ad Mockups?</h3>
          <p className="text-gray-600 leading-relaxed">
            Mockups help you visualize your ads before spending money on campaigns. You can test 
            different creative approaches, ensure your branding looks consistent, and catch potential 
            issues before your ads go live, saving time and budget.
          </p>
        </div>
      </div>

      <RelatedTools currentTool="Instagram Ad Mockup Generator" />

      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the Instagram ad mockup generator free?</h3>
            <p className="text-gray-600">
              Yes, our Instagram ad mockup generator is completely free to use. You can create 
              unlimited mockups without any registration or subscription required.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What formats are supported?</h3>
            <p className="text-gray-600">
              We support all major Instagram ad formats including Square (1:1), Portrait (4:5), 
              Landscape (16:9), Story (9:16), Carousel, and Reel formats to match your campaign needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I download the mockups?</h3>
            <p className="text-gray-600">
              Yes! Simply click the &quot;Download as PNG&quot; button to save your mockup in high-quality PNG format. 
              Perfect for presentations, client approvals, or team reviews before launching your actual 
              Instagram ad campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
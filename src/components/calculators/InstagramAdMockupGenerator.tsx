"use client";

import React, { useState, useRef } from 'react';
import RelatedTools from './RelatedTools';

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
  const profileInputRef = useRef<HTMLInputElement>(null);
  const adImageInputRef = useRef<HTMLInputElement>(null);
  const carouselInputRef = useRef<HTMLInputElement>(null);

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
        return 'aspect-square';
      case '4:5':
        return 'aspect-[4/5]';
      case '16:9':
        return 'aspect-video';
      case '9:16':
      case 'reel':
        return 'aspect-[9/16]';
      default:
        return 'aspect-square';
    }
  };

  const downloadMockup = () => {
    // This would generate and download the mockup
    alert('Mockup download functionality would be implemented here');
  };

  const CarouselPreview = ({ adData }: { adData: AdData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = adData.format === 'carousel' && adData.adImages.length > 0 
      ? adData.adImages 
      : adData.adImage ? [adData.adImage] : [];

    if (images.length === 0) {
      return (
        <div className={`${getAdImageDimensions()} bg-gray-100 overflow-hidden relative`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-500 text-sm">
                {adData.format === 'carousel' ? 'Upload carousel images' : 'Upload your ad image'}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`${getAdImageDimensions()} bg-gray-100 overflow-hidden relative`}>
        <img 
          src={images[currentImageIndex]} 
          alt={`Ad ${currentImageIndex + 1}`} 
          className="w-full h-full object-cover" 
        />
        
        {/* Carousel indicators */}
        {images.length > 1 && (
          <>
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {currentImageIndex + 1}/{images.length}
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            {currentImageIndex > 0 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
              >
                ←
              </button>
            )}
            {currentImageIndex < images.length - 1 && (
              <button
                onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Instagram Ad Mockup Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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
          </div>

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
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center p-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-3 flex-shrink-0">
                  {adData.profileImage ? (
                    <img src={adData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{adData.username}</div>
                  <div className="text-xs text-gray-500">Sponsored</div>
                </div>
                <div className="text-gray-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>

              {/* Ad Image/Carousel */}
              <CarouselPreview adData={adData} />

              {/* Engagement Bar */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                
                <div className="text-sm font-semibold mb-1">{adData.likes} likes</div>
                
                <div className="text-sm">
                  <span className="font-semibold">{adData.username}</span> {adData.caption}
                </div>
                
                <div className="text-xs text-gray-500 mt-2">View all comments</div>
                
                {/* CTA Button */}
                <button className="w-full mt-3 py-2 bg-blue-500 text-white rounded-md text-sm font-medium">
                  {adData.cta}
                </button>
              </div>
            </div>

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
              Yes, you can download high-quality PNG versions of your mockups for presentations, 
              client approvals, or team reviews before launching your actual Instagram ad campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';

export default function FloatingLogos() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // xl breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Don't render logos on smaller screens to improve performance
  if (!isLargeScreen) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-w-6xl mx-auto px-4 overflow-hidden">
      {/* Top-left corner */}
      <div className="absolute left-20 top-0 -translate-x-1/2 -translate-y-1/4 -rotate-6 pointer-events-none z-0 opacity-75 mt-10">
        <div className="w-15 h-15 bg-white rounded-2xl shadow-md flex items-center justify-center p-3">
          {/* Simplified TikTok logo */}
          <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">TT</span>
          </div>
        </div>
      </div>

      {/* Bottom-left corner */}
      <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-3/4 rotate-6 pointer-events-none z-0 opacity-75 mb-20">
        <div className="w-15 h-15 bg-white rounded-2xl shadow-md flex items-center justify-center p-3">
          {/* Simplified Google logo */}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">G</span>
          </div>
        </div>
      </div>

      {/* Top-right corner */}
      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/4 rotate-6 pointer-events-none z-0 opacity-75 mt-10">
        <div className="w-15 h-15 bg-white rounded-2xl shadow-md flex items-center justify-center p-3">
          {/* Simplified YouTube logo */}
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">▶</span>
          </div>
        </div>
      </div>

      {/* Bottom-right corner */}
      <div className="absolute right-20 bottom-0 translate-x-1/2 translate-y-3/4 -rotate-6 pointer-events-none z-0 opacity-95 mb-20">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-3">
          {/* Simplified Meta logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
        </div>
      </div>
    </div>
  )
}

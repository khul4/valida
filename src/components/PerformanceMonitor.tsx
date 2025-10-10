'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('🚀 Performance Metrics:', {
              'DOM Content Loaded': `${Math.round(navEntry.domContentLoadedEventEnd - navEntry.fetchStart)}ms`,
              'Load Complete': `${Math.round(navEntry.loadEventEnd - navEntry.fetchStart)}ms`,
              'First Paint': `${Math.round(navEntry.responseEnd - navEntry.requestStart)}ms`
            });
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
      } catch (e) {
        console.log('Performance Observer not supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
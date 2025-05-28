'use client';

import { useEffect } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log(`${entry.name}:`, entry.startTime);
          
          // Report to analytics or monitoring service
          if (entry.name === 'LCP' && entry.startTime > 2500) {
            console.warn('Poor LCP detected:', entry.startTime);
          }
          if (entry.name === 'FID' && entry.startTime > 100) {
            console.warn('Poor FID detected:', entry.startTime);
          }
          if (entry.name === 'layout-shift') {
            const layoutShift = entry as LayoutShift;
            if (layoutShift.value > 0.1) {
              console.warn('Poor CLS detected:', layoutShift.value);
            }
          }
        }
      });

      // Observe Core Web Vitals
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            console.warn('Long task detected:', entry);
          }
        }
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });

      // Cleanup
      return () => {
        observer.disconnect();
        longTaskObserver.disconnect();
      };
    }
  }, []);

  return null;
} 
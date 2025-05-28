'use client';

import { useEffect } from 'react';

export function DeferredScripts() {
  useEffect(() => {
    // Load analytics script
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    analyticsScript.async = true;
    analyticsScript.defer = true;
    document.body.appendChild(analyticsScript);

    // Load any other non-critical scripts here
    return () => {
      document.body.removeChild(analyticsScript);
    };
  }, []);

  return null;
} 
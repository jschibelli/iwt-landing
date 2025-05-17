import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Animated404Visual } from '../components/Animated404Visual';

// Optional: Import Sentry if you're using error logging
// import * as Sentry from '@sentry/nextjs';

// Declare the type for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const NotFoundPage: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    // Auto-focus heading for accessibility
    if (headingRef.current) {
      headingRef.current.focus();
    }
    
    // Optional: Log 404 error to Sentry
    // Sentry.captureMessage(`404 - Page Not Found: ${currentPath}`, 'info');
    
    // Optional: Analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'pageNotFound',
        'pagePath': currentPath
      });
    }
  }, [currentPath]);

  return (
    <>
      <Head>
        <title>Page Not Found | IntraWeb Technologies</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Head>
      
      <main 
        className="min-h-screen bg-white dark:bg-charcoal-900 text-charcoal dark:text-gray-100 flex flex-col items-center justify-center px-6 py-16 text-center" 
        role="main" 
        aria-labelledby="404-heading"
      >
        <div className="max-w-md">
          <h1 
            id="404-heading"
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold text-purple dark:text-purple-light mb-4"
            tabIndex={-1}
          >
            404
          </h1>
          <p className="text-xl font-semibold mb-2">Page Not Found</p>
          <p className="text-base md:text-sm text-gray-600 dark:text-gray-300 mb-8">
            We couldn't find the page you were looking for. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/" 
              className="px-5 py-3 rounded-md bg-orange text-white hover:bg-orange-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange dark:focus:ring-offset-charcoal-900"
            >
              Go to Homepage
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-3 rounded-md border border-purple text-purple dark:text-purple-light dark:border-purple-light hover:bg-purple-light dark:hover:bg-purple-dark/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple dark:focus:ring-offset-charcoal-900"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-[400px] w-full">
          <Animated404Visual />
        </div>
      </main>
    </>
  );
};

export default NotFoundPage; 
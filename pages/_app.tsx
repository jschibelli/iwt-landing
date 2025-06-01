import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import Cookies from 'js-cookie';
import '../src/styles/globals.css';

// Initialize GA
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log('App component mounted');

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(arguments);
    };

    // Check for existing consent
    const hasConsent = Cookies.get('cookie_consent');
    const analyticsConsent = Cookies.get('cookie_consent_analytics');
    const marketingConsent = Cookies.get('cookie_consent_marketing');

    console.log('Consent status:', { hasConsent, analyticsConsent, marketingConsent });

    // Load scripts based on consent
    if (hasConsent === 'true') {
      if (analyticsConsent === 'true') {
        // Load Google Analytics
        const gaScript = document.createElement('script');
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
        gaScript.async = true;
        document.head.appendChild(gaScript);

        // Initialize GA
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!);
      }

      if (marketingConsent === 'true') {
        console.log('Loading HubSpot script');
        // Load HubSpot
        const hubspotScript = document.createElement('script');
        hubspotScript.src = `https://js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_ID}.js`;
        hubspotScript.async = true;
        document.head.appendChild(hubspotScript);
      }
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {isClient && <CookieConsentBanner />}
    </>
  );
} 
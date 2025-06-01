"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(true); // Changed to true by default for testing
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    console.log('CookieConsentBanner mounted');
    const hasConsent = Cookies.get('cookie_consent');
    console.log('Has consent:', hasConsent);
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    console.log('Accept all clicked');
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setShowBanner(false);
    loadScripts(newConsent);
  };

  const handleSavePreferences = () => {
    console.log('Save preferences clicked');
    saveConsent(consent);
    setShowBanner(false);
    setShowPreferences(false);
    loadScripts(consent);
  };

  const saveConsent = (consent: ConsentCategories) => {
    console.log('Saving consent:', consent);
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    Cookies.set('cookie_consent_analytics', consent.analytics.toString(), { expires: 365 });
    Cookies.set('cookie_consent_marketing', consent.marketing.toString(), { expires: 365 });
  };

  const loadScripts = (consent: ConsentCategories) => {
    console.log('Loading scripts with consent:', consent);
    if (consent.analytics) {
      // Load Google Analytics
      const gaScript = document.createElement('script');
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      gaScript.async = true;
      document.head.appendChild(gaScript);
    }

    if (consent.marketing) {
      console.log('Loading HubSpot script');
      // Load HubSpot
      const hubspotScript = document.createElement('script');
      hubspotScript.src = `https://js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_ID}.js`;
      hubspotScript.async = true;
      document.head.appendChild(hubspotScript);
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-[9999]">
      <div className="max-w-7xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              We use cookies to improve your experience. By clicking "Accept All", you consent to non-essential cookies. You can{' '}
              <button
                onClick={() => setShowPreferences(true)}
                className="text-orange-500 hover:text-orange-400 underline focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              >
                manage preferences
              </button>
              .
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Cookie Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-400">Required for the website to function properly</p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.necessary}
                  disabled
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-gray-400">Help us understand how visitors interact with our website</p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-400">Used to track visitors across websites for marketing purposes</p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
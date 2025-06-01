/**
 * Cookie and Third-Party Script Audit Tool
 * 
 * This script scans the rendered HTML of the website to identify third-party scripts
 * and cookies that require user consent. Run with:
 * 
 * npm run audit:cookies
 */

import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// List of known third-party domains that require consent
const THIRD_PARTY_DOMAINS = [
  'googletagmanager.com',
  'google-analytics.com',
  'doubleclick.net',
  'hubspot.com',
  'hs-scripts.com',
  'hotjar.com',
  'facebook.com',
  'linkedin.com',
  'twitter.com',
  'pinterest.com',
  'youtube.com',
  'vimeo.com',
  'cloudflare.com',
  'cloudflare-ipfs.com',
  'stripe.com',
  'paypal.com',
  'intercom.io',
  'drift.com',
  'crisp.chat',
  'zendesk.com',
  'segment.io',
  'mixpanel.com',
  'amplitude.com',
  'heap.io',
  'optimizely.com',
  'vwo.com',
  'abtasty.com',
  'fullstory.com',
  'mouseflow.com',
  'luckyorange.com',
  'crazyegg.com',
  'inspectlet.com',
  'clicktale.com',
  'sessioncam.com',
  'smartlook.com',
  'hotjar.com',
  'clarity.ms',
  'microsoft.com',
  'bing.com',
  'adroll.com',
  'criteo.com',
  'taboola.com',
  'outbrain.com',
  'quantserve.com',
  'quantcast.com',
  'scorecardresearch.com',
  'comscore.com',
  'nielsen.com',
  'adform.net',
  'adnxs.com',
  'rubiconproject.com',
  'pubmatic.com',
  'openx.net',
  'appnexus.com',
  'criteo.com',
  'taboola.com',
  'outbrain.com',
  'quantserve.com',
  'quantcast.com',
  'scorecardresearch.com',
  'comscore.com',
  'nielsen.com',
  'adform.net',
  'adnxs.com',
  'rubiconproject.com',
  'pubmatic.com',
  'openx.net',
  'appnexus.com',
];

interface ScriptInfo {
  src: string;
  type: 'analytics' | 'marketing' | 'necessary' | 'unknown';
  domain: string;
}

async function auditPage(url: string): Promise<ScriptInfo[]> {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const scripts = document.querySelectorAll('script[src]');
    const foundScripts: ScriptInfo[] = [];

    scripts.forEach((script: Element) => {
      const src = script.getAttribute('src') || '';
      const domain = new URL(src, url).hostname;

      if (THIRD_PARTY_DOMAINS.some(d => domain.includes(d))) {
        let type: ScriptInfo['type'] = 'unknown';
        
        // Categorize script type
        if (domain.includes('google-analytics.com') || domain.includes('googletagmanager.com')) {
          type = 'analytics';
        } else if (domain.includes('hubspot.com') || domain.includes('hs-scripts.com')) {
          type = 'marketing';
        } else if (domain.includes('cloudflare.com')) {
          type = 'necessary';
        }

        foundScripts.push({ src, type, domain });
      }
    });

    return foundScripts;
  } catch (error) {
    console.error(`Error auditing ${url}:`, error);
    return [];
  }
}

async function main() {
  // Read the sitemap or list of URLs to audit
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  let urls: string[] = [];

  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }
  } catch (error) {
    console.error('Error reading sitemap, defaulting to homepage:', error);
    urls = ['http://localhost:3000']; // Default to localhost for development
  }

  console.log('🔍 Starting cookie and script audit...\n');

  for (const url of urls) {
    console.log(`\nAuditing ${url}...`);
    const scripts = await auditPage(url);

    if (scripts.length === 0) {
      console.log('✅ No third-party scripts found');
      continue;
    }

    console.log('\nFound third-party scripts:');
    scripts.forEach(({ src, type, domain }) => {
      console.log(`\n🔹 ${domain}`);
      console.log(`   Type: ${type}`);
      console.log(`   Source: ${src}`);
      console.log('   Required Consent:');
      switch (type) {
        case 'analytics':
          console.log('   - Analytics cookies consent');
          break;
        case 'marketing':
          console.log('   - Marketing cookies consent');
          break;
        case 'necessary':
          console.log('   - No consent required (necessary)');
          break;
        default:
          console.log('   - Unknown consent type, review manually');
      }
    });
  }

  console.log('\n📝 Audit Summary:');
  console.log('1. Ensure all third-party scripts are loaded only after user consent');
  console.log('2. Update CookieConsentBanner.tsx to include all script categories');
  console.log('3. Document all third-party services in privacy policy');
  console.log('4. Consider implementing a script manager to handle consent-based loading');
}

main().catch(console.error); 
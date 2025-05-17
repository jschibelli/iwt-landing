const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const glob = require('glob');
const fetch = require('node-fetch');

const pages = glob.sync('app/**/*.tsx');
const links = new Set();

pages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(content, { xmlMode: false });
  $('a').each((_, el) => {
    const href = $(el).attr('href');
    if (href && !href.startsWith('#')) links.add(href);
  });
});

(async () => {
  for (const link of links) {
    try {
      const res = await fetch(`http://localhost:3000${link}`);
      if (res.status >= 400) {
        console.error(`Broken link: ${link} (status ${res.status})`);
      } else {
        console.log(`OK: ${link}`);
      }
    } catch (e) {
      console.error(`Error checking link: ${link}`, e);
    }
  }
})(); 
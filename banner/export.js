// banner.html içindeki banner'ları PNG olarak dışa aktarır.
// Kullanım: node banner/export.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2100, height: 1800 } });
  await page.goto('file://' + path.join(__dirname, 'banner.html'));
  await page.evaluate(() => document.fonts.ready);
  for (const id of ['desktop', 'mobile']) {
    await page.locator('#' + id).screenshot({ path: path.join(__dirname, `banner-${id}.png`) });
    console.log(`banner-${id}.png kaydedildi`);
  }
  await browser.close();
})();

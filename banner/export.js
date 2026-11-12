// Slider'ı Ticimax'e yüklenecek JPG olarak dışa aktarır (1672 × 941).
// Kullanım: node banner/export.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1760, height: 1000 } });
  await page.goto('file://' + path.join(__dirname, 'askilik-slider.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const out = path.join(__dirname, 'askilik-slider.jpg');
  await page.locator('#slide').screenshot({ path: out, type: 'jpeg', quality: 92 });
  console.log('askilik-slider.jpg kaydedildi');
  await browser.close();
})();

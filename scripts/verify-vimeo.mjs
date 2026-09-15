import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
const base=process.env.MORPIO_URL || 'http://127.0.0.1:3107';
// Matched against Vimeo oEmbed titles AND descriptions, not submitted order.
const expected=[['KO','1226530757','b828cbdcc6'],['JP','1226530758','5c2c86e9ae'],['EN','1226620443','34dea26cfc']];
const browser=await puppeteer.launch({headless:true});
try {
 for(const width of [390,1280]) {
  const page=await browser.newPage(); await page.setViewport({width,height:900});
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.waitForSelector('.language-switcher button');
  assert.deepEqual(await page.$$eval('.language-switcher button',ns=>ns.map(n=>[n.textContent,n.dataset.videoId])),expected.map(([l,id])=>[l,id]));
  for(const [label,id,hash] of expected) {
   await page.click(`button[data-video-id="${id}"]`);
   assert.equal(await page.$('[data-feature-film] iframe'),null);
   await page.waitForFunction(() => {const i=document.querySelector('[data-feature-film] .media-poster img');return i?.complete && i.naturalWidth > 0;});
   const poster=await page.$eval('[data-feature-film] .media-poster img',n=>({src:new URL(n.src).pathname,width:n.naturalWidth,height:n.naturalHeight}));
   assert.equal(poster.src,`/work/tail-trailer-${label.toLowerCase()}.jpg`);
   assert(poster.width >= 1280);
   console.log(JSON.stringify({width,label,poster}));
   await page.click('[data-feature-film] .media-poster');
   await page.waitForSelector('[data-feature-film] iframe');
   const src=await page.$eval('[data-feature-film] iframe',n=>n.src);
   assert.equal(src,`https://player.vimeo.com/video/${id}?h=${hash}&autoplay=1`);
   console.log(JSON.stringify({width,label,src}));
  }
  const html=await page.content();
  for(const old of ['31Jm1Z2fnek','vVmnsDeSwhE','tHjjSmaGcos']) assert(!html.includes(old));
  await page.close();
 }
 console.log('PASS: all three language mappings, hashes, order, replacement and old-link removal');
} finally {await browser.close();}

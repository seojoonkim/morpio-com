import puppeteer from "puppeteer";

const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });

const h1 = await page.$eval("h1", (el) => el.textContent?.replace(/\s+/g, " ").trim());
if (h1 !== "ANOTHER WORLDSTARTS HERE.") throw new Error(`Unexpected tagline: ${h1}`);

const targets = [
  ["a[href='#morph']", "morph"],
  ["a[href='#work']", "work"],
  ["a[href='#about']", "about"],
  ["a[href='#contact']", "contact"],
];
for (const [selector, id] of targets) {
  await page.evaluate(() => scrollTo(0, 0));
  await page.click(selector);
  await page.waitForFunction((expected) => location.hash === `#${expected}`, {}, id);
}

await page.click("button[data-morph-mode='campaign']");
const campaignPressed = await page.$eval("button[data-morph-mode='campaign']", (el) => el.getAttribute("aria-pressed"));
const output = await page.$eval(".screen-readout strong", (el) => el.textContent?.trim());
if (campaignPressed !== "true" || output !== "AI CAMPAIGN") throw new Error(`Morph button failed: ${campaignPressed}/${output}`);

const reelCount = await page.$$eval("[data-reel-id]", (cards) => cards.length);
if (reelCount !== 4) throw new Error(`Expected 4 selected works, found ${reelCount}`);
await page.click("button[data-video-id='tHjjSmaGcos']");
const japanesePressed = await page.$eval("button[data-video-id='tHjjSmaGcos']", (el) => el.getAttribute("aria-pressed"));
const languageSrc = await page.$eval("[data-reel-id='after-the-tail-stopped'] iframe", (el) => el.getAttribute("src"));
if (japanesePressed !== "true" || !languageSrc?.includes("tHjjSmaGcos")) throw new Error(`Language switch failed: ${japanesePressed}/${languageSrc}`);

await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await page.reload({ waitUntil: "networkidle0" });
const desktopH1 = await page.$eval("h1", (el) => el.textContent?.replace(/\s+/g, " ").trim());
if (desktopH1 !== h1) throw new Error("Desktop tagline mismatch");
console.log(JSON.stringify({ pass: true, mobile: 390, desktop: 1280, tagline: h1, anchors: targets.map(([, id]) => id), morphButton: output, selectedWorks: reelCount, languageSwitch: "日本語" }));
await browser.close();

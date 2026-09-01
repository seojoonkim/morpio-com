import puppeteer from "puppeteer";

const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await puppeteer.launch({ headless: true, executablePath });
const page = await browser.newPage();
const results = [];

for (const viewport of [
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1280, height: 900 },
]) {
  await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("[data-hero-film]");
  const summary = await page.evaluate(() => ({
    h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, "").trim(),
    scrollWidth: document.documentElement.scrollWidth,
    viewportWidth: innerWidth,
    sections: ["work", "why", "system", "studio", "contact"].filter((id) => document.getElementById(id)).length,
    featureFilms: document.querySelectorAll("[data-feature-film]").length,
    demoRows: document.querySelectorAll("[data-demo-row]").length,
    iframes: document.querySelectorAll("iframe").length,
    heroVideo: document.querySelector("[data-hero-film] video")?.getAttribute("src"),
    heroPoster: document.querySelector("[data-hero-film] video")?.getAttribute("poster"),
    dotColor: getComputedStyle(document.querySelector(".nav-logo span")).color,
  }));
  if (summary.h1 !== "ANOTHERWORLDSTARTSHERE") throw new Error(`Unexpected tagline: ${summary.h1}`);
  if (summary.scrollWidth > summary.viewportWidth + 1) throw new Error(`Horizontal overflow at ${viewport.width}: ${summary.scrollWidth}`);
  if (summary.sections !== 5 || summary.featureFilms !== 1 || summary.demoRows !== 3) throw new Error(`Structure mismatch at ${viewport.width}: ${JSON.stringify(summary)}`);
  if (summary.iframes !== 0) throw new Error(`YouTube loaded before interaction at ${viewport.width}`);
  if (!summary.heroVideo?.endsWith("hero-loop.mp4") || !summary.heroPoster?.endsWith("hero-poster.jpg")) throw new Error(`Hero media mismatch at ${viewport.width}`);
  if (summary.dotColor !== "rgb(0, 174, 255)") throw new Error(`Wrong logo dot color: ${summary.dotColor}`);
  results.push({ width: viewport.width, overflow: false, sections: summary.sections });
}

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForSelector("button[data-video-id='31Jm1Z2fnek']");
const urlBeforeNav = page.url();
await page.click('.site-nav a[href="#work"]');
await new Promise((resolve) => setTimeout(resolve, 700));
if (page.url() !== urlBeforeNav) throw new Error(`Navigation changed URL: ${page.url()}`);
const workKickerTop = await page.$eval("#work .kicker", (el) => el.getBoundingClientRect().top);
if (workKickerTop < 92 || workKickerTop > 130) throw new Error(`Work anchor lands at an awkward position: ${workKickerTop}px`);
if (await page.$eval(".round-play", (el) => el.textContent?.trim())) throw new Error("Play control contains a platform-rendered glyph");
const defaultLanguage = await page.$eval("button[data-video-id='31Jm1Z2fnek']", (el) => el.getAttribute("aria-pressed"));
if (defaultLanguage !== "true") throw new Error("Korean subtitles are not selected by default");
await page.click("button[data-video-id='tHjjSmaGcos']");
const japanese = await page.$eval("button[data-video-id='tHjjSmaGcos']", (el) => el.getAttribute("aria-pressed"));
if (japanese !== "true") throw new Error("Language switch failed");
await page.click("[data-feature-film] .media-poster");
await page.waitForSelector("[data-feature-film] iframe");
const featureSrc = await page.$eval("[data-feature-film] iframe", (el) => el.getAttribute("src"));
if (!featureSrc?.includes("tHjjSmaGcos")) throw new Error("Feature playback failed");
await page.click("[data-demo-row] .demo-toggle");
const expanded = await page.$eval("[data-demo-row] .demo-toggle", (el) => el.getAttribute("aria-expanded"));
if (expanded !== "true") throw new Error("Demo expansion failed");
await page.click("[data-demo-row] .media-poster");
await page.waitForSelector("[data-demo-row] iframe");
const iframeCount = await page.$$eval("iframe", (els) => els.length);
if (iframeCount !== 1) throw new Error(`Expected one playing video, found ${iframeCount}`);

await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await page.reload({ waitUntil: "domcontentloaded" });
const reduced = await page.$eval("[data-hero-film] video", (el) => ({ display: getComputedStyle(el).display, src: el.getAttribute("src") }));
if (reduced.display !== "none") throw new Error("Reduced-motion hero fallback failed");

console.log(JSON.stringify({ pass: true, viewports: results, languageSwitch: "JP", singlePlayback: true, reducedMotion: true }));
await browser.close();

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
for (const id of ["why", "work", "system", "studio", "contact"]) {
  await page.click(`.site-nav a[href="#${id}"]`);
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (page.url() !== urlBeforeNav) throw new Error(`Navigation changed URL: ${page.url()}`);
  const landing = await page.evaluate((targetId) => {
    const header = document.querySelector(".site-nav").getBoundingClientRect();
    const kicker = document.querySelector(`#${targetId} .kicker`).getBoundingClientRect();
    return kicker.top - header.bottom;
  }, id);
  if (landing < 48 || (!["studio", "contact"].includes(id) && landing > 58)) throw new Error(`${id} mobile anchor gap is awkward: ${landing}px`);
}
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

const desktopNav = await browser.newPage();
await desktopNav.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await desktopNav.goto(url, { waitUntil: "domcontentloaded" });
const desktopUrl = desktopNav.url();
for (const id of ["why", "work", "system", "studio", "contact"]) {
  await desktopNav.click(`.site-nav a[href="#${id}"]`);
  await new Promise((resolve) => setTimeout(resolve, 1200));
  if (desktopNav.url() !== desktopUrl) throw new Error(`Desktop navigation changed URL: ${desktopNav.url()}`);
  const landing = await desktopNav.evaluate((targetId) => {
    const header = document.querySelector(".site-nav").getBoundingClientRect();
    const kicker = document.querySelector(`#${targetId} .kicker`).getBoundingClientRect();
    return kicker.top - header.bottom;
  }, id);
  if (landing < 60 || (id !== "contact" && landing > 70)) throw new Error(`${id} desktop anchor gap is awkward: ${landing}px`);
}
await desktopNav.close();

const shiftingNav = await browser.newPage();
await shiftingNav.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await shiftingNav.goto(url, { waitUntil: "domcontentloaded" });
await shiftingNav.click('.site-nav a[href="#system"]');
await new Promise((resolve) => setTimeout(resolve, 120));
await shiftingNav.evaluate(() => {
  const spacer = document.createElement("div");
  spacer.dataset.anchorShiftProbe = "true";
  spacer.style.height = "120px";
  document.querySelector("#system")?.before(spacer);
});
await new Promise((resolve) => setTimeout(resolve, 1500));
const shiftedLanding = await shiftingNav.evaluate(() => {
  const header = document.querySelector(".site-nav").getBoundingClientRect();
  const kicker = document.querySelector("#system .kicker").getBoundingClientRect();
  return kicker.top - header.bottom;
});
if (shiftedLanding < 48 || shiftedLanding > 58) throw new Error(`One-click navigation did not recover from a late layout shift: ${shiftedLanding}px`);
await shiftingNav.close();

const interruptedNav = await browser.newPage();
await interruptedNav.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await interruptedNav.goto(url, { waitUntil: "domcontentloaded" });
await interruptedNav.click('.site-nav a[href="#system"]');
await new Promise((resolve) => setTimeout(resolve, 200));
await interruptedNav.mouse.wheel({ deltaY: -500 });
await new Promise((resolve) => setTimeout(resolve, 120));
const interruptedPosition = await interruptedNav.evaluate(() => scrollY);
await new Promise((resolve) => setTimeout(resolve, 1600));
const settledInterruptedPosition = await interruptedNav.evaluate(() => scrollY);
if (Math.abs(settledInterruptedPosition - interruptedPosition) > 2) throw new Error(`Navigation kept moving after user input: ${interruptedPosition}px → ${settledInterruptedPosition}px`);
await interruptedNav.close();

console.log(JSON.stringify({ pass: true, viewports: results, languageSwitch: "JP", singlePlayback: true, reducedMotion: true, anchorSpacing: true, lateLayoutShiftRecovery: true, userInterruption: true, stableUrl: true }));
await browser.close();

import puppeteer from "puppeteer";

const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const results = [];

for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 900 }]) {
  await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });

  const summary = await page.evaluate(() => ({
    h1: document.querySelector("h1")?.textContent?.replace(/\s+/g, "").trim(),
    scrollWidth: document.documentElement.scrollWidth,
    viewportWidth: innerWidth,
    sections: ["why", "work", "system", "team", "contact"].filter((id) => document.getElementById(id)).length,
    cards: document.querySelectorAll("[data-reel-id]").length,
    posters: document.querySelectorAll(".video-poster").length,
    dotColor: getComputedStyle(document.querySelector(".nav-logo span")).color,
  }));
  if (summary.h1 !== "ANOTHERWORLDSTARTSHERE.") throw new Error(`Unexpected tagline: ${summary.h1}`);
  if (summary.scrollWidth !== summary.viewportWidth) throw new Error(`Horizontal overflow at ${viewport.width}: ${summary.scrollWidth}`);
  if (summary.sections !== 5 || summary.cards !== 4 || summary.posters !== 4) throw new Error(`Structure mismatch at ${viewport.width}: ${JSON.stringify(summary)}`);
  if (summary.dotColor !== "rgb(0, 174, 255)") throw new Error(`Wrong logo dot color: ${summary.dotColor}`);
  results.push({ width: viewport.width, overflow: false, dotColor: summary.dotColor });
}

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0" });
const defaultLanguage = await page.$eval("button[data-video-id='31Jm1Z2fnek']", (el) => el.getAttribute("aria-pressed"));
const defaultPoster = await page.$eval("[data-reel-id='after-the-tail-stopped'] .video-poster img", (el) => el.getAttribute("src"));
if (defaultLanguage !== "true" || !defaultPoster?.includes("31Jm1Z2fnek")) throw new Error("Korean subtitles are not selected by default");
for (const id of ["why", "system", "work", "team", "contact"]) {
  await page.evaluate(() => scrollTo(0, 0));
  await page.click(`a[href='#${id}']`);
  await page.waitForFunction((expected) => location.hash === `#${expected}`, {}, id);
}
await page.click("button[data-video-id='tHjjSmaGcos']");
await page.waitForFunction(() => document.querySelector("button[data-video-id='tHjjSmaGcos']")?.getAttribute("aria-pressed") === "true");
const language = await page.$eval("button[data-video-id='tHjjSmaGcos']", (el) => el.getAttribute("aria-pressed"));
const posterSrc = await page.$eval("[data-reel-id='after-the-tail-stopped'] .video-poster img", (el) => el.getAttribute("src"));
if (language !== "true" || !posterSrc?.includes("tHjjSmaGcos")) throw new Error("Language switch failed");
await page.click("[data-reel-id='after-the-tail-stopped'] .video-poster");
await page.waitForSelector("[data-reel-id='after-the-tail-stopped'] iframe");
const languageSrc = await page.$eval("[data-reel-id='after-the-tail-stopped'] iframe", (el) => el.getAttribute("src"));
if (!languageSrc?.includes("tHjjSmaGcos")) throw new Error("Video playback failed");

console.log(JSON.stringify({ pass: true, viewports: results, selectedWorks: 4, languageSwitch: "日本語" }));
await browser.close();

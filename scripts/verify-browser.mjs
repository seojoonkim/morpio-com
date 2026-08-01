import puppeteer from "puppeteer";

const target = process.env.MORPIO_URL || "http://127.0.0.1:3107";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  protocolTimeout: 20_000,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});
const browserProcess = browser.process();

const failures = [];
const results = [];
const check = (value, message) => { if (!value) failures.push(message); };

try {
  for (const viewport of [
    { width: 390, height: 844, name: "mobile" },
    { width: 1280, height: 800, name: "desktop" },
  ]) {
    console.error(`QA ${viewport.name}: open page`);
    const page = await browser.newPage();
    await page.setViewport(viewport);
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "no-preference" }]);
    await page.goto(target, { waitUntil: "domcontentloaded", timeout: 20_000 });
    console.error(`QA ${viewport.name}: navigated`);
    await page.waitForSelector('[data-morph-mode="campaign"]', { timeout: 10_000 });
    console.error(`QA ${viewport.name}: hydrated`);

    const initial = await page.evaluate(() => {
      const rect = (selector) => {
        const box = document.querySelector(selector)?.getBoundingClientRect();
        return box ? { left: box.left, right: box.right, top: box.top, bottom: box.bottom, width: box.width, height: box.height } : null;
      };
      const cards = [...document.querySelectorAll(".reel-card")];
      return {
        viewport: { width: innerWidth, height: innerHeight },
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        heading: rect("h1"),
        footer: rect("footer"),
        cards: cards.length,
        cardColumns: new Set(cards.map((card) => Math.round(card.getBoundingClientRect().left))).size,
        sample: document.querySelectorAll(".reel-card .sample-stamp").length,
        placeholder: [...document.querySelectorAll(".reel-caption")].filter((el) => el.textContent?.includes("PLACEHOLDER")).length,
        videos: [...document.querySelectorAll("video")].map((video) => ({ src: video.currentSrc || video.src, error: video.error?.message || null })),
      };
    });

    console.error(`QA ${viewport.name}: measured`);
    await page.evaluate(() => document.querySelector('[data-morph-mode="campaign"]')?.click());
    await new Promise((resolve) => setTimeout(resolve, 350));
    const interaction = await page.evaluate(() => ({
      pressed: document.querySelector('[data-morph-mode="campaign"]')?.getAttribute("aria-pressed"),
      readout: document.querySelector(".screen-readout strong")?.textContent,
      src: document.querySelector(".morph-screen img")?.getAttribute("src"),
    }));
    console.error(`QA ${viewport.name}: interaction`);

    let menu = null;
    if (viewport.name === "mobile") {
      await page.evaluate(() => document.querySelector(".menu-button")?.click());
      menu = await page.evaluate(() => ({
        expanded: document.querySelector(".menu-button")?.getAttribute("aria-expanded"),
        visible: Boolean(document.querySelector(".mobile-menu")),
        bodyOverflow: getComputedStyle(document.body).overflow,
      }));
      await page.evaluate(() => document.querySelector('.mobile-menu a[href="#work"]')?.click());
      menu.closedAfterLink = await page.evaluate(() => !document.querySelector(".mobile-menu"));
      console.error(`QA ${viewport.name}: menu`);
    }

    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    console.error(`QA ${viewport.name}: media emulated`);
    await new Promise((resolve) => setTimeout(resolve, 100));
    const reduced = await page.evaluate(() => ({
      matches: matchMedia("(prefers-reduced-motion: reduce)").matches,
      visibleVideos: [...document.querySelectorAll(".reel-media video")].filter((video) => getComputedStyle(video).display !== "none").length,
      htmlScrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    }));
    console.error(`QA ${viewport.name}: reduced evaluated`);

    check(initial.viewport.width === viewport.width, `${viewport.name}: wrong viewport width`);
    check(initial.overflow <= 1, `${viewport.name}: horizontal overflow ${initial.overflow}px`);
    check(initial.heading && initial.heading.left >= 0 && initial.heading.right <= viewport.width + 1, `${viewport.name}: hero heading is clipped`);
    check(initial.footer && initial.footer.left >= 0 && initial.footer.right <= viewport.width + 1, `${viewport.name}: footer is clipped`);
    check(initial.cards === 6 && initial.sample === 6 && initial.placeholder === 6, `${viewport.name}: reel labels/cards incomplete`);
    check(initial.videos.length === 6 && initial.videos.every((video) => video.src.endsWith(".mp4") && !video.error), `${viewport.name}: a video source failed`);
    check(viewport.name !== "mobile" || initial.cardColumns === 1, "mobile: reel cards are not a single column");
    check(interaction.pressed === "true" && interaction.readout === "AI CAMPAIGN" && interaction.src?.includes("advertising"), `${viewport.name}: morph interaction failed`);
    check(!menu || (menu.expanded === "true" && menu.visible && menu.bodyOverflow === "hidden" && menu.closedAfterLink), "mobile: menu behavior failed");
    check(reduced.matches && reduced.visibleVideos === 0 && reduced.htmlScrollBehavior === "auto", `${viewport.name}: reduced-motion contract failed`);

    const screenshot = `/tmp/morpio-${viewport.name}.png`;
    await page.screenshot({ path: screenshot, fullPage: true, captureBeyondViewport: false });
    console.error(`QA ${viewport.name}: screenshot`);
    results.push({ viewport: viewport.name, initial, interaction, menu, reduced, screenshot });
    await page.close();
  }
} finally {
  browser.disconnect();
  browserProcess?.kill("SIGTERM");
}

console.log(JSON.stringify(results, null, 2));
if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: browser QA at 390px and 1280px");

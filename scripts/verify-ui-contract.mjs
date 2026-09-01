import puppeteer from "puppeteer";

const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const browser = await puppeteer.launch({ headless: true });
const expectedExperiments = [
  "Tests character and style consistency from source art to moving shots.",
  "Tests key-shot design and motion direction for a finished animated sequence.",
  "Tests integrated video, voice, music, and sound in one production path.",
];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

for (const width of [390, 768, 1280]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.waitForSelector(".hero-period");
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 250));

  const state = await page.evaluate(() => {
    const rect = (selector) => document.querySelector(selector).getBoundingClientRect();
    const style = (selector) => getComputedStyle(document.querySelector(selector));
    const hero = rect(".hero h1");
    const dot = rect(".hero-period");
    const footerLogo = rect(".footer-logo");
    const footerText = rect(".footer > p");
    const footerStyle = style(".footer");
    const lightHeading = style(".hero h1");
    const darkHeading = style(".why-header h2");
    const studioParagraphs = [...document.querySelectorAll(".studio-copy p")].map((node) => {
      const computed = getComputedStyle(node);
      return { fontSize: computed.fontSize, fontFamily: computed.fontFamily };
    });
    const arrows = [...document.querySelectorAll(".engine-connectors span")].map((node) => ({
      display: getComputedStyle(node).display,
      zIndex: Number(getComputedStyle(node.parentElement).zIndex),
    }));
    return {
      overflow: document.documentElement.scrollWidth - innerWidth,
      heroDotSafety: innerWidth - dot.right,
      heroDotAttached: dot.left - hero.right < dot.width + 4,
      heroDotAnimation: style(".hero-period").animationName,
      signalAnimations: [...document.querySelectorAll(".signal-dot")].map((node) => getComputedStyle(node).animationName),
      headingCharacters: document.querySelectorAll(".heading-char").length,
      lightHeading: { animation: lightHeading.animationName, filter: lightHeading.filter },
      darkHeading: { animation: darkHeading.animationName, filter: darkHeading.filter },
      footerDirection: footerStyle.flexDirection,
      footerSameLine: footerLogo.bottom > footerText.top && footerText.bottom > footerLogo.top,
      footerText: document.querySelector(".footer > p").textContent.replace(/\s+/g, " ").trim(),
      navStatus: Boolean(document.querySelector(".nav-status")),
      navBorder: style(".site-nav").borderBottomWidth,
      pauseBorder: style(".hero-controls button").borderWidth,
      demos: [...document.querySelectorAll(".demo-name em")].map((node) => node.textContent.trim()),
      arrows,
      studioParagraphs,
      studioCtaColor: style(".studio-copy a").color,
      externalFonts: performance.getEntriesByType("resource").filter((entry) => /fonts\.(googleapis|gstatic)\.com/.test(entry.name)).length,
      fontsReady: document.fonts.status === "loaded" && document.fonts.check('18px "Hanken Grotesk"') && document.fonts.check('700 32px "Bricolage Grotesque"') && document.fonts.check('600 11px "Geist Mono"'),
      og: document.querySelector('meta[property="og:image"]')?.content,
      fontSizes: {
        hero: parseFloat(lightHeading.fontSize),
        why: parseFloat(darkHeading.fontSize),
        contact: parseFloat(style(".contact h2").fontSize),
      },
    };
  });

  check(state.overflow <= 1, `${width}: horizontal overflow ${state.overflow}px`);
  check(state.heroDotSafety >= 24, `${width}: hero dot safety is ${state.heroDotSafety}px`);
  check(state.heroDotAttached, `${width}: hero dot detached from HERE`);
  check(state.heroDotAnimation === "hero-period-blink", `${width}: hero dot animation missing`);
  check(state.signalAnimations.length === 7 && state.signalAnimations.every((name) => name === "signal-dot-blink"), `${width}: section signal animations missing`);
  check(state.headingCharacters === 0, `${width}: legacy per-character heading spans remain`);
  check(state.lightHeading.animation === "heading-glow-light" && state.lightHeading.filter === "none", `${width}: light heading color animation contract failed`);
  check(state.darkHeading.animation === "heading-glow-dark" && state.darkHeading.filter === "none", `${width}: dark heading color animation contract failed`);
  check(state.footerDirection === "row" && state.footerSameLine, `${width}: footer is not one row`);
  check(state.footerText === "SEOUL, KOREA · © 2026 MORPIO", `${width}: footer copy changed`);
  check(!state.navStatus && state.navBorder === "0px", `${width}: removed nav status/divider returned`);
  check(state.pauseBorder === "0px", `${width}: pause circle/border returned`);
  check(JSON.stringify(state.demos) === JSON.stringify(expectedExperiments), `${width}: demo experiment copy changed`);
  check(state.studioParagraphs.length === 2 && state.studioParagraphs.every((item) => item.fontSize === "18px" && item.fontFamily.includes("Hanken Grotesk")), `${width}: studio paragraph typography diverged`);
  check(state.studioCtaColor === "rgb(0, 174, 255)", `${width}: studio CTA lost key color`);
  check(state.externalFonts === 0 && state.fontsReady, `${width}: local font contract failed`);
  check(state.og === "https://morpio.com/og-morpio.png", `${width}: OG metadata changed`);
  if (width === 1280) {
    check(state.arrows.length === 5 && state.arrows.every((item) => item.display === "grid" && item.zIndex >= 20), "desktop: connector overlay contract failed");
    check(Math.abs(state.fontSizes.hero - 115.2) < 1 && Math.abs(state.fontSizes.why - 74.88) < 1 && Math.abs(state.fontSizes.contact - 103.68) < 1, `desktop: 10% title scale contract changed ${JSON.stringify(state.fontSizes)}`);
  }
  await page.close();
}

const interaction = await browser.newPage();
await interaction.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await interaction.goto(url, { waitUntil: "networkidle0" });
await interaction.waitForSelector("button[data-video-id='tHjjSmaGcos']");
await new Promise((resolve) => setTimeout(resolve, 350));
await interaction.click("button[data-video-id='tHjjSmaGcos']");
await interaction.waitForFunction(() => document.querySelector("button[data-video-id='tHjjSmaGcos']")?.getAttribute("aria-pressed") === "true");
check(await interaction.$eval("button[data-video-id='tHjjSmaGcos']", (node) => node.getAttribute("aria-pressed")) === "true", "hydrated language switch failed");
await interaction.close();
await browser.close();

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: Morpio UI contract holds at 390/768/1280");

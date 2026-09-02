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
    const dot = rect(".hero-period");
    const heroTitleChars = [...document.querySelectorAll(".hero-last-line .heading-char")];
    const lastHeroCharacter = heroTitleChars.at(-1).getBoundingClientRect();
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
      heroDotGap: dot.left - lastHeroCharacter.right,
      heroDotMarginRatio: parseFloat(style(".hero-period").marginLeft) / parseFloat(lightHeading.fontSize),
      heroDotAnimation: style(".hero-period").animationName,
      signalAnimations: [...document.querySelectorAll(".signal-dot")].map((node) => getComputedStyle(node).animationName),
      headingCharacters: document.querySelectorAll(".heading-char").length,
      brokenHeroWords: [...document.querySelectorAll(".hero h1 .heading-word")].filter((word) => {
        const chars = [...word.querySelectorAll(".heading-char")].map((char) => char.getBoundingClientRect());
        return chars.some((rect, index) => index > 0 && Math.abs(rect.top - chars[0].top) > 1);
      }).length,
      lightHeading: { animation: lightHeading.animationName, filter: lightHeading.filter },
      darkHeading: { animation: darkHeading.animationName, filter: darkHeading.filter },
      headingCharAnimations: [...document.querySelectorAll(".heading-char")].map((node) => getComputedStyle(node).animationName),
      headingCharDurations: [...document.querySelectorAll(".heading-char")].map((node) => getComputedStyle(node).animationDuration),
      firstHeadingDelays: [...document.querySelectorAll(".hero h1 .heading-char")].slice(0, 3).map((node) => getComputedStyle(node).animationDelay),
      headingCharKeyframeColors: [...new Set((document.querySelector(".hero h1 .heading-char")?.getAnimations()[0]?.effect?.getKeyframes() ?? []).map((frame) => frame.color).filter(Boolean))],
      mobileNav: {
        height: rect(".site-nav").height,
        logoTop: rect(".nav-logo").top,
        logoBottom: rect(".nav-logo").bottom,
        menuTop: rect(".site-nav nav").top,
        menuBottom: rect(".site-nav nav").bottom,
      },
      pageFloor: {
        html: getComputedStyle(document.documentElement).backgroundColor,
        body: getComputedStyle(document.body).backgroundColor,
        footer: style(".footer").backgroundColor,
        theme: document.querySelector('meta[name="theme-color"]')?.content,
      },
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
      heroFilmFilter: style(".hero-film").filter,
      featureShadow: style(".feature-media").boxShadow,
      contactPaths: document.querySelectorAll(".contact-path").length,
      colorScheme: document.querySelector('meta[name="color-scheme"]')?.content,
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
  check(state.heroDotGap > 0 && state.heroDotGap < state.fontSizes.hero * 0.12, `${width}: hero dot gap is unnatural ${state.heroDotGap}px`);
  check(Math.abs(state.heroDotMarginRatio - 0.09) < 0.005, `${width}: hero dot spacing ratio changed ${state.heroDotMarginRatio}`);
  check(state.heroDotAnimation === "hero-period-blink", `${width}: hero dot animation missing`);
  check(state.signalAnimations.length === 7 && state.signalAnimations.every((name) => name === "signal-dot-blink"), `${width}: section signal animations missing`);
  check(state.headingCharacters > 100, `${width}: per-character heading spans missing`);
  check(state.brokenHeroWords === 0, `${width}: hero word broke between animated characters`);
  check(state.lightHeading.animation === "none" && state.lightHeading.filter === "none", `${width}: light heading still animates as one block`);
  check(state.darkHeading.animation === "none" && state.darkHeading.filter === "none", `${width}: dark heading still animates as one block`);
  check(state.headingCharAnimations.every((name) => name === "heading-character-glint"), `${width}: character gradient animation contract failed`);
  check(state.headingCharDurations.every((duration) => duration === "9s"), `${width}: heading glint is not restrained to 9s`);
  check(JSON.stringify(state.firstHeadingDelays) === JSON.stringify(["0s", "0.064s", "0.128s"]), `${width}: character animation is not staggered`);
  check(state.pageFloor.html === "rgb(9, 10, 12)" && state.pageFloor.body === state.pageFloor.html && state.pageFloor.footer === state.pageFloor.html && state.pageFloor.theme === "#090A0C", `${width}: footer floor and browser theme colors diverged`);
  check(state.headingCharKeyframeColors.length >= 3, `${width}: character gradient has fewer than three color stops`);
  check(state.footerDirection === "row" && state.footerSameLine, `${width}: footer is not one row`);
  check(state.footerText === "SEOUL, KOREA · © 2026 MORPIO", `${width}: footer copy changed`);
  check(!state.navStatus && state.navBorder === "0px", `${width}: removed nav status/divider returned`);
  check(state.pauseBorder === "0px", `${width}: pause circle/border returned`);
  check(JSON.stringify(state.demos) === JSON.stringify(expectedExperiments), `${width}: demo experiment copy changed`);
  check(state.studioParagraphs.length === 2 && state.studioParagraphs.every((item) => item.fontSize === "18px" && item.fontFamily.includes("Hanken Grotesk")), `${width}: studio paragraph typography diverged`);
  check(state.studioCtaColor === "rgb(0, 174, 255)", `${width}: studio CTA lost key color`);
  check(state.heroFilmFilter.includes("saturate(0.92)"), `${width}: hero film tone polish is missing`);
  check(state.featureShadow !== "none", `${width}: original film depth treatment is missing`);
  check(state.contactPaths === 2, `${width}: expected two partner contact paths`);
  check(state.colorScheme === "dark", `${width}: browser color scheme is not dark`);
  check(state.externalFonts === 0 && state.fontsReady, `${width}: local font contract failed`);
  check(state.og === "https://morpio.com/og-morpio.png", `${width}: OG metadata changed`);
  if (width === 390) {
    check(state.mobileNav.height === 79, `mobile: nav height is ${state.mobileNav.height}px`);
    check(state.mobileNav.logoTop >= 14, `mobile: logo remains too close to top (${state.mobileNav.logoTop}px)`);
    check(state.mobileNav.menuTop - state.mobileNav.logoBottom <= 12, `mobile: logo/menu gap remains too large (${state.mobileNav.menuTop - state.mobileNav.logoBottom}px)`);
    check(state.mobileNav.height - state.mobileNav.menuBottom <= 8, `mobile: menu bottom gap remains too large (${state.mobileNav.height - state.mobileNav.menuBottom}px)`);
  }
  if (width === 1280) {
    check(state.arrows.length === 5 && state.arrows.every((item) => item.display === "grid" && item.zIndex >= 20), "desktop: connector overlay contract failed");
    check(Math.abs(state.fontSizes.hero - 103.68) < 1 && Math.abs(state.fontSizes.why - 67.392) < 1 && Math.abs(state.fontSizes.contact - 93.312) < 1, `desktop: title scale contract changed ${JSON.stringify(state.fontSizes)}`);
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

const fallback = await browser.newPage();
await fallback.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await fallback.goto(url, { waitUntil: "networkidle0" });
await fallback.waitForSelector(".engine-stage");
await new Promise((resolve) => setTimeout(resolve, 2800));
const engineFallback = await fallback.$eval(".engine-stage", (node) => ({
  opacity: getComputedStyle(node).opacity,
  active: node.closest(".engine-drawing")?.classList.contains("is-engine-active"),
}));
check(engineFallback.opacity === "1" && engineFallback.active, "engine drawing has no non-scroll visibility fallback");
await fallback.close();
await browser.close();

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: Morpio UI contract holds at 390/768/1280");

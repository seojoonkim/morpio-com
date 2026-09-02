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

for (const width of [390, 768, 950, 1280]) {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.waitForSelector(".hero-period", { visible: true });
  await page.evaluate(() => document.fonts.ready);
  const thesisVideoChecks = [];
  for (let artworkIndex = 0; artworkIndex < 3; artworkIndex += 1) {
    await page.evaluate((index) => document.querySelectorAll(".thesis-art")[index]?.scrollIntoView({ behavior: "instant", block: "center" }), artworkIndex);
    await page.waitForFunction((index) => {
      const image = document.querySelectorAll(".thesis-art img")[index];
      return image?.complete && image.naturalWidth > 0;
    }, { timeout: 30_000 }, artworkIndex);
    await page.waitForFunction((index) => {
      const video = document.querySelectorAll(".thesis-art video")[index];
      return video?.readyState >= 2 && !video.paused && video.currentTime > 0.05 && getComputedStyle(video).opacity === "1";
    }, { timeout: 30_000 }, artworkIndex);
    thesisVideoChecks.push(await page.evaluate((index) => {
      const video = document.querySelectorAll(".thesis-art video")[index];
      return {
        src: new URL(video.currentSrc).pathname,
        playing: !video.paused && video.currentTime > 0,
        muted: video.muted,
        loop: video.loop,
        playsInline: video.playsInline,
        duration: video.duration,
        background: getComputedStyle(video).backgroundColor,
        blend: getComputedStyle(video).mixBlendMode,
        opacity: getComputedStyle(video).opacity,
      };
    }, artworkIndex));
  }
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
    const sectionHeadings = [...document.querySelectorAll("main section h2")].map((node) => {
      const computed = getComputedStyle(node);
      const section = node.closest("section");
      const kicker = section?.querySelector(".kicker");
      const characterTops = [...node.querySelectorAll(".heading-char")].map((character) => Math.round(character.getBoundingClientRect().top));
      return {
        id: node.id,
        text: node.textContent.trim(),
        authoredBreaks: node.querySelectorAll("br").length,
        fontSize: parseFloat(computed.fontSize),
        lineHeight: parseFloat(computed.lineHeight),
        letterSpacing: parseFloat(computed.letterSpacing),
        kickerGap: kicker ? node.getBoundingClientRect().top - kicker.getBoundingClientRect().bottom : null,
        lineCount: new Set(characterTops).size,
      };
    });
    const studioParagraphs = [...document.querySelectorAll(".studio-copy p")].map((node) => {
      const computed = getComputedStyle(node);
      return { fontSize: computed.fontSize, fontFamily: computed.fontFamily };
    });
    const arrows = [...document.querySelectorAll(".engine-connectors span")].map((node) => ({
      display: getComputedStyle(node).display,
      zIndex: Number(getComputedStyle(node.parentElement).zIndex),
    }));
    const thesisArt = [...document.querySelectorAll(".thesis-art img")].map((node) => {
      const box = node.closest(".thesis-art").getBoundingClientRect();
      return {
        src: new URL(node.currentSrc || node.src).pathname,
        loaded: node.complete && node.naturalWidth > 0,
        naturalWidth: node.naturalWidth,
        width: box.width,
        height: box.height,
        blend: getComputedStyle(node).mixBlendMode,
        isolation: getComputedStyle(node.closest(".thesis-art")).isolation,
      };
    });
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
      sectionHeadings,
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
      thesisArt,
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
  check(state.thesisArt.length === 3, `${width}: expected three thesis artworks`);
  check(state.thesisArt.every((art) => art.loaded && art.width >= 250 && art.height >= 170), `${width}: thesis artwork is missing or too small ${JSON.stringify(state.thesisArt)}`);
  check(state.thesisArt.every((art) => art.naturalWidth >= art.width), `${width}: thesis artwork resolution is below rendered size ${JSON.stringify(state.thesisArt)}`);
  check(state.thesisArt.every((art) => art.blend === "multiply"), `${width}: thesis artwork lost paper compositing`);
  check(state.thesisArt.every((art) => art.isolation === "auto"), `${width}: thesis artwork blending is isolated from the paper surface`);
  const thesisVariant = width <= 700 ? "-mobile.webp" : ".webp";
  check(state.thesisArt.every((art) => art.src.endsWith(thesisVariant)), `${width}: wrong responsive thesis artwork selected ${JSON.stringify(state.thesisArt)}`);
  const videoVariant = width <= 700 ? "-mobile.mp4" : "-h3.mp4";
  check(thesisVideoChecks.length === 3, `${width}: expected three thesis videos`);
  check(thesisVideoChecks.every((video) => video.src.endsWith(videoVariant)), `${width}: wrong responsive thesis video selected ${JSON.stringify(thesisVideoChecks)}`);
  check(thesisVideoChecks.every((video) => video.playing && video.muted && video.loop && video.playsInline), `${width}: thesis video playback contract failed ${JSON.stringify(thesisVideoChecks)}`);
  check(thesisVideoChecks.every((video) => Math.abs(video.duration - 5) < 0.05 && video.background === "rgba(0, 0, 0, 0)" && video.blend === "multiply" && video.opacity === "1"), `${width}: thesis video paper compositing/readiness changed ${JSON.stringify(thesisVideoChecks)}`);
  check(state.heroDotSafety >= 24, `${width}: hero dot safety is ${state.heroDotSafety}px`);
  check(state.heroDotGap > 0 && state.heroDotGap < state.fontSizes.hero * 0.12, `${width}: hero dot gap is unnatural ${state.heroDotGap}px`);
  check(Math.abs(state.heroDotMarginRatio - 0.09) < 0.005, `${width}: hero dot spacing ratio changed ${state.heroDotMarginRatio}`);
  check(state.heroDotAnimation === "hero-period-blink", `${width}: hero dot animation missing`);
  check(state.signalAnimations.length === 7 && state.signalAnimations.every((name) => name === "signal-dot-blink"), `${width}: section signal animations missing`);
  check(state.headingCharacters > 100, `${width}: per-character heading spans missing`);
  check(state.brokenHeroWords === 0, `${width}: hero word broke between animated characters`);
  check(state.lightHeading.animation === "none" && state.lightHeading.filter === "none", `${width}: light heading still animates as one block`);
  check(state.darkHeading.animation === "none" && state.darkHeading.filter === "none", `${width}: dark heading still animates as one block`);
  const sectionTitleSize = state.sectionHeadings[0].fontSize;
  check(state.sectionHeadings.length === 6, `${width}: expected six section titles`);
  check(state.sectionHeadings.every((heading) => Math.abs(heading.fontSize - sectionTitleSize) < 0.1), `${width}: section title sizes diverged ${JSON.stringify(state.sectionHeadings)}`);
  check(state.sectionHeadings.every((heading) => Math.abs(heading.lineHeight / heading.fontSize - 0.9) < 0.01), `${width}: section title line heights diverged ${JSON.stringify(state.sectionHeadings)}`);
  check(state.sectionHeadings.every((heading) => Math.abs(heading.letterSpacing / heading.fontSize + 0.045) < 0.002), `${width}: section title tracking diverged ${JSON.stringify(state.sectionHeadings)}`);
  check(state.sectionHeadings.every((heading) => Math.abs(heading.kickerGap - 22) < 1), `${width}: kicker/title spacing diverged ${JSON.stringify(state.sectionHeadings)}`);
  const contactTitle = state.sectionHeadings.find((heading) => heading.id === "contact-title");
  check(contactTitle?.authoredBreaks === 1, `${width}: contact title must retain its authored break`);
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
    check(Math.abs(state.fontSizes.hero - 103.68) < 1 && Math.abs(sectionTitleSize - 67.392) < 1, `desktop: title scale contract changed ${JSON.stringify({ ...state.fontSizes, sectionTitleSize })}`);
    check(contactTitle?.lineCount === 2, `desktop: contact title should follow its authored two-line break, found ${contactTitle?.lineCount}`);
  }
  await page.close();
}

const interaction = await browser.newPage();
await interaction.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await interaction.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
await interaction.waitForSelector("button[data-video-id='tHjjSmaGcos']", { visible: true });
await new Promise((resolve) => setTimeout(resolve, 350));
await interaction.click("button[data-video-id='tHjjSmaGcos']");
await interaction.waitForFunction(() => document.querySelector("button[data-video-id='tHjjSmaGcos']")?.getAttribute("aria-pressed") === "true");
check(await interaction.$eval("button[data-video-id='tHjjSmaGcos']", (node) => node.getAttribute("aria-pressed")) === "true", "hydrated language switch failed");
await interaction.close();

const fallback = await browser.newPage();
await fallback.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await fallback.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
await fallback.waitForSelector(".engine-stage", { visible: true });
await fallback.waitForFunction(() => {
  const stage = document.querySelector(".engine-stage");
  return stage && getComputedStyle(stage).opacity === "1" && stage.closest(".engine-drawing")?.classList.contains("is-engine-active");
}, { timeout: 10_000 });
const engineFallback = await fallback.$eval(".engine-stage", (node) => ({
  opacity: getComputedStyle(node).opacity,
  active: node.closest(".engine-drawing")?.classList.contains("is-engine-active"),
}));
check(engineFallback.opacity === "1" && engineFallback.active, "engine drawing has no non-scroll visibility fallback");
await fallback.close();

const reducedMotion = await browser.newPage();
await reducedMotion.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await reducedMotion.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await reducedMotion.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 });
await reducedMotion.$eval("#why", (node) => node.scrollIntoView({ behavior: "instant", block: "center" }));
await new Promise((resolve) => setTimeout(resolve, 500));
check(await reducedMotion.$$eval(".thesis-art video", (nodes) => nodes.length) === 0, "reduced-motion users should not load thesis videos");
check(await reducedMotion.$$eval(".thesis-art img", (nodes) => nodes.length) === 3, "reduced-motion fallback images are missing");
await reducedMotion.close();
await browser.close();

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: Morpio UI contract holds at 390/768/950/1280");

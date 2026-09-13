import puppeteer from "puppeteer";

const target = process.env.APP_URL || process.env.MORPIO_URL || "http://127.0.0.1:3107";
const viewports = [
  { width: 390, height: 844, name: "390" },
  { width: 768, height: 900, name: "768" },
  { width: 1280, height: 800, name: "1280" },
];
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  protocolTimeout: 20_000,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});
const failures = [];
const results = [];
const check = (value, message) => { if (!value) failures.push(message); };

try {
  for (const viewport of viewports) {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    const response = await page.goto(`${target.replace(/\/$/, "")}/logo?qa=${Date.now()}`, {
      waitUntil: "networkidle0",
      timeout: 20_000,
    });
    const result = await page.evaluate(async () => {
      await document.fonts.ready;
      await document.fonts.load('700 1em "Bricolage Grotesque"');
      const heading = document.querySelector("h1");
      const period = document.querySelector(".logo-period");
      const info = document.querySelector("[data-font-info]");
      const style = heading ? getComputedStyle(heading) : null;
      const periodStyle = period ? getComputedStyle(period) : null;
      const loadedEntry = [...document.fonts].find((font) => font.family === "Bricolage Grotesque" && font.weight === "700");
      const fontResource = performance.getEntriesByType("resource").find((entry) => entry.name.endsWith("/fonts/bricolage-700.ttf"));
      return {
        status: document.body.dataset.logoReady || null,
        responseOk: true,
        background: getComputedStyle(document.body).backgroundColor,
        headingText: heading?.textContent || null,
        fontFamily: style?.fontFamily || null,
        fontWeight: style?.fontWeight || null,
        periodColor: periodStyle?.backgroundColor || null,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        fontLoaded: document.fonts.check('700 1em "Bricolage Grotesque"') && loadedEntry?.status === "loaded" && Boolean(fontResource),
        fontInfoVisible: Boolean(info && info.getBoundingClientRect().width > 0 && info.getBoundingClientRect().height > 0 && getComputedStyle(info).visibility !== "hidden"),
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || null,
        canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      };
    });
    result.httpStatus = response?.status() ?? null;
    check(result.httpStatus === 200, `${viewport.name}: /logo HTTP ${result.httpStatus}`);
    check(result.background === "rgb(255, 255, 255)", `${viewport.name}: page background is not white`);
    check(result.headingText === "Morpio", `${viewport.name}: h1 text is not Morpio`);
    check(result.fontFamily?.includes("Bricolage Grotesque"), `${viewport.name}: h1 font family is not Hanken Grotesk`);
    check(result.fontWeight === "700", `${viewport.name}: h1 font weight is not 700`);
    check(result.periodColor === "rgb(0, 174, 255)", `${viewport.name}: period is not brand blue`);
    check(result.overflow <= 0, `${viewport.name}: horizontal overflow is ${result.overflow}px`);
    check(result.fontLoaded, `${viewport.name}: Hanken Grotesk 700 local font is not loaded`);
    check(result.fontInfoVisible, `${viewport.name}: font information is not visible`);
    check(result.title.includes("Morpio logo"), `${viewport.name}: logo metadata title is missing`);
    check(Boolean(result.description), `${viewport.name}: logo metadata description is missing`);
    check(result.canonical.endsWith("/logo"), `${viewport.name}: canonical /logo is missing`);
    results.push({ viewport: viewport.name, ...result });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ target, results }, null, 2));
if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: /logo browser QA at 390px, 768px, and 1280px");

const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const response = await fetch(url);
const html = await response.text();
const failures = [];
const count = (pattern) => html.match(pattern)?.length || 0;
const check = (condition, message) => { if (!condition) failures.push(message); };

check(response.ok, `homepage returned HTTP ${response.status}`);
check(/ANOTHER WORLD[\s\S]*?STARTS HERE/i.test(html), "hero tagline is missing");
check(/data-hero-film/.test(html), "full-bleed hero film is missing");
check(!/data-hero-film[^>]*>[\s\S]*?youtube/i.test(html), "hero must not use a YouTube background");
check(/id="work"/.test(html), "work section is missing");
check(/id="why"/.test(html), "why section is missing");
check(/id="system"/.test(html), "production system is missing");
check(/id="studio"/.test(html), "studio section is missing");
check(/id="contact"/.test(html), "contact section is missing");
check(html.indexOf('href="#work"') < html.indexOf('href="#why"') && html.indexOf('href="#why"') < html.indexOf('href="#system"') && html.indexOf('href="#system"') < html.indexOf('href="#studio"'), "navigation order must be Work, Why, System, Studio");
check(html.indexOf('id="work"') < html.indexOf('id="why"') && html.indexOf('id="why"') < html.indexOf('id="system"') && html.indexOf('id="system"') < html.indexOf('id="studio"'), "page order must be Work, Why, System, Studio");
check(count(/data-feature-film=/g) === 1, `expected 1 featured original, found ${count(/data-feature-film=/g)}`);
check(count(/data-demo-row=/g) === 3, `expected 3 technical demo rows, found ${count(/data-demo-row=/g)}`);
check(count(/data-video-id=/g) === 3, `expected 3 language controls, found ${count(/data-video-id=/g)}`);
check(html.indexOf("31Jm1Z2fnek") < html.indexOf("vVmnsDeSwhE"), "Korean subtitles are not the default variant");
check(/GTO: 파라다이스 로스트/.test(html), "GTO Korean title is missing");
check(/HUMANS DECIDE[\s\S]*?SYSTEMS REPEAT/i.test(html), "production principle is missing");
check(/powered by Hashed/i.test(html), "studio context is missing");
check(/hello@morpio\.com/i.test(html), "contact email is missing");
check(/aria-label="Pause hero film"|aria-label="Play hero film"/.test(html), "hero playback control is missing");
check(/rel="manifest"[^>]*href="\/manifest\.webmanifest"|href="\/manifest\.webmanifest"[^>]*rel="manifest"/.test(html), "web manifest is missing");
check(/class="nav-logo"[\s\S]*?morpio<span>\.<\/span>/.test(html), "Morpio dot markup is missing");
check(!/PLACEHOLDER|SAMPLE CAST|OPEN CASTING|VIRTUAL CELEB|AI ADVERTISING|Meet the cast|make them famous/i.test(html), "excluded legacy language is present");
check(!/MORPH MACHINE|ONE IDEA|THREE FORMS|WHAT WE MAKE|OUR APPROACH|BUILT ON SYSTEMS/i.test(html), "removed concept or service sections are present");
check(!/\bfund\b|investment|investor|\bIRR\b/i.test(html), "fund or investment language is present");

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: Morpio One Continuous Take contract holds");

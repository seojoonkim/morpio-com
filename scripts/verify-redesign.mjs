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
check(html.indexOf('href="#why"') < html.indexOf('href="#work"') && html.indexOf('href="#work"') < html.indexOf('href="#system"') && html.indexOf('href="#system"') < html.indexOf('href="#studio"'), "navigation order must be Why, Work, System, Studio");
check(html.indexOf('id="why"') < html.indexOf('id="work"') && html.indexOf('id="work"') < html.indexOf('id="system"') && html.indexOf('id="system"') < html.indexOf('id="studio"'), "page order must be Why, Work, System, Studio");
check(count(/data-feature-film=/g) === 1, `expected 1 featured original, found ${count(/data-feature-film=/g)}`);
check(count(/data-demo-row=/g) === 3, `expected 3 technical demo rows, found ${count(/data-demo-row=/g)}`);
check(count(/data-video-id=/g) === 3, `expected 3 language controls, found ${count(/data-video-id=/g)}`);
check(html.indexOf("31Jm1Z2fnek") < html.indexOf("vVmnsDeSwhE"), "Korean subtitles are not the default variant");
check(/GTO: 파라다이스 로스트/.test(html), "GTO Korean title is missing");
check(/MORPIO THESIS/i.test(html), "Morpio thesis is missing");
check(!/why-sequence|why-row|MORPIO \/ FRAME/i.test(html), "thesis must not contain artwork frames");
check(/MORPIO TECHNOLOGY/i.test(html), "technology section is missing");
check(/class="system-diagram engine-drawing"/.test(html), "technology system diagram is missing");
for (const stage of ["SOURCE", "CHARACTER", "KEY-SHOT", "VIDEO", "AI SOUND", "HUMAN-LED"]) check(html.includes(stage), `production stage ${stage} is missing`);
for (const control of ["STYLE BIBLE", "MODEL ROUTING", "VERSION CONTROL", "SCENE-CONSISTENCY REVIEW", "QUALITY GATES"]) check(html.includes(control), `central control ${control} is missing`);
check(/5\+/.test(html) && /SPECIALIZED/.test(html), "5+ specialized AI model claim is missing");
check(!/process-visual|process-mobile-frame/i.test(html), "technology section must not contain production stills");
check(/ONE ENGINE[\s\S]*?EVERY FRAME/i.test(html), "production engine principle is missing");
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

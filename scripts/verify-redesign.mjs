const url = process.env.MORPIO_URL || "http://127.0.0.1:3100";
const response = await fetch(url);
const html = await response.text();
const failures = [];
const count = (pattern) => html.match(pattern)?.length || 0;
const check = (condition, message) => { if (!condition) failures.push(message); };

check(response.ok, `homepage returned HTTP ${response.status}`);
check(/ANOTHER WORLD[\s\S]*?STARTS HERE/i.test(html), "hero tagline is missing");
check(/id="why"/.test(html), "why section is missing");
check(/id="approach"/.test(html), "approach section is missing");
check(/id="work"/.test(html), "work section is missing");
check(/id="system"/.test(html), "production system is missing");
check(/id="team"/.test(html), "team section is missing");
check(/id="contact"/.test(html), "contact section is missing");
check(count(/data-reel-id=/g) === 4, `expected 4 selected works, found ${count(/data-reel-id=/g)}`);
check(count(/ORIGINAL ANIMATION/g) >= 1, "original animation label is missing");
check(count(/TECHNICAL DEMO/g) >= 3, "technical demo labels are missing");
check(count(/class="video-poster/g) === 4, `expected 4 video posters, found ${count(/class="video-poster/g)}`);
check(count(/data-video-id=/g) === 3, `expected 3 language controls, found ${count(/data-video-id=/g)}`);
check(/AI-assisted visual development/.test(html), "technology explanation is missing");
check(/incubated by Hashed/i.test(html), "team context is missing");
check(/class="nav-logo"[\s\S]*?morpio<span>\.<\/span>/.test(html), "Morpio dot markup is missing");
check(!/PLACEHOLDER|SAMPLE CAST|OPEN CASTING|VIRTUAL CELEB|AI ADVERTISING|Meet the cast|make them famous/i.test(html), "excluded legacy language is present");
check(!/\bfund\b|investment|investor|\bIRR\b/i.test(html), "fund or investment language is present");

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}
console.log("PASS: Morpio public-site contract holds");

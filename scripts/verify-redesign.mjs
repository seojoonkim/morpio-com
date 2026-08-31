const url = process.env.MORPIO_URL || "http://127.0.0.1:3000";
const response = await fetch(url);
const html = await response.text();
const failures = [];
const count = (pattern) => html.match(pattern)?.length || 0;
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

check(response.ok, `homepage returned HTTP ${response.status}`);
check(/<h1[^>]*>[\s\S]*?ANOTHER WORLD[\s\S]*?STARTS HERE[\s\S]*?<\/h1>/i.test(html), "hero tagline is missing");
check(count(/data-morph-mode=/g) === 3, `expected 3 morph controls, found ${count(/data-morph-mode=/g)}`);
check(count(/data-reel-id=/g) === 4, `expected 4 selected works, found ${count(/data-reel-id=/g)}`);
check(count(/youtube-nocookie\.com\/embed\//g) === 4, `expected 4 YouTube embeds, found ${count(/youtube-nocookie\.com\/embed\//g)}`);
check(count(/data-video-id=/g) === 3, `expected 3 language controls, found ${count(/data-video-id=/g)}`);
check(!/PLACEHOLDER|sample-0[1-6]/i.test(html), "placeholder reels are still present");
check(/WHY MORPIO/.test(html) && /TOO FEW GET MADE/.test(html), "public market thesis is missing");
check(/AI-assisted visual development/.test(html) && /human directors/.test(html), "production technology explanation is missing");
check(/THE TEAM · SEOUL/.test(html) && /incubated by Hashed/.test(html), "public team section is missing");
check(!/fund|investment|investor|return|IRR/i.test(html), "fund or investment language is present");
check(/id="work"/.test(html), "work section is missing");
check(/id="morph"/.test(html), "morph section is missing");
check(/href="#work"/.test(html), "work navigation is missing");
check(/href="#contact"/.test(html), "contact navigation is missing");
check(/href="#morph"/.test(html), "hero cast button is missing");

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}

console.log("PASS: Morpio redesign structural contract holds");

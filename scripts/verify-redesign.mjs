const url = process.env.MORPIO_URL || "http://127.0.0.1:3000";
const response = await fetch(url);
const html = await response.text();
const failures = [];
const count = (pattern) => html.match(pattern)?.length || 0;
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

check(response.ok, `homepage returned HTTP ${response.status}`);
check(/<h1[^>]*>[\s\S]*?(CAST|TOMORROW)[\s\S]*?<\/h1>/i.test(html), "casting hero is missing");
check(count(/data-morph-mode=/g) === 3, `expected 3 morph controls, found ${count(/data-morph-mode=/g)}`);
check(count(/<video\b/g) === 6, `expected 6 portfolio videos, found ${count(/<video\b/g)}`);
check(count(/data-category="animation"/g) === 2, "expected 2 animation videos");
check(count(/data-category="virtual-celebrity"/g) === 2, "expected 2 virtual celebrity videos");
check(count(/data-category="ai-advertising"/g) === 2, "expected 2 AI advertising videos");
check(count(/<video[^>]+src="[^"]+\.mp4"/g) === 6, "every portfolio card needs an MP4 source");
check(/id="work"/.test(html), "work section is missing");
check(/id="morph"/.test(html), "morph section is missing");
check(/href="#work"/.test(html), "work navigation is missing");
check(/href="#contact"/.test(html), "contact navigation is missing");

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join("\n"));
  process.exit(1);
}

console.log("PASS: Morpio redesign structural contract holds");

const CAPABILITIES = [
  { number: "01", title: "DIRECTION", text: "Human creators set the story, performance, visual language, and final standard." },
  { number: "02", title: "CONTINUITY", text: "Production systems preserve character, space, and style across shots and revisions." },
  { number: "03", title: "ITERATION", text: "Teams test more choices earlier, then carry approved decisions into repeatable production." },
  { number: "04", title: "FINISH", text: "Editing, sound, color, and delivery stay inside one connected production path." },
];

function SystemDiagram() {
  return (
    <svg className="system-diagram" viewBox="0 0 720 520" role="img" aria-labelledby="system-diagram-title system-diagram-desc">
      <title id="system-diagram-title">Morpio production system</title>
      <desc id="system-diagram-desc">Human direction moves through visual development, shot production, and finishing, with review loops at every stage.</desc>
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#00aeff"/><stop offset="1" stopColor="#7ad8ff"/></linearGradient>
      </defs>
      <rect x="1" y="1" width="718" height="518" rx="2" fill="#111318" stroke="#343943"/>
      <g className="diagram-grid" stroke="#252a31" strokeWidth="1">
        <path d="M0 104H720M0 208H720M0 312H720M0 416H720"/>
        <path d="M144 0V520M288 0V520M432 0V520M576 0V520"/>
      </g>
      <path className="diagram-flow" d="M92 260H202C230 260 230 156 258 156H356C384 156 384 364 412 364H510C538 364 538 260 566 260H634" fill="none" stroke="url(#flow)" strokeWidth="3"/>
      <g className="diagram-node">
        <circle cx="92" cy="260" r="42"/><text x="92" y="254">HUMAN</text><text x="92" y="272">DIRECTION</text>
        <circle cx="258" cy="156" r="42"/><text x="258" y="150">VISUAL</text><text x="258" y="168">SYSTEM</text>
        <circle cx="412" cy="364" r="42"/><text x="412" y="358">SHOT</text><text x="412" y="376">SYSTEM</text>
        <circle cx="566" cy="260" r="42"/><text x="566" y="254">EDIT</text><text x="566" y="272">& FINISH</text>
      </g>
      <g className="diagram-review" fill="none" stroke="#737b86" strokeDasharray="5 7">
        <path d="M566 212C566 72 92 72 92 212"/><path d="M412 412C412 476 258 476 258 204"/>
      </g>
      <g className="diagram-label"><text x="329" y="62">CREATIVE REVIEW LOOP</text><text x="286" y="494">PRODUCTION FEEDBACK</text><text x="32" y="32">MORPIO SYSTEM / 01</text></g>
    </svg>
  );
}

export default function Process() {
  return (
    <section id="system" className="process tech-section section-shell" aria-labelledby="system-title">
      <header className="process-heading">
        <p className="kicker"><span className="signal-dot" />MORPIO TECHNOLOGY</p>
        <h2 id="system-title">HUMANS DECIDE.<br /><span>SYSTEMS REPEAT.</span></h2>
      </header>
      <div className="tech-layout">
        <SystemDiagram />
        <div className="capability-list">
          {CAPABILITIES.map((item) => <article key={item.number}><span>{item.number}</span><div><strong>{item.title}</strong><p>{item.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

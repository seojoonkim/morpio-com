const STAGES = [
  ["01", "SOURCE", "INTERPRETATION", "World, story, tone"],
  ["02", "CHARACTER", "BIBLE", "Identity, design, behavior"],
  ["03", "KEY-SHOT", "DESIGN", "Composition, light, motion"],
  ["04", "VIDEO", "PRODUCTION", "Shots, passes, iteration"],
  ["05", "AI SOUND", "STUDIO", "Voice, music, sound"],
  ["06", "HUMAN-LED", "POST", "Edit, grade, final master"],
];

const CONTROLS = ["STYLE BIBLE", "MODEL ROUTING", "VERSION CONTROL", "SCENE-CONSISTENCY REVIEW", "QUALITY GATES"];
const MODALITIES = ["IMAGE", "MOTION", "VOICE", "MUSIC", "SOUND"];

function ProductionEngine() {
  return (
    <figure className="system-diagram engine-drawing" aria-labelledby="engine-title engine-desc">
      <figcaption className="engine-topline">
        <span id="engine-title">MORPIO PRODUCTION ENGINE / SYSTEM MAP</span>
        <span>ENGINE SPEC. 01</span>
      </figcaption>
      <p id="engine-desc" className="sr-only">Six production stages share a central control layer for style, model routing, versions, consistency, and quality gates.</p>

      <div className="engine-rail" aria-label="Production stages">
        {STAGES.map(([number, line1, line2, detail], index) => (
          <article className={`engine-stage${index === STAGES.length - 1 ? " is-human" : ""}`} data-phase={number} key={number}>
            <span className="stage-port" aria-hidden="true"><i /></span>
            <div className="stage-index"><span>PHASE</span><b>{number}</b></div>
            <div className="stage-title"><strong>{line1}</strong><strong>{line2}</strong></div>
            <p>{detail}</p>
            <i aria-hidden="true" />
          </article>
        ))}
        <div className="engine-connectors" aria-hidden="true">
          {STAGES.slice(0, -1).map(([number]) => <span key={number}>→</span>)}
        </div>
        <svg className="engine-flow" viewBox="0 0 600 558" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="engine-signal-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g className="flow-layout flow-desktop">
            <path className="flow-route" pathLength="100" d="M 50 43 H 550" />
            <path className="flow-pulse" pathLength="100" d="M 50 43 H 550" />
          </g>
          <g className="flow-layout flow-tablet">
            <path className="flow-route" pathLength="100" d="M 100 20 H 590 V 279 H 10 V 314 H 500" />
            <path className="flow-pulse" pathLength="100" d="M 100 20 H 590 V 279 H 10 V 314 H 500" />
          </g>
          <g className="flow-layout flow-mobile">
            <path className="flow-route" pathLength="100" d="M 150 16 H 590 V 182 H 10 V 210 H 590 V 376 H 10 V 404 H 450" />
            <path className="flow-pulse" pathLength="100" d="M 150 16 H 590 V 182 H 10 V 210 H 590 V 376 H 10 V 404 H 450" />
          </g>
        </svg>
      </div>

      <div className="engine-bus" aria-label="Central layer">
        <span className="engine-bus-scan" aria-hidden="true" />
        <div className="bus-label"><span>CENTRAL LAYER</span><strong>ONE SET OF RULES<br />ACROSS EVERY SHOT.</strong></div>
        <div className="bus-controls">{CONTROLS.map((control, index) => <span data-control={String(index + 1).padStart(2, "0")} key={control}><b>{String(index + 1).padStart(2, "0")}</b>{control}<i aria-hidden="true" /></span>)}</div>
      </div>

      <div className="engine-ledger">
        <section>
          <p className="engine-kicker">MODEL ORCHESTRATION</p>
          <div className="engine-metric"><strong>5+</strong><span>SPECIALIZED<br />AI MODELS</span></div>
          <div className="modality-list">{MODALITIES.map(item => <span key={item}>{item}</span>)}</div>
        </section>
        <section>
          <p className="engine-kicker">PRODUCTION GOALS</p>
          <div className="engine-chain"><span>REUSABLE<br />ASSETS</span><i>+</i><span>APPROVAL<br />STAGES</span><i>→</i><span>SPEED</span><i>/</i><span>CONSISTENCY</span><i>/</i><span>REVISION<br />EFFICIENCY</span></div>
        </section>
        <section className="human-responsibility">
          <p className="engine-kicker">FINAL AUTHORITY</p>
          <span className="human-gate" aria-hidden="true"><i className="human-gate-ring" /><i className="human-gate-core" /><b>HUMAN / LOCK</b></span>
          <strong>A HUMAN DIRECTOR<br />MAKES THE FINAL CALL.</strong>
          <p>Directorial judgment and final quality stay with people on our team, not with a model.</p>
        </section>
      </div>
    </figure>
  );
}

export default function Process() {
  return (
    <section id="system" className="process tech-section section-shell" aria-labelledby="system-title">
      <div className="tech-container">
        <header className="process-heading">
          <p className="kicker"><span className="signal-dot" />MORPIO TECHNOLOGY / PRODUCTION ENGINE</p>
          <div>
            <h2 id="system-title">ONE ENGINE.<br /><span>EVERY FRAME.</span></h2>
            <p>One workflow carries every shot from source interpretation to final master, using the same style rules, review stages, and human direction throughout.</p>
          </div>
        </header>
        <ProductionEngine />
      </div>
    </section>
  );
}

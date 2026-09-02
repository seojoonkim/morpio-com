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
          <article className={`engine-stage${index === STAGES.length - 1 ? " is-human" : ""}`} key={number}>
            <div className="stage-index"><span>PHASE</span><b>{number}</b></div>
            <div className="stage-title"><strong>{line1}</strong><strong>{line2}</strong></div>
            <p>{detail}</p>
            <i aria-hidden="true" />
          </article>
        ))}
        <div className="engine-connectors" aria-hidden="true">
          {STAGES.slice(0, -1).map(([number]) => <span key={number}>→</span>)}
        </div>
      </div>

      <div className="engine-bus" aria-label="Central layer">
        <div className="bus-label"><span>CENTRAL LAYER</span><strong>ONE SET OF RULES<br />ACROSS EVERY SHOT.</strong></div>
        <div className="bus-controls">{CONTROLS.map((control, index) => <span key={control}><b>{String(index + 1).padStart(2, "0")}</b>{control}</span>)}</div>
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

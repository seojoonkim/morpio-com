export default function Hero() {
  return <section id="top" className="hero section-shell">
    <div className="hero-copy">
      <p className="kicker"><span className="signal-dot" /> AI MEDIA LAB · SEOUL</p>
      <h1>ANOTHER WORLD<br />STARTS HERE.</h1>
      <p className="hero-deck">Morpio is an AI media lab incubated by Hashed. We build characters, then we make them famous.</p>
      <div className="hero-actions">
        <a className="button button-ink" href="#morph">Meet the cast</a>
        <a className="text-link" href="#work">See the work <span>↘</span></a>
      </div>
    </div>
    <div className="hero-portrait">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/gen/services/hero_v6.webp" alt="Colorful Morpio character study" />
      <div className="portrait-label"><span>CAST 001</span><span>DEVELOPMENT FRAME</span></div>
      <span className="sample-stamp">SAMPLE CAST</span>
    </div>
    <div className="call-sheet"><span>CASTING · 2026</span><span>SEOUL / REMOTE</span><span>INCUBATED BY HASHED</span></div>
  </section>;
}

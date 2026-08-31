export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker"><span className="signal-dot" />AI MEDIA LAB · SEOUL</p>
        <h1>ANOTHER WORLD<br />STARTS HERE<span>.</span></h1>
        <p className="hero-deck">Morpio makes original animation with AI-assisted visual development and repeatable production systems, so more good stories reach the screen.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View selected work <span>↓</span></a>
          <a className="text-link" href="#approach">How we work <span>↘</span></a>
        </div>
      </div>
      <a className="hero-frame" href="#work" aria-label="View 尻尾が止まったあとも in selected work">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/work/tail-stopped.jpg" alt="Still from 尻尾が止まったあとも" />
        <div className="frame-meta"><span>ORIGINAL ANIMATION</span><strong>尻尾が止まったあとも</strong><span>VIEW WORK ↘</span></div>
      </a>
      <div className="hero-meta">
        <span>INCUBATED BY HASHED</span>
        <span>ORIGINAL ANIMATION · TECHNICAL DEMOS</span>
        <span>SEOUL · 2026</span>
      </div>
    </section>
  );
}

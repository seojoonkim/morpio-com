const APPROACH = [
  { number: "01", title: "STORY AND DIRECTION", text: "Writers and directors decide what the work says and how it should feel. Every tool follows that decision.", code: "HUMAN / CORE" },
  { number: "02", title: "AI-ASSISTED DEVELOPMENT", text: "We explore characters, worlds, and style frames quickly, so ideas can be seen and judged before production begins.", code: "EXPLORE / FAST" },
  { number: "03", title: "REPEATABLE PRODUCTION", text: "We build consistent characters, reusable setups, and finished versions for more than one screen or language.", code: "SYSTEM / SCALE" },
];

export default function Services() {
  return (
    <section id="approach" className="approach section-shell">
      <div className="section-intro approach-intro">
        <p className="kicker"><span className="signal-dot" />02 · OUR APPROACH</p>
        <h2>DIRECTED BY PEOPLE.<br />BUILT ON SYSTEMS.</h2>
        <p>Technology shortens the path to the screen. People decide what belongs there.</p>
      </div>
      <div className="approach-grid">
        {APPROACH.map((item) => (
          <article key={item.number}>
            <div className="approach-code"><span>{item.number}</span><span>{item.code}</span></div>
            <div className={`system-mark system-mark-${item.number}`} aria-hidden="true"><i /><i /><i /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

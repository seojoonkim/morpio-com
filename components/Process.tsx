const STEPS = [
  ["01", "STORY", "Start with a character, a world, or a script worth making."],
  ["02", "DEVELOP", "Explore look, character, and tone until the world holds together."],
  ["03", "PRODUCE", "Build shots, motion, and sound through a repeatable pipeline directed by people."],
  ["04", "ADAPT", "Deliver versions for different screens and languages without losing the identity of the work."],
];

export default function Process() {
  return (
    <section id="system" className="process section-shell">
      <div className="section-intro">
        <p className="kicker"><span className="signal-dot" />04 · THE PRODUCTION SYSTEM</p>
        <h2>FROM IDEA TO<br />FINISHED MOTION.</h2>
        <p>AI shortens exploration and iteration. People make every creative call.</p>
      </div>
      <div className="process-list">
        {STEPS.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

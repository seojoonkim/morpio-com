const STEPS = [
  ["01", "STORY", "Start with a character, a world, or a brief worth making."],
  ["02", "DEVELOP", "Use AI-assisted visual development to find the character, look, and language of the project."],
  ["03", "PRODUCE", "Build shots, motion, and versions through a repeatable production system led by human directors."],
  ["04", "ADAPT", "Prepare the work for different screens, formats, and languages without losing its identity."],
];

export default function Process() {
  return (
    <section id="process" className="process section-shell">
      <div className="section-heading">
        <p className="kicker">HOW MORPIO WORKS</p>
        <h2>STORY FIRST.<br />SYSTEM READY.</h2>
        <p>AI helps us explore and produce faster. People choose what the story needs and what belongs on screen.</p>
      </div>
      <div className="process-list">
        {STEPS.map((step) => (
          <article key={step[0]}>
            <span>{step[0]}</span>
            <h3>{step[1]}</h3>
            <p>{step[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

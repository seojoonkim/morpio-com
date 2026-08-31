const POINTS = [
  ["01", "A GLOBAL AUDIENCE", "Animation travels. A strong story can cross languages, formats, and borders, and find an audience far from where it was made."],
  ["02", "TOO FEW GET MADE", "Most promising stories never reach production. Animation is slow, expensive, and depends on many specialists staying in sync."],
  ["03", "A SHORTER PATH", "Morpio uses AI-assisted visual development and repeatable production systems to lower those barriers. People keep story and creative direction."],
];

export default function Thesis() {
  return (
    <section id="why" className="thesis section-shell" aria-labelledby="thesis-title">
      <div className="section-intro">
        <p className="kicker"><span className="signal-dot" />01 · WHY MORPIO</p>
        <h2 id="thesis-title">MORE STORIES<br />SHOULD REACH<br />THE SCREEN.</h2>
      </div>
      <div className="thesis-list">
        {POINTS.map(([number, title, text]) => (
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

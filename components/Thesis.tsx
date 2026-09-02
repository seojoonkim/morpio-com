const POINTS = [
  { number: "01", title: "PRODUCTION IS THE BOTTLENECK.", text: "Many worlds already have characters, stories, and audiences. Consistent shot-by-shot production is what stops them from moving." },
  { number: "02", title: "GOOD STORIES DISAPPEAR.", text: "A published world can wait years for the right studio, budget, and production window." },
  { number: "03", title: "WE BUILD A DIFFERENT PATH.", text: "Morpio keeps story, direction, and final judgment with people, then builds systems for everything production must repeat." },
];

export default function Thesis() {
  return (
    <section id="why" className="why-section thesis-only section-shell" aria-labelledby="why-title">
      <header className="why-header">
        <p className="kicker"><span className="signal-dot" />WHY MORPIO EXISTS</p>
        <h2 id="why-title">MORE STORIES SHOULD<br />REACH THE SCREEN.</h2>
        <p>People everywhere watch animation. Far fewer stories ever become it.</p>
      </header>
      <div className="thesis-statements">
        {POINTS.map((point) => (
          <article key={point.number}>
            <span>{point.number}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

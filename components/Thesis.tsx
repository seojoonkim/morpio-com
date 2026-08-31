const POINTS = [
  { number: "01", title: "PRODUCTION IS THE BOTTLENECK.", text: "Animation remains slow, expensive, and difficult to coordinate across every shot." },
  { number: "02", title: "GOOD STORIES DISAPPEAR.", text: "Too many original ideas stop before production because the path to finished motion is too heavy." },
  { number: "03", title: "WE BUILD A DIFFERENT PATH.", text: "Morpio keeps authorship and direction human, then uses repeatable systems to carry the work to screen." },
];

export default function Thesis() {
  return (
    <section id="why" className="why-section thesis-only section-shell" aria-labelledby="why-title">
      <header className="why-header">
        <p className="kicker"><span className="signal-dot" />MORPIO THESIS</p>
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

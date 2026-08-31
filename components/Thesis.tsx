const POINTS = [
  {
    number: "01",
    title: "A GLOBAL AUDIENCE",
    text: "Animation is a global industry. A strong character or story can cross borders, formats, and languages.",
  },
  {
    number: "02",
    title: "TOO FEW GET MADE",
    text: "Most promising stories never reach the screen. Animation takes time, costs money, and asks many specialists to move in sync.",
  },
  {
    number: "03",
    title: "A SHORTER PATH",
    text: "Morpio uses AI-assisted development and production systems to move from an idea to finished motion faster, with people directing every creative decision.",
  },
];

export default function Thesis() {
  return (
    <section className="thesis section-shell" aria-labelledby="thesis-title">
      <div className="section-heading">
        <p className="kicker">WHY MORPIO</p>
        <h2 id="thesis-title">MORE STORIES<br />SHOULD REACH<br />THE SCREEN.</h2>
      </div>
      <div className="thesis-list">
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

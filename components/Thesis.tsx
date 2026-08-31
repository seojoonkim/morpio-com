import Reveal from "./Reveal";

const POINTS = [
  {
    number: "01",
    text: "Animation is slow, expensive, and hard to coordinate.",
    image: "/work/tail-stopped.jpg",
    alt: "Still from the Morpio original animation 꼬리가 멈춘 뒤에",
  },
  {
    number: "02",
    text: "So most promising stories never survive production.",
    image: "https://i.ytimg.com/vi/Ff3HrDGiFsw/oar2.jpg",
    alt: "Still from the technical demo 창조의 사과",
  },
  {
    number: "03",
    text: "We treat that as a production problem, not a story problem.",
    image: "https://i.ytimg.com/vi/zUvo4r_AyoU/oar2.jpg",
    alt: "Still from GTO: 파라다이스 로스트",
  },
];

export default function Thesis() {
  return (
    <section id="why" className="why-section section-shell" aria-labelledby="why-title">
      <header className="why-header">
        <p className="kicker"><span className="signal-dot" />WHY WE EXIST</p>
        <h2 id="why-title">MORE STORIES SHOULD<br />REACH THE SCREEN.</h2>
        <p>People everywhere watch animation. Far fewer stories ever become it.</p>
      </header>
      <div className="why-sequence">
        {POINTS.map((point) => (
          <Reveal className="why-row" key={point.number}>
            <div className="why-statement"><span>{point.number}</span><h3>{point.text}</h3></div>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={point.image} alt={point.alt} />
              <figcaption>MORPIO / FRAME {point.number}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

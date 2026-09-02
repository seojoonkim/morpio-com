import ThesisArtwork from "./ThesisArtwork";

const POINTS = [
  {
    number: "01",
    title: "PRODUCTION IS THE BOTTLENECK.",
    text: "Many worlds already have characters, stories, and audiences. Consistent shot-by-shot production is what stops them from moving.",
    image: "/media/thesis/thesis-01-bottleneck.webp",
    mobileImage: "/media/thesis/thesis-01-bottleneck-mobile.webp",
    video: "/media/thesis/video/thesis-01-bottleneck-h3.mp4",
    mobileVideo: "/media/thesis/video/thesis-01-bottleneck-h3-mobile.mp4",
    alt: "Animation frames passing through a narrow production bottleneck",
  },
  {
    number: "02",
    title: "GOOD STORIES DISAPPEAR.",
    text: "A published world can wait years for the right studio, budget, and production window.",
    image: "/media/thesis/thesis-02-stories.webp",
    mobileImage: "/media/thesis/thesis-02-stories-mobile.webp",
    video: "/media/thesis/video/thesis-02-stories-h3.mp4",
    mobileVideo: "/media/thesis/video/thesis-02-stories-h3-mobile.mp4",
    alt: "Storyboards and film preserved inside an archive",
  },
  {
    number: "03",
    title: "WE BUILD A DIFFERENT PATH.",
    text: "Morpio builds one controlled path from source interpretation to final master. The same team is responsible for direction, consistency, and review.",
    image: "/media/thesis/thesis-03-system.webp",
    mobileImage: "/media/thesis/thesis-03-system-mobile.webp",
    video: "/media/thesis/video/thesis-03-system-h3.mp4",
    mobileVideo: "/media/thesis/video/thesis-03-system-h3-mobile.mp4",
    alt: "A human-directed path connecting repeated production stages",
  },
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
            <ThesisArtwork {...point} />
          </article>
        ))}
      </div>
    </section>
  );
}

const FRAMES = [
  { src: "/media/studio/frame-01.jpg", label: "CHARACTER", alt: "A girl in a sailor uniform standing with her eyes closed in a green hillside street" },
  { src: "/media/studio/frame-02.jpg", label: "PERFORMANCE", alt: "A girl pressing her face against her dog" },
  { src: "/media/studio/frame-03.jpg", label: "WORLD", alt: "A small figure standing before a ring of light over dark water" },
  { src: "/media/studio/frame-04.jpg", label: "LIGHT", alt: "A figure beside a tall pillar of light reflected on water" },
];

export default function About() {
  return (
    <section id="studio" className="studio section-shell" aria-labelledby="studio-title">
      <div>
        <p className="kicker"><span className="signal-dot" />THE STUDIO / SEOUL</p>
        <h2 id="studio-title">ONE TEAM.<br />FIRST DRAFT TO<br />FINAL FRAME.</h2>
      </div>
      <div className="studio-copy">
        <p>Morpio is an animation studio and AI media lab in Seoul, <strong>powered by Hashed.</strong></p>
        <p>One team carries a world from first draft to final frame. Story and direction stay in human hands; the work that repeats runs on our system.</p>
        <a href="#contact">START A CONVERSATION <span>↘</span></a>
      </div>
      <div className="studio-frames" aria-label="Frames from Morpio's original film in production">
        {FRAMES.map((frame, index) => (
          <figure key={frame.src} data-reveal style={{ "--reveal-delay": `${index * 0.09}s` } as React.CSSProperties}>
            <div className="studio-frame-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={frame.src} alt={frame.alt} width={960} height={540} loading="lazy" />
            </div>
            <figcaption><b>{String(index + 1).padStart(2, "0")}</b>{frame.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="studio-frames-note">FRAMES FROM OUR ORIGINAL FILM, CURRENTLY IN PRODUCTION</p>
    </section>
  );
}

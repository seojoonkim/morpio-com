"use client";

import { useState } from "react";

const STEPS = [
  { number: "01", title: "STORY & DIRECTION", text: "A human writes it. A human directs it. This never changes.", image: "/work/tail-stopped.jpg", position: "center 52%" },
  { number: "02", title: "VISUAL DEVELOPMENT", text: "AI-assisted exploration of style, character, and world, curated by our directors.", image: "https://i.ytimg.com/vi/Ff3HrDGiFsw/oar2.jpg", position: "center 65%" },
  { number: "03", title: "SHOT PRODUCTION", text: "Repeatable systems carry layout, animation passes, and iteration.", image: "https://i.ytimg.com/vi/zUvo4r_AyoU/oar2.jpg", position: "center 64%" },
  { number: "04", title: "EDIT & FINISH", text: "Cut, sound, and grade come together under the same creative direction.", image: "https://i.ytimg.com/vi/tOaoUyxOLT0/maxresdefault.jpg", position: "center" },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="system" className="process section-shell" aria-labelledby="system-title">
      <header className="process-heading">
        <p className="kicker"><span className="signal-dot" />HOW WE WORK</p>
        <h2 id="system-title">HUMANS DECIDE.<br /><span>SYSTEMS REPEAT.</span></h2>
      </header>
      <div className="process-layout">
        <div className="process-list">
          {STEPS.map((step, index) => (
            <article
              className={active === index ? "is-active" : ""}
              key={step.number}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <button type="button" onClick={() => setActive(index)} aria-pressed={active === index}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </button>
              <div className="process-mobile-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt={`Production frame for ${step.title}`} style={{ objectPosition: step.position }} />
              </div>
            </article>
          ))}
        </div>
        <figure className="process-visual">
          {STEPS.map((step, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={step.number} className={active === index ? "is-active" : ""} src={step.image} alt={active === index ? `Production frame for ${step.title}` : ""} style={{ objectPosition: step.position }} />
          ))}
          <figcaption><span>0{active + 1} / 04</span><span>ONE DIRECTION / EVERY FRAME</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { REEL_ITEMS, type ReelItem } from "./reel-data";

function ReelCard({ item }: { item: ReelItem }) {
  const [activeVideoId, setActiveVideoId] = useState(item.variants[0].videoId);
  const activeVariant = item.variants.find((variant) => variant.videoId === activeVideoId)!;

  return (
    <article
      className="reel-card"
      data-reel-id={item.id}
      style={{ "--card-a": item.colorA, "--card-b": item.colorB } as React.CSSProperties}
    >
      <div className="reel-media">
        <iframe
          key={activeVideoId}
          src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&modestbranding=1`}
          title={`${item.title} — ${activeVariant.label}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <span className="reel-index">{item.index}</span>
      </div>
      <div className="reel-caption">
        <p>{item.categoryLabel}</p>
        <h3>{item.title}</h3>
        {item.subtitle && <p className="reel-subtitle">{item.subtitle}</p>}
        {item.variants.length > 1 && (
          <div className="language-switcher" aria-label={`${item.title} language`}>
            {item.variants.map((variant) => (
              <button
                key={variant.videoId}
                type="button"
                data-video-id={variant.videoId}
                aria-pressed={activeVideoId === variant.videoId}
                onClick={() => setActiveVideoId(variant.videoId)}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function CastingReel() {
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-heading work-heading">
        <p className="kicker">SELECTED WORK</p>
        <h2>STORIES FROM<br />ANOTHER WORLD.</h2>
      </div>
      <div className="reel-grid">
        {REEL_ITEMS.map((item) => <ReelCard item={item} key={item.id} />)}
      </div>
    </section>
  );
}

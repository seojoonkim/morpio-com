"use client";

import { useState } from "react";
import { REEL_ITEMS, type ReelItem } from "./reel-data";

function ReelCard({ item }: { item: ReelItem }) {
  const [activeVideoId, setActiveVideoId] = useState(item.variants[0].videoId);
  const [playing, setPlaying] = useState(false);
  const activeVariant = item.variants.find((variant) => variant.videoId === activeVideoId)!;

  const selectVariant = (videoId: string) => {
    setActiveVideoId(videoId);
    setPlaying(false);
  };

  return (
    <article className="reel-card" data-reel-id={item.id}>
      <div className="reel-media">
        {playing ? (
          <iframe
            key={activeVideoId}
            src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${item.title} · ${activeVariant.label}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button className={`video-poster${item.portrait ? " portrait-poster" : ""}`} type="button" onClick={() => setPlaying(true)} aria-label={`Play ${item.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${activeVideoId}/${item.portrait ? "oar2.jpg" : "maxresdefault.jpg"}`} alt="" />
            <span className="play-button" aria-hidden="true">▶</span>
            <span className="play-label">PLAY FILM</span>
          </button>
        )}
      </div>
      <div className="reel-caption">
        <div className="reel-label"><span>{item.index}</span><p>{item.categoryLabel}</p></div>
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
                onClick={() => selectVariant(variant.videoId)}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}
        <button className={`watch-film${item.variants.length === 1 ? " single" : ""}`} type="button" onClick={() => setPlaying(true)}>Play film <span>↗</span></button>
      </div>
    </article>
  );
}

export default function CastingReel() {
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-heading work-heading">
        <p className="kicker"><span className="signal-dot" />03 · SELECTED WORK</p>
        <h2>STORIES FROM<br />ANOTHER WORLD.</h2>
        <p>One original animation and three technical demos.</p>
      </div>
      <div className="reel-grid">
        {REEL_ITEMS.map((item) => <ReelCard item={item} key={item.id} />)}
      </div>
    </section>
  );
}

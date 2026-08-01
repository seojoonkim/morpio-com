"use client";
import { useEffect, useState } from "react";
import { REEL_ITEMS } from "./reel-data";

export default function CastingReel() {
  const [reduce, setReduce] = useState(true);
  useEffect(() => { const mq = matchMedia("(prefers-reduced-motion: reduce)"); const sync = () => setReduce(mq.matches); sync(); mq.addEventListener("change", sync); return () => mq.removeEventListener("change", sync); }, []);
  return <section id="work" className="work-section section-shell">
    <div className="section-heading work-heading"><p className="kicker">SELECTED WORK · PLACEHOLDER REELS</p><h2>SIX WINDOWS<br />INTO THE LAB.</h2><p>Six temporary slots are ready for the final portfolio films. Replace the files and one data list when the cuts arrive.</p></div>
    <div className="reel-grid">
      {REEL_ITEMS.map((item) => <article className="reel-card" key={item.id} style={{ "--card-a": item.colorA, "--card-b": item.colorB } as React.CSSProperties}>
        <div className="reel-media">
          <video data-category={item.category} src={item.src} poster={item.poster} muted playsInline loop preload="metadata" autoPlay={!reduce} aria-label={`${item.title} placeholder video`} />
          <span className="sample-stamp">SAMPLE</span><span className="reel-index">{item.index}</span>
        </div>
        <div className="reel-caption"><p>{item.categoryLabel}</p><h3>{item.title}</h3><div><span>PLACEHOLDER · REPLACE WITH FINAL CUT</span><span>00:04</span></div></div>
      </article>)}
    </div>
  </section>;
}

"use client";

import { useEffect, useState } from "react";
import { DEMO_FILMS, FEATURE_FILM } from "./reel-data";

const PLAY_EVENT = "morpio:media-play";
const embedUrl = (videoId: string) => `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
const thumbUrl = (videoId: string, portrait = false) => `https://i.ytimg.com/vi/${videoId}/${portrait ? "oar2.jpg" : "maxresdefault.jpg"}`;

function useSinglePlayback(owner: string) {
  const [playing, setPlaying] = useState<string | null>(null);
  useEffect(() => {
    const stopOther = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== owner) setPlaying(null);
    };
    window.addEventListener(PLAY_EVENT, stopOther);
    return () => window.removeEventListener(PLAY_EVENT, stopOther);
  }, [owner]);
  const play = (key: string) => {
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: owner }));
    setPlaying(key);
  };
  return { playing, play, stop: () => setPlaying(null) };
}

export default function CastingReel() {
  const [variantId, setVariantId] = useState(FEATURE_FILM.variants[0].videoId);
  const { playing, play, stop } = useSinglePlayback("feature");
  const variant = FEATURE_FILM.variants.find((item) => item.videoId === variantId)!;

  const selectVariant = (videoId: string) => {
    setVariantId(videoId);
    stop();
  };

  return (
    <section id="work" className="work-section section-shell">
      <article className="feature-film" data-feature-film={FEATURE_FILM.id}>
        <div className="feature-heading">
          <div>
            <p className="kicker kicker-light"><span className="signal-dot" />ORIGINAL ANIMATION / 01</p>
            <h2>{FEATURE_FILM.title}</h2>
            <p className="feature-subtitle">{FEATURE_FILM.subtitle}</p>
          </div>
          <p className="feature-description">An original short written, directed, and finished by Morpio. Watch in Korean, English, or Japanese.</p>
        </div>
        <div className="feature-media media-frame">
          {playing === "feature" ? (
            <iframe src={embedUrl(variantId)} title={`${FEATURE_FILM.title} · ${variant.label}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <button type="button" className="media-poster" onClick={() => play("feature")} aria-label={`Play ${FEATURE_FILM.title} in ${variant.label}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={variantId === FEATURE_FILM.variants[0].videoId ? "/work/tail-stopped.jpg" : thumbUrl(variantId)} alt="" />
              <span className="round-play" aria-hidden="true">▶</span>
              <span className="poster-caption">PLAY ORIGINAL FILM</span>
            </button>
          )}
        </div>
        <div className="feature-meta">
          <div className="language-switcher" aria-label="Film language">
            {FEATURE_FILM.variants.map((item) => (
              <button key={item.videoId} type="button" data-video-id={item.videoId} aria-pressed={variantId === item.videoId} onClick={() => selectVariant(item.videoId)}>{item.label}</button>
            ))}
          </div>
          <span>KO DEFAULT / CLICK TO LOAD VIDEO</span>
        </div>
      </article>
    </section>
  );
}

export function TechnicalDemoIndex() {
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null);
  const { playing, play, stop } = useSinglePlayback("demos");

  return (
    <section className="demo-index section-shell" aria-labelledby="demo-title">
      <div className="demo-intro">
        <p className="kicker kicker-light"><span className="signal-dot" />TECHNICAL DEMOS / 03</p>
        <h2 id="demo-title">THREE TESTS.<br />THREE PRODUCTION PROBLEMS.</h2>
        <p>Each demo tests a different part of the path from source material to finished motion.</p>
      </div>
      <div className="demo-rows">
        {DEMO_FILMS.map((demo) => {
          const expanded = expandedDemo === demo.id;
          const isPlaying = playing === demo.id;
          return (
            <article className={`demo-row${expanded ? " is-expanded" : ""}`} data-demo-row={demo.id} key={demo.id}>
              <button className="demo-toggle" type="button" aria-expanded={expanded} aria-controls={`${demo.id}-media`} onClick={() => { setExpandedDemo(expanded ? null : demo.id); stop(); }}>
                <span className="demo-number">{demo.index}</span>
                <span className="demo-name"><strong>{demo.title}</strong><small>{demo.subtitle}</small></span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumbUrl(demo.videoId, demo.portrait)} alt="" />
                <span className="demo-action">{expanded ? "CLOSE" : "OPEN"} <i aria-hidden="true">↘</i></span>
              </button>
              {expanded && (
                <div className="demo-media media-frame" id={`${demo.id}-media`}>
                  {isPlaying ? (
                    <iframe src={embedUrl(demo.videoId)} title={demo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                  ) : (
                    <button className="media-poster" type="button" onClick={() => play(demo.id)} aria-label={`Play ${demo.title}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={thumbUrl(demo.videoId, demo.portrait)} alt="" />
                      <span className="round-play" aria-hidden="true">▶</span>
                      <span className="poster-caption">PLAY TECHNICAL DEMO</span>
                    </button>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

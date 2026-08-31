"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saveData) {
      video.pause();
      setPlaying(false);
      setMotionAllowed(false);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && document.visibilityState === "visible") {
        video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        video.pause();
        setPlaying(false);
      }
    }, { threshold: 0.2 });

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
        setPlaying(false);
      }
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="top" className="hero" data-hero-film>
      <video
        ref={videoRef}
        className="hero-film"
        src={motionAllowed ? "/media/hero/hero-loop.mp4" : undefined}
        poster="/media/hero/hero-poster.jpg"
        muted
        playsInline
        loop
        autoPlay
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-wash" />
      <div className="hero-state">MORPIO / SEOUL</div>
      <div className="hero-copy">
        <p className="kicker kicker-light"><span className="signal-dot" />MORPIO / ANIMATION STUDIO</p>
        <h1>ANOTHER WORLD<br /><span className="hero-last-line">STARTS HERE<span className="hero-period" aria-hidden="true" /></span></h1>
        <p>We make original animation with human direction and AI-assisted production, so more stories reach the screen.</p>
      </div>
      <div className="hero-controls">
        <a href="#work">WATCH THE FILM <span>↓</span></a>
        <button type="button" onClick={togglePlayback} aria-label={playing ? "Pause hero film" : "Play hero film"}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          {playing ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type ThesisArtworkProps = {
  image: string;
  mobileImage: string;
  video: string;
  mobileVideo: string;
  alt: string;
};

export default function ThesisArtwork({ image, mobileImage, video, mobileVideo, alt }: ThesisArtworkProps) {
  const figureRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [readyVideo, setReadyVideo] = useState("");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const viewport = window.matchMedia("(max-width: 700px)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateViewport = () => setIsMobile(viewport.matches);
    updatePreference();
    updateViewport();
    preference.addEventListener("change", updatePreference);
    viewport.addEventListener("change", updateViewport);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { rootMargin: "300px 0px" },
    );
    if (figureRef.current) observer.observe(figureRef.current);

    return () => {
      preference.removeEventListener("change", updatePreference);
      viewport.removeEventListener("change", updateViewport);
      observer.disconnect();
    };
  }, []);

  const shouldPlay = hasEntered && !reducedMotion;
  const selectedVideo = isMobile ? mobileVideo : video;

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    if (isVisible && !reducedMotion) {
      void element.play().catch(() => undefined);
    } else {
      element.pause();
    }
  }, [isVisible, reducedMotion, hasEntered]);

  return (
    <figure ref={figureRef} className="thesis-art">
      <picture>
        <source media="(max-width: 700px)" srcSet={mobileImage} />
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      </picture>
      {shouldPlay && (
        <video
          key={selectedVideo}
          ref={videoRef}
          src={selectedVideo}
          className={readyVideo === selectedVideo ? "is-ready" : ""}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => {
            setReadyVideo(selectedVideo);
            if (isVisible) void videoRef.current?.play().catch(() => undefined);
          }}
        />
      )}
    </figure>
  );
}

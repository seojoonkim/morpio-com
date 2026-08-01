export type ReelCategory = "animation" | "virtual-celebrity" | "ai-advertising";
export type ReelItem = { id: string; index: string; title: string; category: ReelCategory; categoryLabel: string; src: string; poster: string; colorA: string; colorB: string; };
export const REEL_ITEMS: ReelItem[] = [
  { id: "sample-01", index: "01", title: "SHORT-FORM CHARACTER LOOP", category: "animation", categoryLabel: "ANIMATION", src: "/video/sample-01.mp4", poster: "/thumbs/babylon-is-burning.webp", colorA: "#1B3AA0", colorB: "#F5C451" },
  { id: "sample-02", index: "02", title: "EPISODIC ANIMATION TEST", category: "animation", categoryLabel: "ANIMATION", src: "/video/sample-02.mp4", poster: "/thumbs/chromatik.webp", colorA: "#14503C", colorB: "#FF6B4A" },
  { id: "sample-03", index: "03", title: "VIRTUAL PERFORMER REEL", category: "virtual-celebrity", categoryLabel: "VIRTUAL CELEBRITY", src: "/video/sample-03.mp4", poster: "/thumbs/digital-travel.webp", colorA: "#6E1B2E", colorB: "#7FC8E8" },
  { id: "sample-04", index: "04", title: "LIVE PERSONA SESSION", category: "virtual-celebrity", categoryLabel: "VIRTUAL CELEBRITY", src: "/video/sample-04.mp4", poster: "/thumbs/jupiter.webp", colorA: "#3B2340", colorB: "#79E0B4" },
  { id: "sample-05", index: "05", title: "PRODUCT SPOT CONCEPT", category: "ai-advertising", categoryLabel: "AI ADVERTISING", src: "/video/sample-05.mp4", poster: "/thumbs/mercedes-amg.webp", colorA: "#B4441A", colorB: "#4E6E8E" },
  { id: "sample-06", index: "06", title: "BRAND FILM CONCEPT", category: "ai-advertising", categoryLabel: "AI ADVERTISING", src: "/video/sample-06.mp4", poster: "/thumbs/the-purity-revealed.webp", colorA: "#12343B", colorB: "#FF9F1C" },
];

export type ReelVariant = {
  label: string;
  videoId: string;
};

export type ReelItem = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  categoryLabel: string;
  colorA: string;
  colorB: string;
  variants: ReelVariant[];
};

export const REEL_ITEMS: ReelItem[] = [
  {
    id: "after-the-tail-stopped",
    index: "01",
    title: "尻尾が止まったあとも",
    subtitle: "꼬리가 멈춘 뒤에",
    categoryLabel: "ORIGINAL ANIMATION",
    colorA: "#1B3AA0",
    colorB: "#F5C451",
    variants: [
      { label: "ENGLISH SUBTITLES", videoId: "vVmnsDeSwhE" },
      { label: "한국어 자막", videoId: "31Jm1Z2fnek" },
      { label: "日本語", videoId: "tHjjSmaGcos" },
    ],
  },
  {
    id: "apple-of-creation",
    index: "02",
    title: "創造のリンゴ",
    subtitle: "창조의 사과",
    categoryLabel: "ORIGINAL SHORT",
    colorA: "#14503C",
    colorB: "#FF6B4A",
    variants: [{ label: "WATCH", videoId: "Ff3HrDGiFsw" }],
  },
  {
    id: "gto-paradise-lost",
    index: "03",
    title: "GTO — PARADISE LOST",
    categoryLabel: "ANIME SHORT",
    colorA: "#6E1B2E",
    colorB: "#7FC8E8",
    variants: [{ label: "WATCH", videoId: "zUvo4r_AyoU" }],
  },
  {
    id: "agent-kim-reactivated",
    index: "04",
    title: "AGENT KIM REACTIVATED",
    subtitle: "김부장",
    categoryLabel: "ANIMATION",
    colorA: "#3B2340",
    colorB: "#79E0B4",
    variants: [{ label: "WATCH", videoId: "tOaoUyxOLT0" }],
  },
];

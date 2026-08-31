export type ReelVariant = {
  label: "KO" | "EN" | "JP";
  videoId: string;
};

export type FeatureFilm = {
  id: string;
  title: string;
  subtitle: string;
  variants: ReelVariant[];
};

export type DemoFilm = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  videoId: string;
  portrait?: boolean;
};

export const FEATURE_FILM: FeatureFilm = {
  id: "after-the-tail-stopped",
  title: "尻尾が止まったあとも",
  subtitle: "꼬리가 멈춘 뒤에",
  variants: [
    { label: "KO", videoId: "31Jm1Z2fnek" },
    { label: "EN", videoId: "vVmnsDeSwhE" },
    { label: "JP", videoId: "tHjjSmaGcos" },
  ],
};

export const DEMO_FILMS: DemoFilm[] = [
  {
    id: "apple-of-creation",
    index: "01",
    title: "創造のリンゴ",
    subtitle: "창조의 사과",
    videoId: "Ff3HrDGiFsw",
    portrait: true,
  },
  {
    id: "gto-paradise-lost",
    index: "02",
    title: "GTO: PARADISE LOST",
    subtitle: "GTO: 파라다이스 로스트",
    videoId: "zUvo4r_AyoU",
    portrait: true,
  },
  {
    id: "agent-kim-reactivated",
    index: "03",
    title: "AGENT KIM REACTIVATED",
    subtitle: "김부장",
    videoId: "tOaoUyxOLT0",
  },
];

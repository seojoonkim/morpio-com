export type Project = {
  slug: string;
  title: string;
  year: number;
  thumb: string;
};

export const PROJECTS: Project[] = [
  { slug: "jupiter", title: "Jupiter", year: 2026, thumb: "/thumbs/jupiter.webp" },
  { slug: "mercedes-amg", title: "Mercedes AMG", year: 2025, thumb: "/thumbs/mercedes-amg.webp" },
  { slug: "thought", title: "Thought", year: 2025, thumb: "/thumbs/thought.webp" },
  { slug: "babylon-is-burning", title: "Babylon is burning", year: 2025, thumb: "/thumbs/babylon-is-burning.webp" },
  { slug: "the-disease-spread-on-tiktok", title: "The disease spread on Tiktok", year: 2024, thumb: "/thumbs/the-disease-spread-on-tiktok.webp" },
  { slug: "the-purity-revealed", title: "The purity revealed", year: 2025, thumb: "/thumbs/the-purity-revealed.webp" },
  { slug: "paths-of-life", title: "Paths of life", year: 2024, thumb: "/thumbs/paths-of-life.webp" },
  { slug: "ah-psychedelics", title: "Ah, Psychedelics", year: 2025, thumb: "/thumbs/ah-psychedelics.webp" },
  { slug: "digital-travel", title: "Digital Travel", year: 2024, thumb: "/thumbs/digital-travel.webp" },
  { slug: "chromatik", title: "Chromatik", year: 2025, thumb: "/thumbs/chromatik.webp" },
];

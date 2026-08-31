import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Morpio",
    short_name: "Morpio",
    description: "Original animation and technical demos from Morpio in Seoul.",
    start_url: "/",
    display: "standalone",
    background_color: "#090A0C",
    theme_color: "#090A0C",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

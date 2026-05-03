import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "MORPIO — From Frame to Fame.",
  description: "AI-powered image-to-video & virtual celebrity creation. 이미지를 영상으로, 상상을 존재로.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "MORPIO — From Frame to Fame.",
    description: "AI-powered image-to-video & virtual celebrity creation. 이미지를 영상으로, 상상을 존재로.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — From Frame to Fame.",
    description: "AI-powered image-to-video & virtual celebrity creation.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-bg text-white font-sans noise">{children}</body>
    </html>
  );
}

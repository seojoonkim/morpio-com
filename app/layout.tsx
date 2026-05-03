import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800", "900"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
  style: ["italic", "normal"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MORPIO — AI Media Studio for the Next Era",
  description:
    "MORPIO transforms stories, talent, and brands through AI-powered content production. AI animation, virtual celebrities, and AI advertising — built in Seoul.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "MORPIO — AI Media Studio for the Next Era",
    description:
      "AI Animation. Virtual Celeb Studio. AI Advertising. We turn IP into intelligent media.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — AI Media Studio for the Next Era",
    description:
      "AI Animation. Virtual Celeb Studio. AI Advertising.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05060A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="bg-bg-base text-ink-primary antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

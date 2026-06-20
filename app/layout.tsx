import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-base text-ink-primary antialiased overflow-x-hidden">
        <div className="stage-spot" aria-hidden />
        {children}
      </body>
    </html>
  );
}

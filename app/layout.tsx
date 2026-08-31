import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MORPIO — Another World Starts Here",
  description: "Original animation and technical demos made through AI-assisted visual development and repeatable production systems.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "MORPIO — Another World Starts Here",
    description: "Original animation and technical demos from an AI media lab in Seoul, powered by Hashed.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — Another World Starts Here",
    description: "Original animation and AI-assisted production systems.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F7F8FA",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

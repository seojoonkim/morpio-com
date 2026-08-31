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
    images: [{ url: "/og-morpio.png", width: 1200, height: 630, alt: "morpio. — Another world starts here." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — Another World Starts Here",
    description: "Original animation and AI-assisted production systems.",
    images: ["/og-morpio.png"],
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
      <body>{children}</body>
    </html>
  );
}

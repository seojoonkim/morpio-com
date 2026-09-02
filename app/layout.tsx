import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MORPIO — Another World Starts Here",
  description: "A Seoul animation studio carrying original worlds from source material to finished motion with human direction and AI-assisted production.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "MORPIO — Another World Starts Here",
    description: "A Seoul animation studio carrying original worlds from source material to finished motion with human direction and AI-assisted production.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    images: [{ url: "/og-morpio.png", width: 1200, height: 630, alt: "morpio. — Another world starts here." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — Another World Starts Here",
    description: "Original worlds carried from source material to finished motion with human direction and AI-assisted production.",
    images: ["/og-morpio.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090A0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

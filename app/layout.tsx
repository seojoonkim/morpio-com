import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morpio · Animation Studio in Seoul",
  description: "A Seoul animation studio working with IP holders and platforms to carry original worlds from source material to finished motion.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "Morpio · Animation Studio in Seoul",
    description: "A Seoul animation studio working with IP holders and platforms to carry original worlds from source material to finished motion.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    images: [{ url: "/og-morpio.png", width: 1200, height: 630, alt: "morpio. — Another world starts here." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morpio · Animation Studio in Seoul",
    description: "A Seoul animation studio working with IP holders and platforms to carry original worlds into finished motion.",
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

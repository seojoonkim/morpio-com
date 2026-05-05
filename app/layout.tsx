import type { Metadata, Viewport } from "next";
import { Inter_Tight, EB_Garamond } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "MORPIO — AI Media Studio",
  description:
    "We turn IP into intelligent media. AI animation, virtual celebrities, and AI advertising — built in Seoul.",
  metadataBase: new URL("https://morpio.com"),
  openGraph: {
    title: "MORPIO — AI Media Studio",
    description:
      "AI Animation. Virtual Celeb Studio. AI Advertising. We turn IP into intelligent media.",
    url: "https://morpio.com",
    siteName: "MORPIO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MORPIO — AI Media Studio",
    description: "AI Animation. Virtual Celeb Studio. AI Advertising.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${GeistSans.variable} ${serif.variable} ${GeistMono.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

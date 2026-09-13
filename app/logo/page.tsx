import type { Metadata } from "next";
import "./logo.css";

export const metadata: Metadata = {
  title: "Morpio logo",
  description: "Morpio wordmark and typography specification.",
  alternates: { canonical: "/logo" },
};

export default function LogoPage() {
  return (
    <main className="logo-page" data-logo-page>
      <div className="logo-stage">
        <h1 className="logo-wordmark" aria-label="Morpio">
          Morpio<span className="logo-period" aria-hidden="true" />
        </h1>
      </div>
      <footer className="logo-spec" data-font-info>
        <span>TYPOGRAPHY / WORDMARK</span>
        <strong>Bricolage Grotesque</strong>
        <span>Bold · 700 · Local TTF /fonts/bricolage-700.ttf</span>
      </footer>
    </main>
  );
}

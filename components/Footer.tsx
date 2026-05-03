"use client";

import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang].footer;

  return (
    <footer className="border-t border-white/10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-display tracking-[0.25em] text-white/45">
      <span>{t.left}</span>
      <span className="text-white/35">MORPIO STUDIO</span>
      <span>{t.right}</span>
    </footer>
  );
}

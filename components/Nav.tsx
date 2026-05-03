"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

const SPRING = [0.175, 0.885, 0.32, 1.275] as const;

export default function Nav({
  lang,
  setLang,
  sound,
  setSound,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  sound: boolean;
  setSound: (b: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  const goto = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <>
      {/* top-left logo */}
      <a
        href="#top"
        className="fixed top-6 left-6 z-50 font-display font-bold tracking-tight text-white text-lg md:text-xl mix-blend-difference"
      >
        MORPIO
      </a>

      {/* top-right controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 mix-blend-difference">
        {/* lang switch */}
        <div className="hidden md:flex items-center gap-1 pill !py-2 !px-3 text-xs">
          <button
            onClick={() => setLang("EN")}
            className={lang === "EN" ? "text-[#CCFF00]" : "text-white/60"}
          >
            EN
          </button>
          <span className="text-white/30">/</span>
          <button
            onClick={() => setLang("KR")}
            className={lang === "KR" ? "text-[#CCFF00]" : "text-white/60"}
          >
            KR
          </button>
        </div>

        {/* sound toggle (round) */}
        <button
          onClick={() => setSound(!sound)}
          aria-label="sound"
          className="w-10 h-10 rounded-full border border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center"
        >
          <span className="text-[10px] tracking-widest font-display">
            {sound ? "ON" : "OFF"}
          </span>
        </button>

        {/* menu (round) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="menu"
          className="w-12 h-12 rounded-full bg-white text-black hover:scale-110 transition-transform duration-300 flex items-center justify-center font-display text-xs tracking-widest"
        >
          {t.nav.menu}
        </button>
      </div>

      {/* menu panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "110%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "110%", opacity: 0.5 }}
              transition={{ duration: 0.65, ease: SPRING }}
              className="fixed top-4 right-4 bottom-4 z-[70] w-[92vw] md:w-[44vw] lg:w-[40vw] bg-white text-black rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm tracking-widest text-black/60">
                  MORPIO / NAV
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="close"
                  className="w-10 h-10 rounded-full border border-black/15 hover:bg-black hover:text-white flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-2 md:gap-4">
                {[
                  { id: "services", label: lang === "EN" ? "Services" : "서비스" },
                  { id: "studio", label: lang === "EN" ? "The Studio" : "스튜디오" },
                  { id: "contact", label: lang === "EN" ? "Contact" : "컨택트" },
                ].map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => goto(item.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.06,
                      ease: SPRING,
                    }}
                    className="menu-link group text-left"
                  >
                    <span className="dot bg-[#CCFF00]" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <div className="border-t border-black/10 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  {t.contact.socials.map((s) => (
                    <a
                      key={s.k}
                      href={s.href}
                      className="w-10 h-10 rounded-full border border-black/15 hover:bg-black hover:text-white flex items-center justify-center text-xs font-display tracking-widest"
                    >
                      {s.k}
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="font-display text-lg md:text-xl underline underline-offset-4 hover:text-[#5a7a00]"
                >
                  {t.contact.email}
                </a>
                <div className="flex items-center gap-2 text-xs font-display tracking-widest text-black/60">
                  <button
                    onClick={() => setLang("EN")}
                    className={lang === "EN" ? "text-black" : ""}
                  >
                    EN
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => setLang("KR")}
                    className={lang === "KR" ? "text-black" : ""}
                  >
                    KR
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

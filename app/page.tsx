"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideThumb from "@/components/SideThumb";
import type { Lang } from "@/components/i18n";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [sound, setSound] = useState(false);
  const [lang, setLang] = useState<Lang>("EN");

  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            key="loader"
            lang={lang}
            onEnter={(s) => {
              setSound(s);
              setLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Nav lang={lang} setLang={setLang} sound={sound} setSound={setSound} />
          <SideThumb />
          <Hero lang={lang} />
          <Services lang={lang} />
          <Studio lang={lang} />
          <Contact lang={lang} />
          <Footer lang={lang} />
        </>
      )}
    </main>
  );
}

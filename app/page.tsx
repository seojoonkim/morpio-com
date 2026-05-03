"use client";

import { useEffect, useState } from "react";
import Background from "@/components/Background";
import WebGLCanvas from "@/components/WebGLCanvas";
import LoadingScreen from "@/components/LoadingScreen";
import Logo from "@/components/Logo";
import ModeSwitch from "@/components/ModeSwitch";
import MenuButton from "@/components/MenuButton";
import MenuPanel from "@/components/MenuPanel";
import ShowreelThumb from "@/components/ShowreelThumb";
import SpiralGallery from "@/components/SpiralGallery";
import SpiralList from "@/components/SpiralList";
import SoundButton from "@/components/SoundButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Mode = "spiral" | "list";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("spiral");
  const [sound, setSound] = useState(false);
  const [entered, setEntered] = useState(false);

  // Lock scroll while loading screen is up
  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
      {/* Loading overlay */}
      {!entered && <LoadingScreen onEnter={() => setEntered(true)} />}

      {/* Background layers */}
      <Background />
      <WebGLCanvas />

      {/* Fixed overlay UI (pacomepertant.com .home-overlay-wrapper) */}
      <Logo />
      <ModeSwitch mode={mode} setMode={setMode} />
      <MenuButton open={menuOpen} setOpen={setMenuOpen} />
      <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ShowreelThumb />
      <SoundButton on={sound} setOn={setSound} />

      {/* Pacomepertant-style spiral gallery (real thumbnails, floating) */}
      <SpiralGallery visible={mode === "spiral"} />
      <SpiralList visible={mode === "list"} />

      {/* Main scrollable content */}
      <Hero mode={mode} />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

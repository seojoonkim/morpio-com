"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Mode = "character" | "performer" | "campaign";
const MODES: { id: Mode; number: string; label: string; short: string; image: string; color: string }[] = [
  { id: "character", number: "01", label: "2D CHARACTER", short: "Build the world", image: "/gen/svc-animation.png", color: "#f3b53f" },
  { id: "performer", number: "02", label: "VIRTUAL CELEB", short: "Give it a presence", image: "/gen/svc-virtualcelebs.png", color: "#76d8c4" },
  { id: "campaign", number: "03", label: "AI CAMPAIGN", short: "Put it in culture", image: "/gen/svc-advertising.png", color: "#ff715b" },
];

export default function MorphMachine() {
  const [active, setActive] = useState<Mode>("character");
  const reduce = useReducedMotion();
  const selected = MODES.find((mode) => mode.id === active)!;
  return <section id="morph" className="morph-section section-shell" style={{ "--cast-color": selected.color } as React.CSSProperties}>
    <div className="section-heading morph-heading">
      <p className="kicker">MORPH MACHINE · 001</p>
      <h2>ONE IDEA.<br />THREE FORMS.</h2>
      <p>Re-cast a single idea across the media it needs to live in.</p>
    </div>
    <div className="morph-console">
      <div className="morph-screen">
        <AnimatePresence mode="wait">
          <motion.img key={selected.id} src={selected.image} alt={`${selected.label} sample visualization`}
            initial={reduce ? false : { opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: reduce ? 0 : .28 }} />
        </AnimatePresence>
        <span className="sample-stamp">CONCEPT SAMPLE</span>
        <div className="screen-readout"><span>ACTIVE OUTPUT</span><strong>{selected.label}</strong></div>
      </div>
      <div className="morph-controls" aria-label="Choose an output format">
        {MODES.map((mode) => <button key={mode.id} data-morph-mode={mode.id} aria-pressed={active === mode.id} onClick={() => setActive(mode.id)}>
          <span className="control-number">{mode.number}</span><strong>{mode.label}</strong><small>{mode.short}</small>
        </button>)}
      </div>
    </div>
  </section>;
}

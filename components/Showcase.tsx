"use client";
import { motion } from "framer-motion";

const TILES = [
  { tag: "Cinematic", title: "Neo Tokyo Drift", grad: "from-fuchsia-500/40 via-purple-600/30 to-bg" },
  { tag: "Portrait", title: "Studio Aurora", grad: "from-accent/40 via-emerald-500/30 to-bg" },
  { tag: "Fashion", title: "Atelier Mirage", grad: "from-amber-400/40 via-rose-500/30 to-bg" },
  { tag: "Sci-Fi", title: "Lunar Drift", grad: "from-neon/40 via-indigo-500/30 to-bg" },
  { tag: "Avatar", title: "Hyper Idol Ⅳ", grad: "from-pink-400/40 via-fuchsia-500/30 to-bg" },
  { tag: "Concept", title: "Frame to Fame", grad: "from-lime-400/40 via-cyan-400/30 to-bg" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-32 md:py-40 bg-bg2/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">◇ Showcase</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Real frames. <br />
            <span className="text-white/50">Real fame.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {TILES.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.grad}`} />
              <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <span className="self-start text-[10px] uppercase tracking-[0.25em] px-2 py-1 rounded-full bg-black/40 backdrop-blur border border-white/15">
                  {t.tag}
                </span>
                <div>
                  <p className="font-display text-2xl md:text-3xl tracking-tight">
                    {t.title}
                  </p>
                  <p className="text-xs text-white/50 mt-1">MORPIO · 2026</p>
                </div>
              </div>
              <div className="absolute inset-0 ring-0 ring-accent group-hover:ring-2 transition-all duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const TIERS = [
  {
    name: "Spark",
    price: "$0",
    sub: "for explorers",
    feats: ["10 generations / month", "720p output", "Watermark", "Community Discord"],
    cta: "Start free",
    accent: false,
  },
  {
    name: "Studio",
    price: "$39",
    sub: "per month",
    feats: ["Unlimited generations", "1080p · 30s clips", "Virtual celebrity slots ×3", "Priority queue"],
    cta: "Go Studio",
    accent: true,
  },
  {
    name: "Atelier",
    price: "Custom",
    sub: "for brands & studios",
    feats: ["4K · longform output", "Dedicated identity LoRA", "API & private workspace", "Studio support"],
    cta: "Talk to us",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 md:py-40 bg-bg2/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">◇ Pricing</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Built for <span className="text-accent">every</span> ambition.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 md:p-10 border ${
                t.accent
                  ? "bg-accent text-black border-accent shadow-[0_30px_80px_-20px_rgba(204,255,0,0.4)]"
                  : "bg-bg2/60 border-white/10"
              }`}
            >
              {t.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] bg-black text-accent px-3 py-1 rounded-full border border-accent">
                  Most popular
                </span>
              )}
              <p className="font-display text-2xl tracking-tight">{t.name}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl md:text-6xl tracking-tight">{t.price}</span>
                <span className={`text-sm pb-2 ${t.accent ? "text-black/60" : "text-white/50"}`}>
                  {t.sub}
                </span>
              </div>
              <ul className={`mt-8 space-y-3 ${t.accent ? "text-black/80" : "text-white/70"}`}>
                {t.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-1 inline-block w-1.5 h-1.5 rounded-full ${t.accent ? "bg-black" : "bg-accent"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-10 inline-flex items-center justify-center w-full py-3 rounded-full font-medium ${
                  t.accent
                    ? "bg-black text-accent hover:bg-black/85"
                    : "border border-white/20 hover:border-accent hover:text-accent"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

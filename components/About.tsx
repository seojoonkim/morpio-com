"use client";

import { motion } from "framer-motion";

/**
 * About — large statement, like pacomepertant's about reveal.
 * Big title + paragraph + stat row.
 */
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-6 sm:px-10 lg:px-20 py-32"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-white/40"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            (about / 02)
          </span>
          <h2 className="title-big mt-3">About Morpio.</h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <motion.p
            className="text-[22px] sm:text-[28px] leading-[1.3] tracking-[-0.01em] text-white/85"
            style={{ fontFamily: "var(--font-display), system-ui" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            Morpio is an AI-native studio turning images into motion and motion
            into <span className="text-accent">virtual celebrities</span>.
            We design entire personas — face, voice, story — and deliver them
            ready for the feed.
          </motion.p>

          <p className="mt-6 max-w-[640px] text-[15px] text-white/50">
            상상한 인물을, 실제처럼. 이미지 한 장에서 시작해 영상·페르소나·캠페인까지.
            우리는 “브랜드의 얼굴”을 AI로 빚습니다.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 border-t border-white/10 pt-10">
            {[
              { k: "120+", v: "campaigns" },
              { k: "30+", v: "virtual humans" },
              { k: "8", v: "countries" },
              { k: "24/7", v: "studio uptime" },
            ].map((s) => (
              <div key={s.k}>
                <div
                  className="text-[28px] sm:text-[34px] font-medium tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display), system-ui" }}
                >
                  {s.k}
                </div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-white/40 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

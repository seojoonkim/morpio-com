"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Upload your frame",
    desc: "이미지 한 장만 있으면 시작. 사진, 일러스트, 페인팅 — 모든 정지 이미지가 입력입니다.",
  },
  {
    n: "02",
    title: "Direct the motion",
    desc: "프롬프트로 카메라·연기·무드를 지시하세요. MORPIO가 영화 디렉터처럼 해석합니다.",
  },
  {
    n: "03",
    title: "Render the fame",
    desc: "수 분 안에 시네마틱 영상 출력. 일관된 정체성으로 시리즈·캠페인·셀러브리티 빌드까지.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">◇ How it works</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
            Three steps. <br /> One <span className="text-accent">moment</span>.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-bg2/60 p-8"
            >
              <div className="w-14 h-14 rounded-full bg-accent text-black font-display text-xl flex items-center justify-center mb-6">
                {s.n}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 tracking-tight">{s.title}</h3>
              <p className="text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

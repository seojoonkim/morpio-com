"use client";
import { motion } from "framer-motion";

const FEATURES = [
  {
    n: "01",
    title: "Image → Video",
    desc: "단 한 장의 이미지에서 살아 움직이는 영상으로. 캐릭터·구도·스타일을 그대로 유지한 채 모션을 부여합니다.",
    accent: "from-accent/30 to-transparent",
  },
  {
    n: "02",
    title: "Virtual Celebrity",
    desc: "당신만의 디지털 셀러브리티를 빌드하세요. 일관된 정체성, 스타일링, 페르소나 — 무한히 출연 가능합니다.",
    accent: "from-neon/30 to-transparent",
  },
  {
    n: "03",
    title: "Cinematic Direction",
    desc: "프롬프트만으로 카메라·조명·무드를 디렉팅. 영화 한 신을 분 단위로 만들어내는 AI 디렉터.",
    accent: "from-fuchsia-500/30 to-transparent",
  },
  {
    n: "04",
    title: "Realtime Iteration",
    desc: "수정하고 즉시 미리보기. 클라이언트 피드백 루프를 시간 단위에서 분 단위로 압축합니다.",
    accent: "from-amber-300/30 to-transparent",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
              ◇ Capabilities
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
              Everything you need <br />
              to <span className="text-accent">make it move</span>.
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-lg">
            한 장의 정지 이미지에서 시작해 글로벌 스타까지. MORPIO는 정체성·모션·연출을 하나의 워크플로우로 잇습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-bg2/60 p-8 md:p-10 hover:border-white/25 transition-colors"
            >
              <div
                className={`absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br ${f.accent} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-display text-white/40 text-sm tracking-widest">
                    {f.n}
                  </span>
                  <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition">
                    →
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
                  {f.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

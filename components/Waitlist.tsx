"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="waitlist" className="relative py-32 md:py-40 overflow-hidden">
      <div className="blob bg-accent/30 w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">◇ Be early</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.03em]">
          Your frame. <br />
          <span className="text-accent glow">Your fame.</span>
        </h2>
        <p className="mt-6 text-white/60 text-lg">
          비공개 베타 초대권을 받아보세요. 매주 한정 슬롯으로 새로운 크리에이터를 모십니다.
        </p>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@studio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={done}
            className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/15 outline-none focus:border-accent placeholder:text-white/40"
          />
          <button
            type="submit"
            disabled={done}
            className="btn-accent justify-center"
          >
            {done ? "✓ You're in" : "Request access"}
          </button>
        </motion.form>
        {done && (
          <p className="mt-5 text-sm text-accent/90">
            초대장이 발송되면 알려드릴게요. From frame to fame — soon.
          </p>
        )}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.19, 1, 0.22, 1] as const;

export default function Hero() {
  return (
    <section
      id="index"
      className="relative pt-40 md:pt-52 lg:pt-56 pb-32 md:pb-44 container-wide"
    >
      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        className="grid grid-cols-12 gap-6 mb-16 md:mb-24"
      >
        <span className="col-span-6 md:col-span-3 meta">[ I — Index ]</span>
        <span className="hidden md:block col-span-6 meta tabular">
          MORPIO · Vol. 01 / Issue 04
        </span>
        <span className="hidden md:block col-span-3 meta text-right">
          Made in Seoul
        </span>
      </motion.div>

      {/* Hero composition: 12-col magazine grid */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
        {/* Headline — 7 cols on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease }}
          className="col-span-12 lg:col-span-7"
        >
          <h1
            className="font-display font-black text-ink"
            style={{
              fontSize: "clamp(60px, 13.5vw, 196px)",
              lineHeight: "0.86",
              letterSpacing: "-0.045em",
            }}
          >
            We turn IP
            <br />
            into <span className="serif-em font-normal">intelligent</span>
            <br />
            media<span className="text-accent">.</span>
          </h1>
        </motion.div>

        {/* Right column — image + caption (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md ml-auto">
            <Image
              src="/gen/hero_v6.webp"
              alt="morpio AI media studio"
              fill
              className="object-cover grayscale"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Hairline frame */}
            <div className="absolute inset-0 border border-ink/10 pointer-events-none" />
            {/* Caption block */}
            <div className="absolute -bottom-8 right-0 text-right">
              <p className="meta">Plate 01 — Studio</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom row: lead, CTA, byline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease }}
        className="grid grid-cols-12 gap-6 md:gap-10 mt-20 md:mt-28 pt-10 md:pt-12 border-t border-line"
      >
        {/* Lead */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <p className="text-ink text-lg md:text-xl leading-[1.45] max-w-md">
            A studio for IP that wants{" "}
            <span className="serif-em">a second life</span>. We take stories that already have fans — novels, comics, webtoons — and rebuild them as living media. Animation that breathes. Celebrities that don&apos;t sleep. Advertising that remembers your name.
          </p>
        </div>

        {/* CTAs */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-3 md:items-start md:justify-end">
          <a
            href="mailto:hello@morpio.com?subject=Bring%20my%20IP"
            className="inline-flex items-center gap-3 text-ink text-[13px] font-medium link-underline"
          >
            <span>Bring your IP</span>
            <span aria-hidden>→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-3 text-ink-muted text-[13px] link-underline"
          >
            <span>See the work</span>
            <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Byline */}
        <div className="col-span-12 md:col-span-3 lg:col-span-4 md:text-right">
          <p className="meta">Made in Seoul</p>
          <p className="font-serif italic text-ink mt-1 text-base">
            Sent to the world
          </p>
        </div>
      </motion.div>
    </section>
  );
}

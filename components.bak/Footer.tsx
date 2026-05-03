"use client";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 sm:px-10 lg:px-20 pt-10 pb-32">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-t border-white/10 pt-8">
        <div>
          <div
            className="text-[14px] tracking-[0.18em] uppercase font-medium"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            MORPIO
          </div>
          <p className="mt-2 text-[12px] tracking-[0.18em] uppercase text-white/35">
            © 2026 morpio studio · all rights reserved
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-[12px] tracking-[0.18em] uppercase text-white/40">
          <a href="#home" className="hover:text-accent transition-colors duration-500">
            Top ↑
          </a>
          <a
            href="mailto:hello@morpio.com"
            className="hover:text-accent transition-colors duration-500"
          >
            hello@morpio.com
          </a>
          <a href="#" className="hover:text-accent transition-colors duration-500">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

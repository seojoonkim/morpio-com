"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

const LINKS = [
  { label: "services", href: "#services" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/morpio.studio" },
  { label: "X", href: "https://x.com/morpiostudio" },
  { label: "Behance", href: "https://behance.net/morpiostudio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/morpio" },
];

/**
 * Menu panel — like pacomepertant's .subwrapper .container
 * - White background, expands from right
 * - Big black links with hover dot
 * - Footer: email + social links (round)
 */
export default function MenuPanel({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="menu-panel"
          className="fixed top-5 right-5 bottom-5 z-40 bg-white text-black overflow-hidden rounded-2xl shadow-2xl"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: "min(640px, calc(100vw - 40px))",
            opacity: 1,
          }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
        >
          <div className="h-full w-full flex flex-col justify-between px-10 lg:px-14 py-20">
            {/* Links */}
            <nav className="flex flex-col gap-3 mt-10">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="group relative flex items-center gap-5 menu-link-text font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.08,
                    duration: 0.5,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                  whileHover={{ x: 8 }}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-black opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-black group-hover:w-full transition-[width] duration-500" />
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="mailto:hello@morpio.com"
                className="text-[18px] font-medium hover:text-black/60 transition-colors duration-500"
              >
                hello@morpio.com
              </a>

              <div className="flex flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-black/15 text-[13px] tracking-wide hover:bg-black hover:text-white transition-colors duration-500"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <p className="text-[11px] tracking-[0.18em] uppercase text-black/40">
                © 2026 morpio studio — from frame to fame.
              </p>
            </motion.div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

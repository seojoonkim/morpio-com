import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative"
      style={{ paddingBlock: "clamp(64px, 10vh, 128px)" }}
    >
      <div className="container-x">
        <Reveal>
          <div
            className="relative bg-bg-surface border border-line-strong rounded-[28px] overflow-hidden"
            style={{ padding: "clamp(32px, 6vw, 64px)" }}
          >
            {/* Lime glow halo */}
            <div
              className="absolute inset-[-20%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 0%, var(--accent-lime-dim), transparent 50%)",
              }}
            />
            {/* Static lime pinpoints */}
            <span
              className="absolute w-[3px] h-[3px] rounded-full bg-accent-lime"
              style={{ top: "12%", left: "18%", boxShadow: "0 0 10px #C5FF3D" }}
            />
            <span
              className="absolute w-[3px] h-[3px] rounded-full bg-accent-lime"
              style={{ top: "72%", left: "8%", boxShadow: "0 0 10px #C5FF3D" }}
            />
            <span
              className="absolute w-[3px] h-[3px] rounded-full bg-accent-lime"
              style={{ top: "30%", left: "88%", boxShadow: "0 0 10px #C5FF3D" }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <SectionLabel index="05" label="CONTACT" trailing="Bring Your IP" />
                <Headline
                  as="h2"
                  text={"Let\u2019s Build the Next Media Universe"}
                  limeIndices={[4]}
                  className="display mt-[18px]"
                  style={{
                    fontSize: "clamp(36px, 11vw, 80px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.025em",
                  }}
                />
                <p
                  className="mt-6 max-w-[48ch] text-ink-secondary"
                  style={{
                    fontSize: "clamp(14px, 3.6vw, 16px)",
                    lineHeight: 1.6,
                  }}
                >
                  If you have IP that wants more lives, write to us. If you
                  have a brand that wants attention worth keeping, write to us.
                  If you just want to argue about what{" "}
                  <span className="serif-em">&ldquo;intelligent media&rdquo;</span>{" "}
                  means — yes, write to us.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3 lg:items-start">
                <Magnetic
                  href="mailto:hello@morpio.com?subject=Start%20a%20Project"
                  className="inline-flex items-center gap-[10px] h-14 px-7 rounded-full bg-accent-lime text-bg-base font-bold text-[0.95rem] transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(197,255,61,0.5)]"
                >
                  Start a Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Magnetic>
                <a
                  href="mailto:hello@morpio.com"
                  className="inline-flex items-center h-14 px-7 rounded-full border border-line-strong text-ink-primary font-medium text-[0.95rem] transition-colors duration-300 hover:border-accent-lime hover:bg-[rgba(197,255,61,0.05)]"
                >
                  hello@morpio.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

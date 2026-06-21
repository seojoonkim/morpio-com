import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const STATS = [
  { label: "Story-First", value: "100%" },
  { label: "AI-Native", value: "100%" },
  { label: "Global-Ready", value: "50+" },
  { label: "Fast Production", value: "10×" },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative"
      style={{ paddingBlock: "clamp(96px, 14vh, 200px)" }}
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left: text */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="03" label="STUDIO" trailing="About morpio" />
            </Reveal>
            <Headline
              as="h2"
              text="We believe IP is infrastructure, talent is software, and advertising is conversation."
              limeIndices={[4]}
              className="display mt-[18px]"
              style={{
                fontSize: "clamp(32px, 9vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            />
            <Reveal>
              <p
                className="mt-6 max-w-[42ch] text-ink-secondary"
                style={{
                  fontSize: "clamp(14px, 3.6vw, 16px)",
                  lineHeight: 1.65,
                }}
              >
                Stories don&apos;t end on the last page anymore. They begin
                there.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center h-14 px-7 rounded-none border border-line-strong text-ink-primary font-medium text-[0.95rem] transition-colors duration-300 hover:border-accent-lime hover:bg-[rgba(197,255,61,0.05)]"
              >
                Learn More About Us
              </a>
            </Reveal>
          </div>

          {/* Right: stats grid */}
          <div className="lg:col-span-7">
            <Reveal stagger>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="bg-bg-surface border border-line rounded-none p-6 transition-colors duration-300 hover:border-line-strong"
                  >
                    <span className="mono text-[0.62rem] tracking-[0.25em] uppercase lime block mb-4">
                      {s.label}
                    </span>
                    <div
                      className="display"
                      style={{
                        fontSize: "clamp(36px, 10vw, 56px)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

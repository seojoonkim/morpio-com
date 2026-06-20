import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const STATS = [
  {
    label: "Story-First",
    value: "100%",
    body: "We start with powerful stories and meaningful connections.",
  },
  {
    label: "AI-Native",
    value: "100%",
    body: "Built with AI at the core to unlock speed, scale, and imagination.",
  },
  {
    label: "Global-Ready",
    value: "50+",
    body: "Projects across markets and languages.",
  },
  {
    label: "Fast Production",
    value: "10×",
    body: "Faster from concept to final content delivery.",
  },
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
              <SectionLabel index="04" label="STUDIO" trailing="About morpio" />
            </Reveal>
            <Headline
              as="h2"
              text="morpio is a new-generation AI media company at the intersection of IP, virtual talent, and advertising."
              limeIndices={[3]}
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
                We believe great stories deserve new forms — and AI helps us
                create them faster, better, and bolder.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center h-14 px-7 rounded-full border border-line-strong text-ink-primary font-medium text-[0.95rem] transition-colors duration-300 hover:border-accent-lime hover:bg-[rgba(197,255,61,0.05)]"
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
                    className="bg-bg-surface border border-line rounded-[20px] p-6 transition-colors duration-300 hover:border-line-strong"
                  >
                    <span className="mono text-[0.62rem] tracking-[0.25em] uppercase lime block mb-4">
                      {s.label}
                    </span>
                    <div
                      className="display mb-3"
                      style={{
                        fontSize: "clamp(36px, 10vw, 56px)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <p
                      className="text-ink-secondary"
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.body}
                    </p>
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

import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Map the IP",
    body: "We read the canon, fandom, characters, and expansion surface before choosing the first format to prototype.",
    tags: ["Canon", "Audience", "Brief"],
  },
  {
    n: "02",
    title: "Design the System",
    body: "Visual language, character logic, voice, and tone are locked into a reusable world bible before production scales.",
    tags: ["World Bible", "Character Logic"],
  },
  {
    n: "03",
    title: "Generate & Edit",
    body: "AI pipelines create rapid variations; human direction keeps story, taste, and continuity in control.",
    tags: ["AI Pipeline", "Human Edit"],
  },
  {
    n: "04",
    title: "Launch the Prototype",
    body: "We ship a real piece first — teaser, character drop, or campaign module — then scale what proves alive.",
    tags: ["Prototype", "Launch"],
  },
] as const;

export default function Process() {
  return (
    <section
      id="process"
      className="relative"
      style={{ paddingBlock: "clamp(96px, 14vh, 200px)" }}
    >
      <div className="container-x">
        <Reveal>
          <div className="mb-10 md:mb-[72px] max-w-[720px]">
            <SectionLabel index="02" label="METHOD" trailing="Our Process" />
            <Headline
              as="h2"
              text="From Brief to Launch."
              limeIndices={[3]}
              className="display mt-[18px]"
              style={{
                fontSize: "clamp(36px, 8vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
              }}
            />
          </div>
        </Reveal>

        <Reveal stagger>
          <div
            className="bg-bg-surface border border-line rounded-none"
            style={{ padding: "clamp(24px, 5vw, 48px)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((s, i) => (
                <div key={s.n} className="relative">
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:block absolute top-0 right-[-16px] w-px h-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, var(--line), transparent)",
                      }}
                    />
                  )}
                  <span
                    className="display block lime proc-num mb-4"
                    style={{
                      fontSize: "clamp(48px, 10vw, 80px)",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </span>
                  <h4
                    className="display mb-3"
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(20px, 5vw, 24px)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="text-ink-secondary mb-4"
                    style={{
                      fontSize: "clamp(13px, 3.4vw, 14px)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-[6px]">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[0.6rem] py-1 px-[9px] border border-line rounded-none text-ink-secondary tracking-[0.08em]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-8 border border-line bg-[rgba(197,255,61,0.03)] p-5 md:p-6">
            <p className="mono text-[0.68rem] tracking-[0.22em] uppercase lime mb-2">
              Prototype-first production
            </p>
            <p className="display text-ink-primary" style={{ fontSize: "clamp(22px, 5vw, 36px)", lineHeight: 1.05 }}>
              Tomorrow&apos;s franchises, tonight&apos;s prototypes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

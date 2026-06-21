import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover the Brief",
    body: "We read your IP like editors, not vendors. The right opening matters more than the loudest one.",
    tags: ["Research", "Strategy"],
  },
  {
    n: "02",
    title: "Design the World",
    body: "Characters, plots, and visual rules — drafted, prototyped, iterated. Worlds that stay coherent at scale.",
    tags: ["Story", "Design"],
  },
  {
    n: "03",
    title: "Generate the Work",
    body: "Animation, voice, image, and motion produced with AI tools we tune ourselves. Quality stays human.",
    tags: ["AI Production", "Content"],
  },
  {
    n: "04",
    title: "Deliver the Launch",
    body: "We ship across feed, screen, and channel — with the metrics that matter and the polish that doesn\u2019t beg.",
    tags: ["Distribution", "Growth"],
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
            className="bg-bg-surface border border-line rounded-3xl"
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
                    className="display block lime mb-4"
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
                        className="mono text-[0.6rem] py-1 px-[9px] border border-line rounded-full text-ink-secondary tracking-[0.08em]"
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
      </div>
    </section>
  );
}

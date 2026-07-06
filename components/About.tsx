import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const BELIEFS = [
  {
    title: "IP is infrastructure",
    body: "A story with canon, characters, and fandom is not just content. It is a base layer for animation, characters, campaigns, and formats that can keep expanding.",
  },
  {
    title: "Talent is software",
    body: "Virtual performers are not one-off avatars. They are repeatable media systems: persona, voice, visual rules, content rhythm, and audience memory.",
  },
  {
    title: "Advertising is conversation",
    body: "The strongest campaigns do not interrupt culture. They give audiences a character, world, or format they can respond to and recognize again.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative" style={{ paddingBlock: "clamp(96px, 14vh, 200px)" }}>
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="04" label="STUDIO" trailing="About morpio" />
            </Reveal>
            <Headline
              as="h2"
              text="IP becomes media systems."
              limeIndices={[3]}
              className="display mt-[18px]"
              style={{ fontSize: "clamp(36px, 9vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.025em" }}
            />
            <Reveal>
              <p className="mt-6 max-w-[44ch] text-ink-secondary" style={{ fontSize: "clamp(14px, 3.6vw, 16px)", lineHeight: 1.65 }}>
                MORPIO is an AI media lab incubated by Hashed. We help IP owners and brands turn story worlds into animation, virtual talent, and adaptive creative systems.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center h-14 px-7 rounded-none border border-line-strong text-ink-primary font-medium text-[0.95rem] transition-colors duration-300 hover:border-accent-lime hover:bg-[rgba(197,255,61,0.05)]"
              >
                Talk to the Lab
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal stagger>
              <div className="grid grid-cols-1 gap-4">
                {BELIEFS.map((b, i) => (
                  <article key={b.title} className="bg-bg-surface border border-line rounded-none p-6 transition-colors duration-300 hover:border-line-strong">
                    <span className="mono text-[0.62rem] tracking-[0.25em] uppercase lime block mb-4">
                      {String(i + 1).padStart(2, "0")} / Belief
                    </span>
                    <h3 className="display text-ink-primary mb-3" style={{ fontSize: "clamp(24px, 5vw, 34px)", lineHeight: 1.05 }}>
                      {b.title}
                    </h3>
                    <p className="text-ink-secondary" style={{ fontSize: "clamp(14px, 3.6vw, 16px)", lineHeight: 1.65 }}>
                      {b.body}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

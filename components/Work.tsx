import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const PIECES = [
  { title: "Babylon Is Burning", kind: "Concept Film", image: "/thumbs/babylon-is-burning.webp" },
  { title: "Chromatik", kind: "Visual Study", image: "/thumbs/chromatik.webp" },
  { title: "Digital Travel", kind: "World Sketch", image: "/thumbs/digital-travel.webp" },
  { title: "Jupiter", kind: "Concept Film", image: "/thumbs/jupiter.webp" },
  { title: "Paths of Life", kind: "Motion Study", image: "/thumbs/paths-of-life.webp" },
  { title: "The Purity Revealed", kind: "Visual Study", image: "/thumbs/the-purity-revealed.webp" },
] as const;

export default function Work() {
  return (
    <section id="work" className="relative" style={{ paddingBlock: "clamp(96px, 14vh, 200px)" }}>
      <div className="container-x">
        <Reveal>
          <div className="mb-10 md:mb-[72px] max-w-[760px]">
            <SectionLabel index="03" label="LAB" trailing="Original Concept Work" />
            <Headline
              as="h2"
              text="Made in the Lab."
              limeIndices={[3]}
              className="display mt-[18px]"
              style={{ fontSize: "clamp(36px, 8vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.025em" }}
            />
            <p className="mt-6 max-w-[56ch] text-ink-secondary" style={{ fontSize: "clamp(14px, 3.6vw, 16px)", lineHeight: 1.6 }}>
              Original concepts, world sketches, and motion studies produced in-house — this is lab work, not client work. It&apos;s how we test the pipeline before pointing it at your IP.
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PIECES.map((p, i) => (
              <figure
                key={p.title}
                className="group relative bg-bg-surface border border-line rounded-none overflow-hidden transition-transform duration-300 ease-snap hover:-translate-y-2 hover:border-line-strong"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 ease-snap group-hover:scale-105">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={`${p.title} — original MORPIO concept work`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.82) 100%)" }} />
                  <span className="absolute top-4 left-4 mono text-[0.62rem] tracking-[0.25em] lime">
                    {String(i + 1).padStart(2, "0")} / LAB ORIGINAL
                  </span>
                </div>
                <figcaption className="relative flex items-center justify-between gap-3 p-5 border-t border-line">
                  <span className="display" style={{ fontWeight: 700, fontSize: "clamp(16px, 4vw, 20px)", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </span>
                  <span className="mono text-[0.6rem] py-1 px-[9px] border border-line rounded-none text-ink-secondary tracking-[0.08em] uppercase whitespace-nowrap">
                    {p.kind}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 mono text-[0.68rem] tracking-[0.2em] uppercase text-ink-muted">
            All pieces above are in-house lab concepts — no client commissions shown.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

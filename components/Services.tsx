import SectionLabel from "./SectionLabel";
import Headline from "./Headline";
import Reveal from "./Reveal";

const SERVICES = [
  {
    idx: "01 / KINETIC IP",
    title: "Animation",
    body: "Novels, comics, and webtoons reborn as motion. Your IP, finally rendered at the speed of imagination.",
    tags: ["Animation", "IP Adaptation", "Storyboard"],
    image: "/gen/svc-animation.png",
  },
  {
    idx: "02 / SYNTHETIC TALENT",
    title: "Virtual Celebs",
    body: "We design characters who tour, post, perform, and never miss a comeback. Studio, agency, and faithful fanbase included.",
    tags: ["Virtual Talent", "IP Building", "Agency"],
    image: "/gen/svc-virtualcelebs.png",
  },
  {
    idx: "03 / INTELLIGENT REACH",
    title: "Advertising",
    body: "AI-native ad creative that adapts in the wild — by audience, channel, and mood. Made for brands that refuse to send the same ad twice.",
    tags: ["Campaigns", "Brand Films", "Performance"],
    image: "/gen/svc-advertising.png",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative"
      style={{ paddingBlock: "clamp(96px, 14vh, 200px)" }}
    >
      <div className="container-x">
        <Reveal>
          <div className="mb-10 md:mb-[72px] max-w-[720px]">
            <SectionLabel index="01" label="PRACTICE" trailing="Our Core Businesses" />
            <Headline
              as="h2"
              text="Three Businesses. One Creative Engine."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <article
                key={s.idx}
                className="group relative bg-bg-surface border border-line rounded-[20px] overflow-hidden transition-transform duration-300 ease-snap hover:-translate-y-2 hover:border-line-strong"
              >
                {/* Card visual — wrapper holds hover scale, img holds idle Ken Burns */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  <div className="absolute inset-0 transition-transform duration-700 ease-snap group-hover:scale-105">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.title}
                      className={`absolute inset-0 w-full h-full object-cover svc-pan svc-pan-${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.85) 100%)",
                    }}
                  />
                  <span className="absolute top-4 left-4 mono text-[0.7rem] tracking-[0.25em] lime">
                    {s.idx}
                  </span>
                </div>
                {/* Hover lime wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 0%, var(--accent-lime-dim), transparent 60%)",
                  }}
                />
                <div className="relative p-8">
                <h3
                  className="display relative"
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(22px, 5.5vw, 30px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="relative text-ink-secondary"
                  style={{
                    fontSize: "clamp(13px, 3.4vw, 15px)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {s.body}
                </p>
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="mono text-[0.62rem] py-[5px] px-[10px] border border-line rounded-full text-ink-secondary tracking-[0.08em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="relative flex items-center justify-between pt-5 border-t border-line">
                  <span className="mono text-[0.68rem] tracking-[0.2em] uppercase lime">
                    Learn More
                  </span>
                  <span className="w-10 h-10 border border-line rounded-full grid place-items-center transition-colors duration-300 group-hover:border-accent-lime group-hover:bg-[rgba(197,255,61,0.08)]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

const LINKS = [
  { label: "Why", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#system" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const anchor = section.querySelector<HTMLElement>(".kicker") ?? section;
    const headerHeight = document.querySelector<HTMLElement>(".site-nav")?.getBoundingClientRect().height ?? 0;
    const breathingRoom = window.innerWidth <= 900 ? 52 : 64;
    const top = window.scrollY + anchor.getBoundingClientRect().top - headerHeight - breathingRoom;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <header className="site-nav">
      <a className="nav-logo" href="#top" aria-label="Morpio home" onClick={(event) => scrollToSection(event, "#top")}>morpio<span>.</span></a>
      <nav aria-label="Primary navigation">
        {LINKS.map((link) => <a key={link.href} href={link.href} onClick={(event) => scrollToSection(event, link.href)}>{link.label}</a>)}
      </nav>
    </header>
  );
}

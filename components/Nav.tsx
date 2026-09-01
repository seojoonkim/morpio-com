"use client";

const LINKS = [
  { label: "Why", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "System", href: "#system" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

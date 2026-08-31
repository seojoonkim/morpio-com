const LINKS = [
  { label: "Why", href: "#why" },
  { label: "System", href: "#system" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  return (
    <header className="site-nav">
      <a className="nav-logo" href="#top" aria-label="Morpio home">morpio<span>.</span></a>
      <nav aria-label="Primary navigation">
        {LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="nav-contact" href="#contact">Get in touch <span>↗</span></a>
    </header>
  );
}

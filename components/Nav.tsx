const LINKS = [
  { label: "Why", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "System", href: "#system" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="site-nav">
      <a className="nav-logo" href="#top" aria-label="Morpio home">morpio<span>.</span></a>
      <nav aria-label="Primary navigation">
        {LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <span className="nav-status" aria-hidden="true">SEOUL / 2026</span>
    </header>
  );
}

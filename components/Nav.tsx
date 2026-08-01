const LINKS = [
  { label: "Morph", href: "#morph" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#about" },
];

export default function Nav() {
  return <header className="site-nav">
    <a className="nav-logo" href="#top">morpio<span>.</span></a>
    <nav aria-label="Primary navigation">
      {LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      <a href="#contact">Get in touch</a>
    </nav>
  </header>;
}

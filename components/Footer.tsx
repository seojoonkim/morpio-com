export default function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="footer-logo" href="#top">morpio<span>.</span></a>
      <p>SEOUL, KOREA <span aria-hidden="true">·</span> © {new Date().getFullYear()} MORPIO</p>
    </footer>
  );
}

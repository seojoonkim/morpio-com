export default function CtaBanner() {
  return (
    <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
      <p className="kicker kicker-light"><span className="signal-dot" />CONTACT / MORPIO</p>
      <h2 id="contact-title">HAVE A WORLD THAT<br />SHOULD BE ANIMATED?</h2>
      <a className="contact-email" href="mailto:hello@morpio.com">hello@morpio.com <span>↗</span></a>
      <div className="contact-paths" aria-label="Partnership contact paths">
        <a className="contact-path" href="mailto:hello@morpio.com?subject=IP%20Partnership">
          <strong>FOR IP HOLDERS</strong>
          <span>Tell us about the world, the source material, and where you want it to go.</span>
        </a>
        <a className="contact-path" href="mailto:hello@morpio.com?subject=Distribution%20Partnership">
          <strong>FOR DISTRIBUTORS &amp; PLATFORMS</strong>
          <span>Tell us what your audience needs, the market, and the format.</span>
        </a>
      </div>
    </section>
  );
}

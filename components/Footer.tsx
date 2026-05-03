export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg text-white">
            MORPIO<span className="text-accent">.</span>
          </span>
          <span className="text-white/30">— From frame to fame.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Discord</a>
          <a href="mailto:hi@morpio.com" className="hover:text-white">Contact</a>
        </div>
        <p className="text-white/30 text-xs">© 2026 MORPIO Inc.</p>
      </div>
    </footer>
  );
}

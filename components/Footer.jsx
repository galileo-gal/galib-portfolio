export default function Footer() {
  return (
    <footer className="border-t border-ink-line mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted font-mono">
        <span>Galib — Dhaka, Bangladesh</span>
        <div className="flex gap-5">
          <a href="https://github.com/galileo-gal" className="hover:text-paper transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

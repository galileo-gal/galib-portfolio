import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="border-b border-ink-line">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-paper">
          Galib
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 font-mono text-sm text-muted">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

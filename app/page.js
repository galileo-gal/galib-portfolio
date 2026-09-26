import Link from "next/link";
import { projects } from "../lib/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="font-mono text-sm text-mark mb-6">Data & ML Engineering</p>
        <h1 className="font-serif text-4xl sm:text-6xl leading-[1.1] text-paper max-w-3xl">
          I build systems that turn messy, real-world data into decisions.
        </h1>
        <p className="mt-8 max-w-prose text-muted text-lg leading-relaxed">
          Computer Science &amp; Engineering student at North South University, working across
          computer vision, multimodal ML, and full-stack data systems — with a working
          background in payroll and billing operations that keeps the engineering grounded
          in real, high-stakes data.
        </p>
        <div className="mt-10 flex gap-4 font-mono text-sm">
          <Link
            href="/projects"
            className="border border-mark text-mark px-5 py-2.5 hover:bg-mark hover:text-ink transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="border border-ink-line text-paper px-5 py-2.5 hover:border-paper transition-colors"
          >
            About
          </Link>
        </div>
      </section>

      <section className="border-t border-ink-line">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif text-2xl text-paper">Selected work</h2>
            <Link href="/projects" className="font-mono text-sm text-muted hover:text-mark transition-colors">
              All projects
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-ink-line">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="bg-ink p-6 hover:bg-ink-soft transition-colors flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <p className="font-mono text-xs text-mark mb-3">{p.tag}</p>
                  <h3 className="font-serif text-xl text-paper mb-3">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.summary}</p>
                </div>
                <p className="font-mono text-xs text-muted mt-6">{p.year}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

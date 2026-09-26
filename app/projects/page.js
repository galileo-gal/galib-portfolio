import Link from "next/link";
import { projects } from "../../lib/projects";

export const metadata = { title: "Projects — Galib" };

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-mark mb-4">Projects</p>
      <h1 className="font-serif text-4xl text-paper mb-12">Selected work</h1>

      <div className="divide-y divide-ink-line border-t border-b border-ink-line">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6 hover:bg-ink-soft transition-colors px-2 -mx-2"
          >
            <div>
              <h2 className="font-serif text-xl text-paper group-hover:text-mark transition-colors">
                {p.title}
              </h2>
              <p className="text-sm text-muted mt-1">{p.summary}</p>
            </div>
            <span className="font-mono text-xs text-muted shrink-0">{p.tag}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

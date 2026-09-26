import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Galib` : "Project — Galib" };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/projects" className="font-mono text-sm text-muted hover:text-mark transition-colors">
        ← All projects
      </Link>

      <p className="font-mono text-sm text-mark mt-8 mb-4">{project.tag}</p>
      <h1 className="font-serif text-4xl sm:text-5xl text-paper mb-6">{project.title}</h1>
      <p className="max-w-prose text-lg text-muted leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mt-8">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-xs text-muted border border-ink-line px-3 py-1">
            {s}
          </span>
        ))}
      </div>

      <div className="max-w-prose mt-12 space-y-5">
        {project.body.map((para, i) => (
          <p key={i} className="text-paper/90 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-12 flex gap-4 font-mono text-sm">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border border-mark text-mark px-5 py-2.5 hover:bg-mark hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

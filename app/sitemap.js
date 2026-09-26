import { projects } from "../lib/projects";

export default function sitemap() {
  const base = "https://galib-portfolio-taupe.vercel.app";

  const staticRoutes = ["", "/projects", "/certifications", "/about"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}

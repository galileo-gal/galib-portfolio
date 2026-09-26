import GithubStats from "../../components/GithubStats";

export const metadata = { title: "About — Galib" };

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-mark mb-4">About</p>
      <h1 className="font-serif text-4xl text-paper mb-10">Galib</h1>

      <div className="max-w-prose space-y-5 text-paper/90 leading-relaxed">
        <p>
          I&apos;m a Computer Science &amp; Engineering student at North South University,
          working across computer vision, multimodal machine learning, and full-stack data
          systems. My coursework and side projects span disease diagnosis from sensor and
          image data, speech recognition for low-resource languages, and applications built
          on the kind of data pipelines that have to be trustworthy, not just accurate.
        </p>
        <p>
          Alongside that, I work in payroll and billing operations, handling real
          production data from systems like HHAeXchange, Viventium, and ADP. That
          day-to-day grounding — regulatory detail, reconciliation, the cost of a wrong
          number — is part of what shapes how I approach engineering: build for the data
          as it actually is, not as it would be in a clean tutorial dataset.
        </p>
        <p>
          I currently chair the IEEE NSU Student Branch, having come up through Treasurer
          and Vice Chair roles, and run Galileo&apos;s Pen, a tutoring initiative.
        </p>
      </div>

      <div className="mt-14 max-w-prose">
        <p className="font-mono text-sm text-mark mb-4">Live from GitHub</p>
        <GithubStats />
      </div>

      <div className="mt-12 font-mono text-sm">
        <a
          href="https://github.com/galileo-gal"
          className="border border-mark text-mark px-5 py-2.5 hover:bg-mark hover:text-ink transition-colors inline-block"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

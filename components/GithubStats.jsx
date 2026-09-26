"use client";

import { useEffect, useState } from "react";

export default function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-stats")
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json.error) setError(true);
        else setData(json);
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return null;

  if (!data) {
    return (
      <div className="grid grid-cols-3 gap-px bg-ink-line animate-pulse">
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-ink h-20" />
        ))}
      </div>
    );
  }

  const stats = [
    { label: "Public repos", value: data.publicRepos },
    { label: "Followers", value: data.followers },
    { label: "Following", value: data.following },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-px bg-ink-line mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-ink p-5 text-center">
            <p className="font-serif text-3xl text-paper">{s.value}</p>
            <p className="font-mono text-xs text-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {data.recentRepos?.length > 0 && (
        <div>
          <p className="font-mono text-xs text-mark mb-3">Recently updated</p>
          <div className="divide-y divide-ink-line border-t border-b border-ink-line">
            {data.recentRepos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-3 hover:bg-ink-soft transition-colors px-2 -mx-2"
              >
                <span className="font-mono text-sm text-paper">{r.name}</span>
                <span className="font-mono text-xs text-muted">
                  {r.language ? `${r.language} · ` : ""}★ {r.stars}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

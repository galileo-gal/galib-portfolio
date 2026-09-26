const GITHUB_USERNAME = "galileo-gal";

export async function GET() {
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    return Response.json({
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      recentRepos: repos.map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        stars: r.stargazers_count,
        language: r.language,
        updatedAt: r.updated_at,
      })),
    });
  } catch (err) {
    return Response.json(
      { error: "Unable to fetch GitHub stats right now." },
      { status: 502 }
    );
  }
}

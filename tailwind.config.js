/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--color-bg)",
          soft: "var(--color-surface)",
          line: "var(--color-line)",
        },
        paper: "var(--color-fg)",
        mark: "var(--color-mark)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        serif: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

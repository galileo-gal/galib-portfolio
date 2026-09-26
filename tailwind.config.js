/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12151B",
          soft: "#1B2029",
          line: "#2A303C",
        },
        paper: "#EFEBE2",
        mark: "#C9A227",
        muted: "#8A8F9B",
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

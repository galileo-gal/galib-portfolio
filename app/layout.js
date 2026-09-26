import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://galib-portfolio-taupe.vercel.app"),
  title: {
    default: "Galib — Portfolio",
    template: "%s",
  },
  description: "Data engineering, applied ML, and systems work by Galib.",
  openGraph: {
    title: "Galib — Portfolio",
    description: "Data engineering, applied ML, and systems work by Galib.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

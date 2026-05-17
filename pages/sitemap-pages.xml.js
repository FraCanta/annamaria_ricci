// pages/sitemap-pages.xml.js
import percorsiIT from "@/public/locales/it/percorsi.json";

const siteUrl = "https://www.annamariaricci.eu";
const staticPages = [
  "",
  "chi-sono",
  "i-miei-strumenti",
  "tutti-i-percorsi",
  "respiro-circolare-consapevole",
  "blog",
  "contatti",
  "prenota-la-tua-consulenza",
  "privacy-policy",
  "cookie-policy",
  "accessibilita",
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizeUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return escapeXml(`${siteUrl}${encodeURI(normalizedPath)}`);
}

function getPercorsiPages() {
  return (
    percorsiIT?.percorsi?.tabs?.flatMap((tab) =>
      tab.content.map((item) => item.link)
    ) ?? []
  );
}

function renderUrl({ loc, changefreq = "monthly", priority = "0.8" }) {
  return `
  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generatePagesSitemap() {
  const percorsiPages = getPercorsiPages();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const path = page ? `/${page}` : "";
      return renderUrl({
        loc: normalizeUrl(path || "/"),
        changefreq: page ? "monthly" : "weekly",
        priority: page ? "0.8" : "1.0",
      });
    })
    .join("")}
  ${percorsiPages
    .map((path) =>
      renderUrl({
        loc: normalizeUrl(path),
        changefreq: "monthly",
        priority: "0.8",
      })
    )
    .join("")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(generatePagesSitemap());
  res.end();

  return { props: {} };
}

export default function PagesSitemap() {
  return null;
}

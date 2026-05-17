// pages/sitemap.xml.js
const siteUrl = "https://www.annamariaricci.eu";

function renderSitemap({ loc }) {
  return `
  <sitemap>
    <loc>${loc}</loc>
  </sitemap>`;
}

function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[
    `${siteUrl}/sitemap-pages.xml`,
    `${siteUrl}/sitemap-posts.xml`,
  ]
    .map((loc) => renderSitemap({ loc }))
    .join("")}
</sitemapindex>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(generateSitemapIndex());
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}

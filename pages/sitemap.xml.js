// pages/sitemap.xml.js
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";
import { format } from "date-fns";

const siteUrl = "https://annamariaricci.eu";

function escapeXml(string) {
  // Sostituisce i caratteri speciali con entità XML
  return string
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/chi-sono</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/i-miei-strumenti</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/tutti-i-percorsi</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/tutti-i-percorsi/privati/trova-la-tua-direzione</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/tutti-i-percorsi/privati/cambia-e-trova-la-tua-strada-nel-lavoro</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/tutti-i-percorsi/privati/trova-il-lavoro-che-desideri</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/tutti-i-percorsi/privati/trova-le-tue-radici</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${siteUrl}/contatti</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  ${posts
    .map(({ node }) => {
      const lastMod = new Date(node.modified || node.date);
      const isoDate = format(lastMod, "yyyy-MM-dd"); // formato corretto per sitemap
      const slug = encodeURIComponent(node.slug); // gestisce caratteri speciali
      return `
  <url>
    <loc>${siteUrl}/posts/${slug}</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
    })
    .join("")}

</urlset>`;
}

function SiteMap() {
  // getServerSideProps gestisce tutto
}

export async function getServerSideProps({ res }) {
  const data = await client.request(GET_POSTS_FOR_SITEMAP);
  const posts = data?.posts?.edges || [];

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;

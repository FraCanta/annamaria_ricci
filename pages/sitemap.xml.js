// pages/sitemap.xml.js
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";

const url = "https://annamariaricci.eu";

// Lista pagine statiche
const staticPages = [
  "/",
  "/chi-sono",
  "/i-miei-strumenti",
  "/tutti-i-percorsi",
  "/respiro-circolare-consapevole",
  "/blog",
  "/contatti",
];

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (path) => `
        <url>
          <loc>${url}${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>`
        )
        .join("")}
      ${posts
        .map(({ node }) => {
          return `
        <url>
          <loc>${url}${node.uri}</loc>
          <lastmod>${new Date(
            node.modified || node.date
          ).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
        })
        .join("")}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  // Recupera i post da WP
  const data = await client.request(GET_POSTS_FOR_SITEMAP);
  const posts = data?.posts?.edges || [];

  // Genera la sitemap con statiche + post dinamici
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}

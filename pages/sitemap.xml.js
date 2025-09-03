// pages/sitemap.xml.js
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";

const siteUrl = "https://www.annamariaricci.eu";

function generateSiteMap(posts) {
  // Rimuoviamo duplicati e codifichiamo URI
  const postUrls = posts
    .map(({ node }) => ({
      loc: `${siteUrl}/posts${encodeURI(node.uri)}`,
      lastmod: new Date(node.date).toISOString(),
    }))
    .filter((v, i, a) => a.findIndex((x) => x.loc === v.loc) === i); // elimina duplicati

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

  ${postUrls
    .map(
      ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`
    )
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

  res.setHeader("Content-Type", "application/xml"); // ⚡ modificato
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

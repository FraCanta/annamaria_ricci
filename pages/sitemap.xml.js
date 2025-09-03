// pages/sitemap.xml.js
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";

const siteUrl = "https://annamariaricci.eu";

function generateSiteMap(posts) {
  console.log(posts);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 

  <url>
    <loc>https://annamariaricci.eu/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://annamariaricci.eu/chi-sono</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://annamariaricci.eu/i-miei-strumenti</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://annamariaricci.eu/tutti-i-percorsi</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://annamariaricci.eu/tutti-i-percorsi/privati/trova-la-tua-direzione</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
    <url>
    <loc>https://annamariaricci.eu/tutti-i-percorsi/privati/cambia-e-trova-la-tua-strada-nel-lavoro</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  

  <url>
    <loc>https://annamariaricci.eu/tutti-i-percorsi/privati/trova-il-lavoro-che-desideri</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://annamariaricci.eu/tutti-i-percorsi/privati/trova-le-tue-radici</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://annamariaricci.eu/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://annamariaricci.eu/contatti</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  ${posts
    .map(({ node }) => {
      const lastMod = new Date(node.date);
      const isoDate = lastMod.toISOString();
      return `
  <url>
    <loc>${siteUrl}/posts/${node.slug}</loc>
              <lastmod>${`${isoDate}`}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
    })
    .join("")}

</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const data = await client.request(GET_POSTS_FOR_SITEMAP);

  const posts = data?.posts?.edges || [];

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

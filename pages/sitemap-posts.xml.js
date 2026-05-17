// pages/sitemap-posts.xml.js
import { format } from "date-fns";
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";

const siteUrl = "https://www.annamariaricci.eu";

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

function renderUrl({ loc, lastmod, changefreq = "weekly", priority = "0.5" }) {
  return `
  <url>
    <loc>${loc}</loc>${
    lastmod
      ? `
    <lastmod>${lastmod}</lastmod>`
      : ""
  }
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generatePostsSitemap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts
    .map(({ node }) => {
      const lastMod = new Date(node.modified || node.date);
      const isoDate = format(lastMod, "yyyy-MM-dd");
      return renderUrl({
        loc: normalizeUrl(`/posts/${node.slug}`),
        lastmod: isoDate,
      });
    })
    .join("")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  let posts = [];

  try {
    const data = await client.request(GET_POSTS_FOR_SITEMAP);
    posts = data?.posts?.edges || [];
  } catch (error) {
    console.error("Unable to fetch posts for sitemap-posts.xml", error);
  }

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(generatePostsSitemap(posts));
  res.end();

  return { props: {} };
}

export default function PostsSitemap() {
  return null;
}

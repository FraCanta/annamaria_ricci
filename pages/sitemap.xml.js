// pages/sitemap.xml.js
import { client } from "@/utils/graphql";
import { GET_POSTS_FOR_SITEMAP } from "@/utils/queries";
import percorsiIT from "@/public/locales/it/percorsi.json";
import { format } from "date-fns";

const siteUrl = "https://annamariaricci.eu";
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

function renderUrl({ loc, lastmod, changefreq = "monthly", priority = "0.8" }) {
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

function generateSiteMap(posts) {
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

  ${posts
    .map(({ node }) => {
      const lastMod = new Date(node.modified || node.date);
      const isoDate = format(lastMod, "yyyy-MM-dd"); // formato corretto per sitemap
      return renderUrl({
        loc: normalizeUrl(`/posts/${node.slug}`),
        lastmod: isoDate,
        changefreq: "weekly",
        priority: "0.5",
      });
    })
    .join("")}

</urlset>`;
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

export default function SiteMap() {
  return null;
}

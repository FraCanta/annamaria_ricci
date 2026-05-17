import { generateSitemap, getPostsForSitemap } from "@/lib/sitemap";

export async function getServerSideProps({ res }) {
  const posts = await getPostsForSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(generateSitemap(posts));
  res.end();

  return { props: {} };
}

export default function MainSitemap() {
  return null;
}

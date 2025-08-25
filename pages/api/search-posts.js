// pages/api/search-posts.js
import { client } from "@/utils/graphql";
import { SEARCH_POSTS } from "@/utils/queries";

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(200).json({ posts: [] });
  }

  try {
    const data = await client.request(SEARCH_POSTS, { search: q });
    const posts = data.posts.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      slug: node.uri,
      excerpt: node.excerpt,
    }));

    res.status(200).json({ posts });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Errore nella ricerca" });
  }
}

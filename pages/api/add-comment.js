export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { postId, content, authorName, authorEmail, parent } = req.body;

  if (!postId || !content || !authorName || !authorEmail) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const mutation = `
    mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        comment {
          id
          databaseId
          content
          dateGmt
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          parentId
        }
      }
    }
  `;

  const variables = {
    input: {
      commentOn: parseInt(postId, 10),
      content,
      authorName, // ✅ fix
      authorEmail, // ✅
      parent,
      status: "APPROVE",
    },
  };

  try {
    const response = await fetch(process.env.WORDPRESS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ⚠️ Se i commenti devono essere pubblici non serve token.
        // Se invece usi JWT o Application Password, mantieni l'Authorization.
        Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const result = await response.json();
    console.log("GraphQL response:", result);

    if (result.errors) {
      return res
        .status(500)
        .json({ message: "GraphQL Error", errors: result.errors });
    }

    return res.status(200).json({ comment: result.data.createComment.comment });
  } catch (error) {
    console.error("Server error:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
}

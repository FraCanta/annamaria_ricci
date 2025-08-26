import { client } from "@/utils/graphql";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo non consentito" });
  }

  const { postId, content, authorName, authorEmail } = req.body;

  if (!postId || !content || !authorName || !authorEmail) {
    return res.status(400).json({ message: "Tutti i campi sono obbligatori" });
  }

  if (!isValidEmail(authorEmail)) {
    return res.status(400).json({ message: "Email non valida" });
  }

  try {
    const mutation = `
      mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
          comment {
            id
            content
            date
            author {
              node {
                name
              }
            }
          }
        }
      }
    `;

    const variables = {
      input: {
        content,
        author: authorName, // nome dell'autore
        authorEmail,
        status: "APPROVE",
      },
    };

    console.log("Invio commento:", variables.input);

    console.log("Invio commento:", variables.input);

    const response = await client.request(mutation, variables);

    if (!response?.createComment?.comment) {
      return res
        .status(500)
        .json({ message: "Errore nella creazione del commento" });
    }

    return res.status(200).json(response.createComment.comment);
  } catch (err) {
    console.error("Errore add-comment.js:", err.response?.errors || err);
    return res
      .status(500)
      .json({ message: "Errore server", error: err.message });
  }
}

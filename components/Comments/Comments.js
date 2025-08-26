// components/Comments/Comments.js
import React, { useState } from "react";
import md5 from "md5";

export default function Comments({ post }) {
  console.log("Post:", post);
  const [comments, setComments] = useState(post.comments?.nodes || []);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", comment: "" });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ name: "", email: "", comment: "" });

    let hasError = false;
    const newErrors = { name: "", email: "", comment: "" };

    if (!authorName.trim()) {
      newErrors.name = "Il nome è obbligatorio";
      hasError = true;
    }
    if (!authorEmail.trim()) {
      newErrors.email = "L'email è obbligatoria";
      hasError = true;
    } else if (!isValidEmail(authorEmail)) {
      newErrors.email = "Email non valida";
      hasError = true;
    }
    if (!newComment.trim()) {
      newErrors.comment = "Il commento non può essere vuoto";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/add-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post.id,
          content: newComment,
          authorName,
          authorEmail,
        }),
      });

      const savedComment = await res.json();

      if (!res.ok) {
        setErrors((prev) => ({ ...prev, comment: savedComment.message }));
        return;
      }

      setComments([...comments, savedComment]);
      setNewComment("");
      setAuthorName("");
      setAuthorEmail("");
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        comment: "Errore nell'invio del commento",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">
        Commenti ({comments.length})
      </h2>

      {comments.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {comments.map((comment, idx) => (
            <li key={idx} className="border-b pb-4 flex items-start gap-3">
              {/* <img
                src={comment.author?.node?.url}
                alt={comment.author?.node?.name || "Anonimo"}
                className="w-12 h-12 rounded-full"
              /> */}
              <div>
                <p className="font-semibold">
                  {comment.author?.node?.name || "Anonimo"}
                </p>
                <p
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
                <p className="text-gray-400 text-sm">{comment.dateGmt}</p>

                {/* Qui puoi aggiungere un bottone per le reply */}
                {/* <button className="text-sm text-blue-500 mt-1">Rispondi</button> */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-6">Nessun commento per questo post.</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Nome"
          className="p-3 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          value={authorEmail}
          onChange={(e) => setAuthorEmail(e.target.value)}
          placeholder="Email"
          className="p-3 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Scrivi un commento..."
          rows={4}
          className="p-3 border rounded-md resize-none"
        />
        {errors.comment && (
          <p className="text-red-500 text-sm">{errors.comment}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-gray-900 text-white rounded-md disabled:opacity-50"
        >
          {isSubmitting ? "Invio..." : "Invia commento"}
        </button>
      </form>
    </div>
  );
}

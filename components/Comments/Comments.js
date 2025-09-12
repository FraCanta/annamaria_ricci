// components/Comments/Comments.js
import React, { useState } from "react";

function CommentItem({ comment, onReply }) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <li className="border-b pb-4">
      <div className="flex gap-3">
        {comment.author?.node?.avatar?.url && (
          <img
            src={comment.author.node.avatar.url}
            alt={comment.author.node.name || "Anonimo"}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div>
          <p className="font-semibold">
            {comment.author?.node?.name || "Anonimo"}
          </p>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: comment.content }}
          />
          <p className="text-gray-400 text-sm">{comment.dateGmt}</p>

          <button
            onClick={() => setShowReplyForm((prev) => !prev)}
            className="text-sm text-blue-500 mt-2"
          >
            {showReplyForm ? "Annulla" : "Rispondi"}
          </button>

          {showReplyForm && (
            <div className="mt-3">
              <ReplyForm
                parentId={comment.databaseId}
                onSubmit={onReply}
                onCancel={() => setShowReplyForm(false)}
              />
            </div>
          )}

          {comment.replies?.nodes?.length > 0 && (
            <ul className="ml-6 mt-4 space-y-4">
              {comment.replies.nodes.map((reply) => (
                <CommentItem key={reply.id} comment={reply} onReply={onReply} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

function ReplyForm({ parentId, onSubmit, onCancel }) {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await onSubmit({
      content,
      authorName,
      authorEmail,
      parentId,
    });

    setAuthorName("");
    setAuthorEmail("");
    setContent("");
    setIsSubmitting(false);
    onCancel();
  };

  return (
    <form onSubmit={handleReply} className="flex flex-col gap-2 mt-2">
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Nome"
        className="p-2 border rounded-md"
      />
      <input
        type="email"
        value={authorEmail}
        onChange={(e) => setAuthorEmail(e.target.value)}
        placeholder="Email"
        className="p-2 border rounded-md"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Scrivi una risposta..."
        rows={3}
        className="p-2 border rounded-md resize-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-3 py-1 bg-gray-900 text-white rounded-md disabled:opacity-50"
        >
          {isSubmitting ? "Invio..." : "Rispondi"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 bg-gray-300 text-black rounded-md"
        >
          Annulla
        </button>
      </div>
    </form>
  );
}

export default function Comments({ post }) {
  const [comments, setComments] = useState(post.comments?.nodes || []);

  const handleSubmit = async ({
    content,
    authorName,
    authorEmail,
    parentId,
  }) => {
    try {
      const res = await fetch("/api/add-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post.databaseId,
          content,
          authorName,
          authorEmail,
          parent: parentId || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Errore invio commento:", data);
        return;
      }

      // Aggiorna localmente i commenti
      if (parentId) {
        // Se è una reply → trova il parent e aggiungila
        setComments((prev) =>
          prev.map((c) =>
            c.databaseId === parentId
              ? {
                  ...c,
                  replies: {
                    nodes: [...(c.replies?.nodes || []), data.comment],
                  },
                }
              : c
          )
        );
      } else {
        // Se è un commento principale → aggiungilo alla lista
        setComments((prev) => [...prev, data.comment]);
      }
    } catch (err) {
      console.error("Errore:", err);
    }
  };

  return (
    <div className="mt-12 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">
        Commenti ({comments.length})
      </h2>

      {comments.length > 0 ? (
        <ul className="space-y-6 mb-6">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={handleSubmit}
            />
          ))}
        </ul>
      ) : (
        <p className="mb-6">Nessun commento per questo post.</p>
      )}

      <h3 className="text-xl font-semibold mb-2">Lascia un commento</h3>
      <ReplyForm parentId={null} onSubmit={handleSubmit} onCancel={() => {}} />
    </div>
  );
}

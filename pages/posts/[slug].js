import React, { useEffect, useState } from "react";
import { client } from "@/utils/graphql";
import { GET_ALL_POSTS } from "@/utils/queries";
import { useRouter } from "next/router";
import Image from "next/image";
import md5 from "md5";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Link from "next/link";

export default function PostPage({ post, otherPosts }) {
  console.log(otherPosts);
  const router = useRouter();
  const [comments, setComments] = useState(post.comments.nodes || []);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", comment: "" });
  const controls = useAnimation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      controls.start("visible");
    }, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>Post non trovato</div>;

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
    } else if (!/\S+@\S+\.\S+/.test(authorEmail)) {
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
      console.log("Commento salvato:", savedComment);

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

  const readingTime = Math.max(
    1,
    Math.ceil(post.content.split(" ").length / 200)
  );

  return (
    <>
      <article className="my-8 lg:my-14">
        <div className=" my-10 flex flex-col gap-4">
          <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
            {post.categories?.nodes[0]?.name || "Blog"}
          </p>
          <h1
            className={`text-[9vw] lg:max-w-[50vw] transition-all duration-[1200ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] w-full leading-none lg:text-[4vw] flex flex-col text-gray100  font-abhaya font-bold  ${
              animate
                ? "opacity-100 blur-0 translate-y-0 delay-[0ms]"
                : "opacity-0 blur-sm translate-y-4 delay-[0ms]"
            }`}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 ">
            <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
              <Icon icon="solar:user-linear" width="15" height="15" />{" "}
              {post.author?.node?.name || "Sconosciuto"}
            </p>
            <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
              <Icon icon="clarity:date-line" width="15" height="15" />
              {formatDate(post.date)}
            </p>
            <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
              <Icon
                icon="material-symbols:timer-outline-rounded"
                width="15"
                height="15"
              />{" "}
              {readingTime} min lettura
            </p>
          </div>
        </div>
        <div
          className={`transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"} 
              w-full relative`}
        >
          {post.featuredImage?.node?.sourceUrl && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={800}
              height={800}
              className="w-full aspect-square lg:h-[600px] object-cover"
            />
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
          <div
            className="font-work text-gray90 mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div>share socials</div>
        </div>

        <div className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">
            Commenti ({comments.length})
          </h2>

          {comments.length > 0 ? (
            <ul className="space-y-4 mb-6">
              {comments.map((comment, idx) => (
                <li key={idx} className="border-b pb-4 flex items-start gap-3">
                  <img
                    src={
                      comment.author?.node?.email
                        ? `https://www.gravatar.com/avatar/${md5(
                            comment.author.node.email.trim().toLowerCase()
                          )}?s=48&d=identicon`
                        : "/default-avatar.png"
                    }
                    alt={comment.author?.node?.name || "Anonimo"}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">
                      {comment.author?.node?.name || "Anonimo"}
                    </p>
                    <p className="text-gray-700">
                      {typeof window !== "undefined" ? (
                        <span
                          dangerouslySetInnerHTML={{ __html: comment.content }}
                        />
                      ) : (
                        "Caricamento commento..."
                      )}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {new Date(comment.date).toLocaleString()}
                    </p>
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
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              placeholder="Email"
              className="p-3 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

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
      </article>
      <AnimatedLineView />
      {otherPosts.length > 0 && (
        <div className="mt-16 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Altri articoli</h2>
          <ul className="space-y-4">
            {otherPosts.map((p) => (
              <li key={p.id} className="border-b pb-2">
                <Link
                  href={`/posts/${p.uri.replace(/^\/|\/$/g, "")}`}
                  className="text-blue-600 hover:underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const data = await client.request(GET_ALL_POSTS);
  const paths = data.posts.edges.map(({ node }) => ({
    params: { slug: node.uri.replace(/^\/|\/$/g, "") },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const data = await client.request(GET_ALL_POSTS);
  const post = data.posts.edges
    .map(({ node }) => node)
    .find((p) => p.uri.replace(/^\/|\/$/g, "") === params.slug);
  const otherPosts = post
    ? data.posts.edges
        .map(({ node }) => node)
        .filter((p) => p.id !== post.id)
        .slice(0, 3)
    : [];

  if (!post) return { notFound: true };
  return { props: { post, otherPosts }, revalidate: 60 };
}

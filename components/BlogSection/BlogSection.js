import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeInSection from "../layout/FadeInSection";
import { format } from "date-fns";
import { it } from "date-fns/locale";

// Calcolo tempo di lettura basato sul contenuto
function calculateReadingTime(content) {
  if (!content) return 1;
  const text = content.replace(/<[^>]+>/g, ""); // rimuove HTML
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.ceil(words / 200); // media 200 parole/min
}

// Formattazione date SSR-safe
function formatDate(dateString) {
  try {
    return format(new Date(dateString), "dd/MM/yyyy", { locale: it });
  } catch {
    return "";
  }
}

function BlogSection({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>Nessun articolo trovato.</p>;
  }

  return (
    <div className="flex flex-col gap-6 mb-10">
      {/* Primo post grande */}
      <FadeInSection delay={100}>
        <Link
          href={`/posts/${posts[0].uri}`}
          className="flex flex-col lg:flex-row gap-6 bg-gray80/30 h-[450px] md:h-[600px] hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2"
        >
          <div className="relative w-full h-full">
            <Image
              src={
                posts[0].featuredImage?.node?.sourceUrl ||
                "/assets/blog_placeholder.jpg"
              }
              alt={posts[0].title}
              fill
              className="w-full aspect-video h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="flex flex-col gap-8 justify-between p-4 lg:p-[60px] lg:w-[60%]">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
                {posts[0].categories?.nodes[0]?.name || "Blog"}
              </p>

              <h3 className="font-abhaya font-bold text-[28px] lg:text-[48px] 2xl:text-[48px] leading-none text-gray100 ">
                {posts[0].title}
              </h3>
            </div>

            <div className="flex gap-6 items-center flex-wrap">
              {/* Data */}
              <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                <Icon icon="clarity:date-line" width="15" height="15" />
                {formatDate(posts[0].date)}
              </p>

              {/* Tempo di lettura */}
              <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                <Icon
                  icon="material-symbols:timer-outline-rounded"
                  width="15"
                  height="15"
                />
                {calculateReadingTime(posts[0].content)} min
              </p>

              {/* Numero commenti */}
              {/* <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                <Icon icon="mdi:comment-outline" width="15" height="15" />
                {posts[0].commentCount || 0} commenti
              </p> */}
            </div>
          </div>
        </Link>
      </FadeInSection>

      {/* Altri post in griglia */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {posts.slice(1).map((post) => (
          <FadeInSection delay={100} key={post.uri}>
            <Link
              href={`/posts${post.uri}`}
              className="flex flex-col bg-gray80/30 overflow-hidden hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2"
            >
              <div className="relative w-full h-[200px] md:h-[300px] aspect-square">
                <Image
                  src={
                    post.featuredImage?.node?.sourceUrl ||
                    "/assets/blog_placeholder.jpg"
                  }
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-[20px] flex flex-col justify-between min-h-[150px] gap-6 ">
                <div className="flex flex-col gap-4">
                  <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
                    {post.categories?.nodes[0]?.name || "Blog"}
                  </p>

                  <h3 className="font-abhaya font-bold text-[25px] leading-none text-gray100 ">
                    {post.title}
                  </h3>
                </div>

                <div className="flex gap-6 items-center flex-wrap">
                  {/* Data */}
                  <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                    <Icon icon="clarity:date-line" width="15" height="15" />
                    {formatDate(post.date)}
                  </p>

                  {/* Tempo di lettura */}
                  <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                    <Icon
                      icon="material-symbols:timer-outline-rounded"
                      width="15"
                      height="15"
                    />
                    {calculateReadingTime(post.content)} min
                  </p>

                  {/* Numero commenti */}
                  {/* <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                    <Icon icon="mdi:comment-outline" width="15" height="15" />
                    {post.commentCount || 0} commenti
                  </p> */}
                </div>
              </div>
            </Link>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;

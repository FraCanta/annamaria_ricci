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
import ShareButtons from "@/components/ShareButtons/ShareButtons";
import Head from "next/head";
import FadeInSection from "@/components/layout/FadeInSection";
import Button from "@/components/layout/Button";
import Banner from "@/components/Banner/Banner";
import Comments from "@/components/Comments/Comments";

export default function PostPage({ post, otherPosts }) {
  console.log(post);
  const router = useRouter();
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

  const readingTime = Math.max(
    1,
    Math.ceil(post.content.split(" ").length / 200)
  );

  return (
    <>
      <Head>
        <title>Blog - {post.title}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:image"
          content={post.featuredImage?.node?.sourceUrl}
        />
      </Head>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 justify-between w-full">
          <div
            className="font-work text-gray90 mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className="flex flex-row items-start">
            <div className="flex-grow"></div>
            <ShareButtons
              title={post.title}
              link={`https://annamaria-ricci.vercel.app/posts/${post.uri.replace(
                /^\/|\/$/g,
                ""
              )}`}
            />
          </div>
        </div>

        {/* <Comments post={post} /> */}
      </article>
      <AnimatedLineView />
      {otherPosts.length > 0 && (
        <div className="my-16 ">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 gap-6 ">
            <div className="flex flex-col gap-6 lg:max-w-[60%] ">
              <FadeInSection delay={100}>
                <h2 className="font-abhaya font-bold text-[8vw] md:text-[48px] 2xl:text-[3vw] leading-none text-gray100 ">
                  Potrebbero interessarti anche
                </h2>
              </FadeInSection>
            </div>
            <FadeInSection delay={100}>
              <Button href="/blog">Leggi le altre notizie</Button>
            </FadeInSection>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {otherPosts.map((p) => (
              <li key={p.id} className="border-b pb-2">
                <FadeInSection delay={100} key={p.uri}>
                  <Link
                    href={`/posts/${p.uri.replace(/^\/|\/$/g, "")}`}
                    className="flex flex-col bg-gray80/30 overflow-hidden hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2"
                  >
                    <div className="relative w-full h-[200px] lg:h-[300px]  aspect-square">
                      <Image
                        src={
                          p.featuredImage?.node?.sourceUrl ||
                          "/assets/blog_placeholder.jpg"
                        }
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-[20px] flex flex-col justify-between min-h-[150px] gap-6 ">
                      <div className="flex flex-col gap-4">
                        <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
                          {p.categories?.nodes[0]?.name || "Blog"}
                        </p>

                        <h3 className="font-abhaya font-bold text-[25px] leading-none text-gray100 ">
                          {p.title}
                        </h3>
                      </div>

                      <div className="flex gap-6 items-center flex-wrap">
                        {/* Data */}
                        <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                          <Icon
                            icon="clarity:date-line"
                            width="15"
                            height="15"
                          />
                          {formatDate(post.date)}
                        </p>

                        {/* Tempo di lettura */}
                        <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                          <Icon
                            icon="material-symbols:timer-outline-rounded"
                            width="15"
                            height="15"
                          />
                          {readingTime} min
                        </p>

                        {/* Numero commenti */}
                        <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                          <Icon
                            icon="mdi:comment-outline"
                            width="15"
                            height="15"
                          />
                          {post.commentCount || 0} commenti
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      )}
      <AnimatedLineView />
      <Banner />
      <AnimatedLineView />
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

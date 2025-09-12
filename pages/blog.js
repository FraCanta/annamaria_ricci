import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeInSection from "@/components/layout/FadeInSection";
import BlogSearch from "@/components/BlogSearch/BlogSearch";
import BlogSection from "@/components/BlogSection/BlogSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import router, { useRouter } from "next/router";

import { client } from "@/utils/graphql";
import { GET_ALL_POSTS, GET_ALL_CATEGORIES } from "@/utils/queries";
import Head from "next/head";

const Blog = ({ posts, categories }) => {
  console.log("Posts data:", posts);
  console.log("Categories data:", categories);
  const controls = useAnimation();
  const [animate, setAnimate] = useState(false);
  const [filterObj, setFilterObj] = useState({});
  const myRouter = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      controls.start("visible");
    }, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="content">
      <Head>
        <title>Anna Maria Ricci - Blog</title>
        <meta name="author" content="Anna Maria Ricci" />
        <meta
          name="description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta name="keywords" content="consulenza, orientamento, evoluzione" />

        <meta property="og:url" content="https://www.annamariaricci.eu/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anna Maria Ricci - Blog" />
        <meta
          property="og:description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta
          property="og:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="annamariaricci.eu" />
        <meta
          property="twitter:url"
          content="https://www.annamariaricci.eu/blog"
        />
        <meta
          name="twitter:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta name="twitter:title" content="Anna Maria Ricci - Blog" />
        <meta
          name="twitter:description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Annamaria Ricci" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <FadeInSection delay={50}>
        <div className="w-full my-10 lg:my-20 flex flex-col gap-4 justify-center items-center relative">
          <div>
            <h1
              className={`font-abhaya font-bold text-[11vw] lg:text-[4vw] leading-none text-gray100 text-center 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
            >
              Blog
            </h1>
          </div>
          {/* <BlogSearch /> */}
          {/* <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
            <h3 className="pr-4 text-sm font-medium text-second">TOPICS</h3>
            <div className="flex flex-wrap gap-4">
              {categories?.map((el, i) => {
                const isActive = filterObj?.categories === el?.slug;
                const newCategoryId = isActive ? 0 : el?.slug;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      setFilterObj((prevData) => ({
                        currentPage: 1,
                        categories: newCategoryId,
                      }));

                      router.push({
                        pathname: "/blog",
                        query: {
                          categories: newCategoryId,
                          page: 1,
                        },
                      });
                    }}
                    className={`relative text-sm uppercase font-medium transition-all duration-200
            ${
              isActive
                ? "text-gray100 border-purple100 bg-purple100/40 border-2 p-2 rounded-md"
                : "text-pink border-gray90/50 border px-[12px] py-[7px] rounded-md hover:bg-purple100/40 hover:text-gray100 hover:border-purple100"
            }`}
                  >
                    {el?.name}
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>
      </FadeInSection>
      {/* Passiamo i post a BlogSection */}
      <BlogSection posts={posts} />

      <AnimatedLineView />
      <Banner />
      <AnimatedLineView />
    </div>
  );
};

export default Blog;

// Static Site Generation (ISR incluso)
export async function getStaticProps() {
  const data = await client.request(GET_ALL_POSTS);
  const categoriesData = await client.request(GET_ALL_CATEGORIES);

  return {
    props: {
      posts: data.posts.edges.map(({ node }) => node),
      categories: categoriesData.categories.nodes,
    },
    revalidate: 60, // ISR: rigenera ogni 60 secondi
  };
}

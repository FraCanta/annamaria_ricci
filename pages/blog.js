import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeInSection from "@/components/layout/FadeInSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import { useRouter } from "next/router";

import { client } from "@/utils/graphql";
import { GET_ALL_POSTS, GET_ALL_CATEGORIES } from "@/utils/queries";
import Head from "next/head";

const Blog = ({ posts, categories }) => {
  const controls = useAnimation();
  const [animate, setAnimate] = useState(false);
  const myRouter = useRouter();

  // Categoria attiva presa dalla query string
  const activeCategory = myRouter.query.categories || null;

  // Filtriamo i post lato client
  const filteredPosts = posts.filter((post) => {
    if (!activeCategory || activeCategory === "0") return true; // mostra tutti
    return post.categories?.nodes?.some((cat) => cat.slug === activeCategory);
  });

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

          {/* Categorie */}
          <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
            <h3 className="pr-4 text-sm font-medium text-gray100">TOPICS</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories?.map((el, i) => {
                const isActive = activeCategory === el?.slug;
                const newCategoryId = isActive ? "0" : el?.slug;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      myRouter.push({
                        pathname: "/blog",
                        query: {
                          categories: newCategoryId,
                          page: 1,
                        },
                      });
                    }}
                    className={`relative text-sm uppercase  transition-all duration-200
                      ${
                        isActive
                          ? "text-gray100 border-purple100 bg-purple100/40 border-2 p-2 rounded-md"
                          : "text-pink border-gray90/40 border px-[12px] py-[7px] rounded-md hover:bg-purple100/20 hover:text-gray100 hover:border-purple100"
                      }`}
                  >
                    {el?.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Sezione dei post filtrati */}
      <BlogSection posts={filteredPosts} />

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

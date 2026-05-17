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
import JsonLd from "@/components/seo/JsonLd";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildSeoTitle,
  buildWebPageSchema,
  pageSeo,
} from "@/utils/seo";

const Blog = ({ posts, categories }) => {
  const seo = pageSeo.blog;
  const seoTitle = buildSeoTitle(seo.title);
  const canonicalUrl = absoluteUrl(seo.path);
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
        <title>{seoTitle}</title>
        <meta name="author" content="Anna Maria Ricci" />
        <meta
          name="description"
          content={seo.description}
        />
        <meta name="keywords" content="consulenza, orientamento, evoluzione" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seo.description} />
        <JsonLd
          data={[
            buildWebPageSchema({
              title: seoTitle,
              description: seo.description,
              path: seo.path,
            }),
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: seo.path },
            ]),
          ]}
        />
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
                    type="button"
                    key={i}
                    aria-pressed={isActive}
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

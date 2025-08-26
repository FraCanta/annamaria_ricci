import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import FadeInSection from "@/components/layout/FadeInSection";
import BlogSearch from "@/components/BlogSearch/BlogSearch";
import BlogSection from "@/components/BlogSection/BlogSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";

import { client } from "@/utils/graphql";
import { GET_ALL_POSTS } from "@/utils/queries";

const Blog = ({ posts }) => {
  const controls = useAnimation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      controls.start("visible");
    }, 300);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <>
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
        </div>
      </FadeInSection>
      {/* Passiamo i post a BlogSection */}
      <BlogSection posts={posts} />

      <AnimatedLineView />
      <Banner />
      <AnimatedLineView />
    </>
  );
};

export default Blog;

// Static Site Generation (ISR incluso)
export async function getStaticProps() {
  const data = await client.request(GET_ALL_POSTS);

  return {
    props: {
      posts: data.posts.edges.map(({ node }) => node),
    },
    revalidate: 60, // ISR: rigenera ogni 60 secondi
  };
}

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import AboutSection from "@/components/About/AboutSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import InfiniteTextScroll from "@/components/InfiniteTextScroller/InfiniteTextScroll";
import HeroHome from "@/components/layout/HeroHome";
import FadeInSection from "@/components/layout/FadeInSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Button from "@/components/layout/Button";
import Reviews from "@/components/Reviews/Reviews";
import Banner from "@/components/Banner/Banner";
import StrumentiSection from "@/components/Strumenti/StrumentiSection";
import PercorsiSection from "@/components/Percorsi/PercorsiSection";
import RespiroCircolare from "@/components/RespiroCircolare/RespiroCircolare";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Anna Maria Ricci - Esperta in crescita personale e professionale
        </title>
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

      <main className="content">
        <HeroHome />
        <AnimatedLineView />
        <FadeInSection delay={200}>
          <AboutSection />
        </FadeInSection>
        <AnimatedLineView />
        <div className="lg:min-h-screen my-20 relative lg:mb-10">
          <h2 className="text-[12vw] font-abhaya font-bold leading-none text-gray-900">
            <FadeInSection delay={100}>
              <span
                className={`block pl-[15%] transition-[padding-left] duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)]`}
              >
                I miei strumenti
              </span>
            </FadeInSection>
            <FadeInSection delay={200}>
              <span className="flex w-full justify-between items-center gap-2">
                <span>tra</span> <span>tradizione</span>
              </span>
            </FadeInSection>

            <FadeInSection delay={400}>
              <span className="flex justify-end">e innovazione</span>
            </FadeInSection>
          </h2>

          <FadeInSection delay={100}>
            <StrumentiSection />
          </FadeInSection>
        </div>
        <AnimatedLineView />
        <div className="relative  my-20">
          <FadeInSection delay={100}>
            <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 mb-10">
              <h2 className="text-[12vw] md:text-[8vw] lg:text-[4vw] font-abhaya font-bold leading-none text-gray-900">
                I miei percorsi
              </h2>
              <Button href="/percorsi">Vedi tutti i percorsi</Button>
            </div>
          </FadeInSection>
          <PercorsiSection />
        </div>
        <AnimatedLineView />

        <RespiroCircolare />

        <AnimatedLineView />

        <FadeInSection delay={50}>
          <BlogSection />
        </FadeInSection>
        <AnimatedLineView />
        <FadeInSection delay={50}>
          <Banner />
        </FadeInSection>
        <AnimatedLineView />
      </main>
    </>
  );
}

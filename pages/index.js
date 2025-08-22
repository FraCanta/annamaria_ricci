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
        <div className="my-20 relative lg:mb-10">
          <FadeInSection delay={100}>
            <h2 className="font-abhaya font-bold text-[8vw] lg:text-[4vw] leading-none text-gray100 lg:text-center">
              I miei strumenti <br />
              tra tradizione e innovazione
            </h2>
          </FadeInSection>

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
              <Button href="/tutti-i-percorsi">Vedi tutti i percorsi</Button>
            </div>
          </FadeInSection>
          <PercorsiSection />
        </div>
        <AnimatedLineView />

        <RespiroCircolare />

        <AnimatedLineView />

        <FadeInSection delay={100}>
          <BlogSection />
        </FadeInSection>
        <AnimatedLineView />
        <FadeInSection delay={100}>
          <Banner />
        </FadeInSection>
        <AnimatedLineView />
      </main>
    </>
  );
}

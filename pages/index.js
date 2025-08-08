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
              <h2 className="text-[12vw] lg:text-[4vw] font-abhaya font-bold leading-none text-gray-900">
                I miei percorsi
              </h2>
              <Button href="/percorsi">Vedi tutti i percorsi</Button>
            </div>
          </FadeInSection>
          <PercorsiSection />
        </div>
        <AnimatedLineView />

        {/* <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
          <FadeInSection delay={50}>
            <div className="relative  w-full h-full flex flex-col lg:flex-row items-center lg:my-20 px-2 lg:px-4 gap-20">
              <div className="w-full lg:w-[40%] flex flex-col gap-4">
                <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100 ">
                  La mia formazione ed esperienza nel Respiro Circolare
                  Consapevole
                </h2>
                <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
                  Dal 2008 mi sono formata in Respiro Circolare Consapevole con
                  insegnanti internazionali, arricchendo la mia pratica con
                  esperienze in sessioni individuali e di gruppo. La mia
                  passione per la crescita personale mi ha portata a sviluppare
                  un approccio personalizzato, rispettoso dei tempi e delle
                  necessità di ciascuno.
                </p>
                <Button href="/chi-sono">scopri sul respiro</Button>
              </div>
              <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center lg:p-8">
                <div className="w-full h-full relative ">
                  <div className="relative w-full h-full ">
                    {" "}
                    <Image
                      src="/assets/respiro.jpg"
                      alt="Hero"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>

                  <div className="absolute top-0 left-0 w-full h-full bg-gray80/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div> */}
        <RespiroCircolare />
        {/* <AnimatedLineView />
        <InfiniteTextScroll /> */}
        <AnimatedLineView />
        {/* <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
          <div className="absolute top-0 left-0 w-screen lg:w-full h-full mx-auto">
            <FadeInSection delay={50}>
              <Image
                src="/assets/annamaria_scritta.png"
                alt="Hero"
                width={1500}
                height={1500}
                className="w-full lg:h-full object-cover object-left lg:object-contain lg:object-right overflow-x-hidden h-[70px]"
              />
            </FadeInSection>
          </div>
          <FadeInSection delay={50}>
            <div className="relative top-8 lg:top-6 left-0 w-full h-full flex flex-col lg:flex-row items-center lg:my-20 px-2 lg:px-4 gap-6 lg:gap-20">
             

              <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center">
                <Image
                  src="/assets/annamaria2.jpg"
                  alt="Hero"
                  fill
                  className="object-contain rounded-full lg:p-8 "
                  priority
                />
              </div>

              <div className="w-full lg:w-[40%] flex flex-col gap-4">
                <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100 ">
                  Il mio percorso tra crescita personale e professionale
                </h2>
                <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
                  La mia passione per l’apprendimento e la libertà mi ha portata
                  a specializzarmi nell’aiuto alla persona, nel benessere e
                  nell’orientamento professionale. Attraverso counseling,
                  respiro circolare consapevole e comunicazione non violenta,
                  accompagno individui e organizzazioni verso una maggiore
                  consapevolezza e crescita.
                </p>
                <Button href="/chi-sono">chi sono</Button>
              </div>
            </div>
          </FadeInSection>
        </div>
        <AnimatedLineView /> */}

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

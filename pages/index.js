import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import AboutSection from "@/components/About/AboutSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import InfiniteTextScroll from "@/components/InfiniteTextScroller/InfiniteTextScroll";
import HeroHome from "@/components/layout/HeroHome";
import ServiziSection from "@/components/Servizi/ServiziSection";
import FadeInSection from "@/components/layout/FadeInSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Button from "@/components/layout/Button";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Maria Ricci</title>
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
        <FadeInSection delay={100}>
          <ServiziSection />
        </FadeInSection>
        <AnimatedLineView />
        <InfiniteTextScroll />
        <AnimatedLineView />

        <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
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
          {/* SEZIONE A DUE COLONNE */}
          <FadeInSection delay={50}>
            <div className="relative top-8 lg:top-6 left-0 w-full h-full flex flex-col lg:flex-row items-center lg:my-20 px-2 lg:px-4 gap-6 lg:gap-20">
              {/* COLONNA SINISTRA - 60% */}

              <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center">
                <Image
                  src="/assets/chi_sono.webp"
                  alt="Hero"
                  fill
                  className="object-contain rounded-full lg:p-8 "
                  priority
                />
              </div>

              {/* COLONNA DESTRA - 40% */}
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

        <AnimatedLineView />
        <FadeInSection delay={50}>
          <Reviews />
        </FadeInSection>
        <AnimatedLineView />
        <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
          {/* SEZIONE A DUE COLONNE */}
          <FadeInSection delay={50}>
            <div className="relative  w-full h-full flex flex-col lg:flex-row items-center lg:my-20 px-2 lg:px-4 gap-20">
              {/* COLONNA DESTRA - 40% */}
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
              {/* COLONNA SINISTRA - 60% */}
              <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center lg:p-8">
                {/* Contenitore per immagine e overlay */}
                <div className="w-full h-full relative ">
                  {/* Immagine con padding */}
                  <div className="relative w-full h-full ">
                    {" "}
                    {/* Padding applicato qui, separato dal contenitore */}
                    <Image
                      src="/assets/respiro.jpg"
                      alt="Hero"
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>

                  {/* Overlay sopra l'immagine */}
                  <div className="absolute top-0 left-0 w-full h-full bg-purple100/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
        <AnimatedLineView />
        <FadeInSection delay={50}>
          <BlogSection />
        </FadeInSection>
      </main>
    </>
  );
}

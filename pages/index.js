import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import AboutSection from "@/components/About/AboutSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import InfiniteTextScroll from "@/components/InfiniteTextScroller/InfiniteTextScroll";
import HeroHome from "@/components/layout/HeroHome";
import ServiziSection from "@/components/Servizi/ServiziSection";
import FadeInSection from "@/components/layout/FadeInSection";

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

        <div className="h-screen mt-20 relative mb-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <FadeInSection delay={200}>
              <Image
                src="/assets/annamaria_scritta.png"
                alt="Hero"
                width={800}
                height={800}
                className="w-full h-full object-cover lg:object-contain object-right overflow-x-hidden"
              />
            </FadeInSection>
          </div>
          {/* SEZIONE A DUE COLONNE */}
          <FadeInSection delay={100}>
            <div className="relative top-6 lg:top-6 left-0 w-full h-full flex flex-col lg:flex-row items-center  gap-20">
              {/* COLONNA SINISTRA - 60% */}

              <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center">
                <Image
                  src="/assets/chi_sono.webp"
                  alt="Hero"
                  fill
                  className="object-contain rounded-full p-8"
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
              </div>
            </div>
          </FadeInSection>
        </div>

        <AnimatedLineView />
      </main>
    </>
  );
}

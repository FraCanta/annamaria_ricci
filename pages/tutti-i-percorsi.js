import React, { useEffect, useState } from "react";
import percorsiIT from "@/public/locales/it/percorsi.json";
import Button from "@/components/layout/Button";
import Image from "next/image";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import { motion } from "framer-motion";
import Head from "next/head";

function TuttiIPercorsi({ translation }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // delay iniziale
    return () => clearTimeout(timer);
  }, []);
  // Creo le tabs aggiungendo "Tutti" all’inizio
  const tabs = ["Tutti", ...translation.tabs.map((t) => t.name)];
  const [activeTab, setActiveTab] = useState("Tutti");

  // Filtra i percorsi in base alla tab attiva
  const percorsi =
    activeTab === "Tutti"
      ? translation.tabs.flatMap((t) => t.content)
      : translation.tabs.find((t) => t.name === activeTab)?.content || [];

  return (
    <>
      <Head>
        <title>Anna Maria Ricci - Tutti i Percorsi</title>
        <meta name="author" content="Anna Maria Ricci" />
        <meta
          name="description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta name="keywords" content="consulenza, orientamento, evoluzione" />

        <meta
          property="og:url"
          content="https://www.annamariaricci.eu/tutti-i-percorsi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anna Maria Ricci - Tutti i Percorsi"
        />
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
          content="https://www.annamariaricci.eu/tutti-i-percorsi"
        />
        <meta
          name="twitter:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta
          name="twitter:title"
          content="Anna Maria Ricci - Tutti i Percorsi"
        />
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
      <div className="my-20">
        <h1
          className={`font-abhaya font-bold text-[8vw] lg:text-[4vw] leading-none text-gray100 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
        >
          {translation.title}
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap mt-10 lg:mt-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-lg px-4 py-2 rounded font-abhaya font-regular text-[18px] md:text-[20px] leading-tight text-gray90 
        transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] delay-200 
        ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}
        ${
          activeTab === tab
            ? "underline underline-offset-4 underline-purple100 text-purple100"
            : "bg-transparent text-gray70 hover:text-purple100 hover:underline hover:underline-offset-4"
        }
      `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Percorsi con animazione */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 lg:mb-20">
          {percorsi.map((item, index) => (
            <div
              key={index}
              className={`bg-gray80/30 hover:border hover:border-gray100 hover:rounded-lg  hover:p-2 p-3 transition-all duration-[500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] delay-200 
        ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
            >
              <div>
                <div className="relative w-full h-[400px] lg:h-[600px] rounded-sm overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gray100/40"></div>
                  <div className="absolute bottom-4 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-10">
                    <h3 className="font-abhaya font-bold text-[8vw] md:text-[4vw] lg:text-[2.6vw] leading-none text-white">
                      {item.name}
                    </h3>
                    <Button className="mt-4" href={item.link}>
                      Scopri di più
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatedLineView />
        <div className="my-10 lg:my-20">
          <Banner />
        </div>
        <AnimatedLineView />
      </div>
    </>
  );
}

export default TuttiIPercorsi;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = percorsiIT;
      break;

    // case "en":
    //   obj = percorsiEN;
    //   break;

    default:
      obj = percorsiIT;
      break;
  }

  return {
    props: {
      translation: obj?.percorsi,
    },
    revalidate: 60,
  };
}

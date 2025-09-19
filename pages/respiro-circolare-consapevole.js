import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import ContactButton from "@/components/ContactButton/ContactButton";
import FadeInSection from "@/components/layout/FadeInSection";
import StrumentiSection from "@/components/Strumenti/StrumentiSection";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function RespiroCircolareConsapevole() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Anna Maria Ricci - Il Respiro Circolare Consapevole</title>
        <meta name="author" content="Anna Maria Ricci" />
        <meta
          name="description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta name="keywords" content="consulenza, orientamento, evoluzione" />

        <meta
          property="og:url"
          content="https://www.annamariaricci.eu/respiro-circolare-consapevole"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anna Maria Ricci - Il Respiro Circolare Consapevole"
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
          content="https://www.annamariaricci.eu/respiro-circolare-consapevole"
        />
        <meta
          name="twitter:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta
          name="twitter:title"
          content="Anna Maria Ricci - Il Respiro Circolare Consapevole"
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
      <div className="my-10 lg:my-20 content">
        <h1
          className={`p-2 text-[9vw] text-center w-full transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] leading-none lg:text-[4.5vw] flex justify-center text-gray100 my-10 font-abhaya font-bold ${
            animate
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-sm translate-y-4"
          }`}
        >
          Il Respiro Circolare Consapevole
        </h1>
        <div
          className={`relative aspect-square lg:h-[700px] w-full transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
                ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"}`}
        >
          <Image
            src="/assets/respiro.webp"
            alt="Respiro Circolare Consapevole"
            fill
            className="absolute w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="content">
        <AnimatedLineView />
        <div className="my-10 lg:my-20 flex flex-col gap-8 lg:gap-10">
          {/* Sezione 1 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-md md:text-lg leading-relaxed">
              La parola “respirare” viene dal latino respiràre, composto da re-,
              che indica ripetizione, espiràre, che significa “soffiare”,
              respirare”. La parola “respiro” in latino significa “connesso” e
              in sanscrito equivale alla parola “anima”, per questo può essere
              definito anche uno stile di vita, perché respirando sentiamo la
              nostra anima, in un collegamento diretto, invisibile e connesso
              tra il nostro respiro e la nostra essenza.
            </p>
          </FadeInSection>{" "}
          {/* Sezione 2 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-md md:text-lg leading-relaxed">
              Ogni nostro schema respiratorio racconta una storia: se siamo
              rilassati è profondo e lento, se siamo felici si apre, se proviamo
              paura o dolore si fa corto e trattenuto. Se siamo lontani da noi
              stessi entriamo in apnea. Il modo in cui siamo nati influenza la
              nostra vita, essere consapevoli di queste informazioni è
              fondamentale. Questi schemi, unici come impronte digitali,
              diventano la mappa delle nostre emozioni e delle nostre memorie,
              personali e familiari.
            </p>
          </FadeInSection>
          {/* Immagine o media */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <FadeInSection delay={100}>
              <div className="relative aspect-square">
                <Image
                  src="/assets/respiro1.webp"
                  alt="Respiro consapevole"
                  fill
                  className="object-cover "
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="relative aspect-square">
                <Image
                  src="/assets/respiro4.jpg"
                  alt="Respiro consapevole"
                  fill
                  className="object-cover "
                />
              </div>
            </FadeInSection>
          </div>
          {/* Sezione 3 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-md md:text-lg leading-relaxed">
              Il respiro è un potente alleato: ci permette di portare alla luce
              antiche ferite, blocchi, vissuti che spesso non ci appartengono
              solo a livello personale, ma che ci sono stati tramandati come
              un’eredità invisibile. Ogni memoria non risolta, ogni dolore non
              integrato, rimane come un nodo che limita il nostro potenziale e
              la nostra libertà di essere. Rimane ingabbiato a livello cellulare
              e rimane nel nostro respiro.
            </p>
          </FadeInSection>
          {/* Sezione 4 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-md md:text-lg leading-relaxed">
              Attraverso il respiro circolare consapevole possiamo finalmente
              sciogliere questi nodi, accogliere e accettare ciò che siamo stati
              e aprirci a ciò che possiamo diventare. È un viaggio di
              trasformazione che attraversa corpo, mente e spirito: il respiro
              libera, integra, trasforma. Ci permette di accedere a stati di
              profonda pace, di riconnetterci con la nostra Essenza e di
              riscoprire la bellezza di essere vivi, qui e ora.
            </p>
          </FadeInSection>
          {/* Video incorporato */}
          {/* <FadeInSection delay={100}>
            <div className="w-full max-h-[90svh] h-[70svh]">
              <iframe
                src="https://www.youtube.com/embed/lkxCAcL1djY?si=lenuw9smw50sd4UP"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </FadeInSection> */}
        </div>
        <AnimatedLineView />
        <ContactButton />

        <AnimatedLineView />
        <div className="my-10 lg:my-20 relative ">
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
        <FadeInSection delay={100}>
          <Banner />
        </FadeInSection>
        <AnimatedLineView />
      </div>
    </>
  );
}

export default RespiroCircolareConsapevole;

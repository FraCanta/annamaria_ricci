import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Banner from "@/components/Banner/Banner";
import FadeInSection from "@/components/layout/FadeInSection";
import StrumentiSection from "@/components/Strumenti/StrumentiSection";
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
      <div className="absolute inset-0 lg:aspect-[1920/1200]">
        <h1
          className={`p-2 text-[12vw] text-center w-full transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] leading-none lg:text-[8vw] absolute inset-0 z-10 flex justify-center text-white pt-[30vw] lg:pt-[12vw] font-abhaya font-bold ${
            animate
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-sm translate-y-4"
          }`}
        >
          Respiro Circolare Consapevole
        </h1>
        <div
          className={`absolute inset-0 h-full w-full transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
                ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"}`}
        >
          <Image
            src="/assets/respiro.webp"
            alt="Respiro Circolare Consapevole"
            fill
            className="absolute w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-purple100/20"></div>
      </div>

      <div className="relative z-10 mt-[95vh] md:mt-[90vh] lg:mt-[750px] 2xl:mt-[950px] 2xla:mt-[1000px] ">
        <AnimatedLineView />
        <div className="my-20 flex flex-col gap-10">
          {/* Sezione 1 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-lg md:text-xl leading-relaxed">
              La parola “respirare” viene dal latino respiràre, composto da re-,
              che indica ripetizione, espiràre, che significa “soffiare”,
              respirare”. La parola “respiro” in latino significa “connesso” e
              in sanscrito equivale alla parola “anima”, per questo può essere
              definito anche uno stile di vita, perché respirando sentiamo la
              nostra anima, in un collegamento diretto, invisibile e connesso
              tra il nostro respiro e la nostra essenza.
            </p>
          </FadeInSection>{" "}
          {/* Immagine o media */}
          <FadeInSection delay={100}>
            <div className="w-full aspect-video md:h-[600px] relative">
              <Image
                src="/assets/corso-yoga-conegliano-maitri.jpg"
                alt="Respiro consapevole"
                fill
                className="object-cover "
              />
            </div>
          </FadeInSection>
          {/* Sezione 2 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-lg md:text-xl leading-relaxed">
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
          {/* Sezione 3 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-lg md:text-xl leading-relaxed">
              Il respiro è un potente alleato: ci permette di portare alla luce
              antiche ferite, blocchi, vissuti che spesso non ci appartengono
              solo a livello personale, ma che ci sono stati tramandati come
              un’eredità invisibile. Ogni memoria non risolta, ogni dolore non
              integrato, rimane come un nodo che limita il nostro potenziale e
              la nostra libertà di essere. Rimane ingabbiato a livello cellulare
              e rimane nel nostro respiro.
            </p>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <FadeInSection delay={100}>
              <div className="relative aspect-square">
                <Image
                  src="/assets/img-1.webp"
                  alt="Respiro consapevole"
                  fill
                  className="object-cover "
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="relative aspect-square">
                <Image
                  src="/assets/img2.jpg"
                  alt="Respiro consapevole"
                  fill
                  className="object-cover "
                />
              </div>
            </FadeInSection>
          </div>
          {/* Sezione 4 */}
          <FadeInSection delay={100}>
            <p className="text-gray90 text-lg md:text-xl leading-relaxed">
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
          <FadeInSection delay={100}>
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
          </FadeInSection>
        </div>

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
        <FadeInSection delay={100}>
          <Banner />
        </FadeInSection>
        <AnimatedLineView />
      </div>
    </>
  );
}

export default RespiroCircolareConsapevole;

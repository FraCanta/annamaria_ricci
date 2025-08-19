import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Button from "@/components/layout/Button";
import FadeInSection from "@/components/layout/FadeInSection";
import PercorsiCarousel from "@/components/Percorsi/PercorsiSection";
import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import Banner from "@/components/Banner/Banner";
import strumentiIT from "@/public/locales/it/strumenti.json";
import StrumentiLayout from "@/components/Strumenti/StrumentiLayout";

const ToolsPage = ({ translation }) => {
  const [animate, setAnimate] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      controls.start("visible");
    }, 300); // ritardo iniziale
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div>
      <FadeInSection delay={50}>
        <div className="w-full my-10 lg:my-20">
          <div className="w-full my-14 flex flex-col items-center gap-10 z-10 ">
            <h1
              className={`font-abhaya font-bold text-[12vw] lg:text-[6vw] leading-none text-gray100 lg:text-center 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
            >
              I miei strumenti <br />
              tra tradizione e innovazione
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              <div className="flex flex-col justify-between h-full gap-6">
                <p
                  className={`text-[20px] text-gray90 font-work font-normal leading-snug ${
                    animate
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-sm translate-y-4"
                  }`}
                >
                  Nel mio percorso di oltre{" "}
                  <span className="font-[600]">37 anni</span> nel mondo del
                  lavoro, ho integrato strumenti consolidati del{" "}
                  <span className="font-[600]">counseling</span>, della
                  <span className="font-[600]"> formazione</span> e dell’
                  <span className="font-[600]">
                    orientamento professionale
                  </span>{" "}
                  con approcci olistici per il{" "}
                  <span className="font-[600]">benessere personale</span> e{" "}
                  <span className="font-[600]">relazionale</span>.
                </p>
                <p
                  className={`text-[20px] text-gray90 font-work font-normal leading-snug ${
                    animate
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-sm translate-y-4"
                  }`}
                >
                  Credo che ogni persona abbia{" "}
                  <span className="font-[600]">risorse uniche</span> da
                  valorizzare e che la{" "}
                  <span className="font-[600]">
                    crescita personale e professionale
                  </span>{" "}
                  passi dall’
                  <span className="font-[600]">ascolto profondo</span> e dalla{" "}
                  <span className="font-[600]">consapevolezza di sé</span>.
                </p>
              </div>
              <div className="flex flex-col gap-6 justify-between h-full">
                <p
                  className={`text-[20px] text-gray90 font-work font-normal leading-snug ${
                    animate
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-sm translate-y-4"
                  }`}
                >
                  Nel mio <span className="font-[600]">studio</span> – online e
                  in presenza – troverai uno{" "}
                  <span className="font-[600]">spazio sicuro</span>,{" "}
                  <span className="font-[600]">accogliente</span> e{" "}
                  <span className="font-[600]">non giudicante</span>, dove
                  essere ascoltatə e guidatə con{" "}
                  <span className="font-[600]">cura</span>,{" "}
                  <span className="font-[600]">rispetto</span> e{" "}
                  <span className="font-[600]">professionalità</span>. Ogni
                  <span className="font-[600]"> percorso</span> è unico: insieme
                  possiamo trovare{" "}
                  <span className="font-[600]">nuove strade</span>, riconoscere
                  e scoprire <span className="font-[600]">talenti</span> e
                  mettere le basi per il{" "}
                  <span className="font-[600]">futuro che desideri</span>.
                </p>
                <p
                  className={`text-[20px] text-gray90 font-work font-normal leading-snug ${
                    animate
                      ? "opacity-100 blur-0 translate-y-0"
                      : "opacity-0 blur-sm translate-y-4"
                  }`}
                >
                  Ecco gli <span className="font-[600]">strumenti</span> che
                  utilizzo ad oggi:
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <StrumentiLayout translation={translation.items} />
      <AnimatedLineView />
      <FadeInSection delay={100}>
        <Banner />
      </FadeInSection>
      <AnimatedLineView />
      <FadeInSection delay={100}>
        <div className="flex justify-between items-center w-full my-10">
          <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 mb-10">
            <h2 className="text-[12vw] lg:text-[4vw] font-abhaya font-bold leading-none text-gray-900">
              I miei percorsi
            </h2>
            <Button href="/tutti-i-percorsi">Vedi tutti i percorsi</Button>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={50}>
        <PercorsiCarousel />
      </FadeInSection>
      <AnimatedLineView />
    </div>
  );
};

export default ToolsPage;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = strumentiIT;
      break;

    // case "en":
    //   obj = percorsiEN;
    //   break;

    default:
      obj = strumentiIT;
      break;
  }

  return {
    props: {
      translation: obj?.strumenti,
    },
    revalidate: 60,
  };
}

import React from "react";
import VerticalAnimatedLine from "../AnimatedLine/VerticalAnimatedLine";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Button from "../layout/Button";
import FadeInSection from "../layout/FadeInSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StrumentiSection = () => {
  const items = [
    {
      title: "Counseling Professionale",
      text: "Un percorso di ascolto empatico e non giudicante, utile nei momenti di crisi, cambiamento o indecisione. ",
      icon: "/assets/couns.svg",
    },
    {
      title: "Orientamento specialistico e bilancio delle competenze",
      text: "Un percorso su misura per fare chiarezza sul tuo profilo professionale, individuare i tuoi punti di forza e costruire un progetto coerente con i tuoi obiettivi. ",
      icon: "/assets/rebirth.svg",
    },
    {
      title: "Accompagnamento al lavoro e consulenza di carriera",
      text: "Dedicato a giovani, adulti e professionisti che desiderano orientarsi o cambiare direzione. ",
      icon: "/assets/orient.svg",
    },
    {
      title: "Genealogia & Storia di Famiglia",
      text: "Un viaggio nelle tue origini, per ricostruire la storia delle radici familiari attraverso documenti, testimonianze e archivi. ",
      icon: "/assets/form.svg",
    },
    {
      title: "Consulenze Aziendali",
      text: "Supporto per dipendenti, career counseling, orientamento, politiche attive, tutoraggio, ricerca e selezione, head hunting, design thinking olistico e scouting per tirocini.",
      icon: "/assets/az.svg",
    },
    {
      title: "Psicogenealogia junghiana®",
      text: "Albero genealogico delle professioni.",
      icon: "/assets/gene.svg",
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between my-10">
      <div className="w-full  h-full order-last xl:order-first gap-4 md:gap-10 ">
        <FadeInSection delay={100}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className=" !mt-10 lg:!pb-10 !px-0"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-14 bg-gray80/30 h-[450px] lg:h-[320px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
                  <div className="h-[50px] w-[50px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                      {item.title}
                    </h3>
                    <p className="text-gray90">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Slide extra per il bottone */}
            <SwiperSlide>
              <div className="flex items-center justify-center  h-[400px] lg:h-[320px] p-8 ">
                <Button href="/i-miei-strumenti">vedi tutti</Button>
              </div>
            </SwiperSlide>
          </Swiper>
        </FadeInSection>
      </div>

      {/* <div className="w-full xl:w-[40%] lg:h-screen flex flex-col lg:justify-between order-first xl:order-last p-2">
        <div>
          <h2 className="font-abhaya font-semibold text-[30px] md:text-[38px] 2xl:text-[48px] leading-none text-gray100">
            I miei strumenti: tra tradizione e innovazione
          </h2>

          <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
            Nel mio percorso di oltre 37 anni nel mondo del lavoro, ho integrato
            strumenti consolidati del counseling, della formazione e
            dell’orientamento professionale con approcci olistici per il
            benessere personale e relazionale.
          </p>
          <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
            Credo che ogni persona abbia risorse uniche da valorizzare e che la
            crescita personale e professionale passi dall’ascolto profondo e
            dalla consapevolezza di sé.
          </p>
          <p className="font-work font-regular text-base md:text-[18px] text-gray90 my-6 flex-grow flex items-center">
            Nel mio studio – online e in presenza – troverai uno spazio sicuro,
            accogliente e non giudicante, dove essere ascoltatə e guidatə con
            cura, rispetto e professionalità. Ogni percorso è unico: insieme
            possiamo trovare nuove strade, riconoscere e scoprire talenti e
            mettere le basi per il futuro che desideri.
          </p>
        </div>

        <Button href="/i-miei-strumenti">Tutti i miei strumenti</Button>
      </div> */}
    </div>
  );
};

export default StrumentiSection;

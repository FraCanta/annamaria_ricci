import React, { useState } from "react";
import Image from "next/image";
import Button from "../layout/Button";
import FadeInSection from "../layout/FadeInSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/pagination";

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
  ];

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(items.length > 1);

  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between lg:my-10 relative">
      <div className="w-full h-full order-last xl:order-first gap-4 md:gap-10">
        <FadeInSection delay={100}>
          <Swiper
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            grabCursor={true}
            loop={false}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              prevEl: ".pre",
              nextEl: ".nex",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              setShowPrev(!swiper.isBeginning);
              setShowNext(!swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setShowPrev(!swiper.isBeginning);
              setShowNext(!swiper.isEnd);
            }}
            className="!mt-10 lg:!pb-6 !px-0"
          >
            <FadeInSection delay={100}>
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col gap-14 bg-gray80/30 h-[350px] lg:h-[320px] p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
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
            </FadeInSection>

            {/* Slide extra per il bottone */}
            <SwiperSlide>
              <div className="flex items-center justify-center h-[400px] lg:h-[320px] p-8">
                <Button href="/i-miei-strumenti">vedi tutti</Button>
              </div>
            </SwiperSlide>

            <div className="relative flex w-full lg:mt-10">
              <div className="mt-10 swiper-pagination"></div>
            </div>
          </Swiper>

          {/* Frecce sempre nel DOM */}
          <button
            className={`pre absolute top-1/2 left-2 lg:-left-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
              hover:bg-purple100 hover:text-white
              ${showPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Previous slide"
          >
            <Icon icon="prime:chevron-left" width={30} className="text-main" />
          </button>

          <button
            className={`nex absolute top-1/2 right-2 lg:-right-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
              hover:bg-purple100 hover:text-white
              ${showNext ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Next slide"
          >
            <Icon icon="prime:chevron-right" width={30} className="text-main" />
          </button>
        </FadeInSection>
      </div>
    </div>
  );
};

export default StrumentiSection;

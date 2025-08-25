import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../layout/Button";
import FadeInSection from "../layout/FadeInSection";
import { Icon } from "@iconify/react";

// Struttura percorsi divisa per tab
const percorsiPerTab = {
  privati: [
    {
      id: 1,
      title: "Trova la tua direzione",
      image: "/assets/trova_la_tua_direzione2.webp",
      link: "/tutti-i-percorsi/privati/trova-la-tua-direzione",
    },
    {
      id: 2,
      title: "Cambia e trova la tua strada nel lavoro",
      image: "/assets/cambia_e_trova_la_tua_strada_nel_lavoro_2.jpg",
      link: "/tutti-i-percorsi/privati/cambia-e-trova-la-tua-strada-nel-lavoro",
    },
    {
      id: 3,
      title: "Trova il lavoro che desideri",
      image: "/assets/trova_il_lavoro_che_desideri.jpg",
      link: "/tutti-i-percorsi/privati/trova-il-lavoro-che-desideri",
    },
    {
      id: 4,
      title: "Trova le tue radici",
      image: "/assets/cerca_le_tue_radici.jpg",
      link: "/tutti-i-percorsi/privati/trova-le-tue-radici",
    },
  ],
  "libera professione": [
    {
      id: 5,
      title: "Avvia la tua attività con consapevolezza",
      image: "/assets/avvia_la_tua_attività_con_consapevolezza.jpg",
      link: "/tutti-i-percorsi/libera-professione/avvia-la-tua-attività-con-consapevolezza",
    },
  ],
  organizzazioni: [
    {
      id: 6,
      title: "Soluzioni su misura per crescere",
      image: "/assets/soluzioni_su_misura_per_crescere.jpg",
      link: "/tutti-i-percorsi/organizzazioni/soluzioni-su-misura-per-crescere",
    },
  ],
};

const tabs = ["privati", "libera professione", "organizzazioni"];

const PercorsiCarousel = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const percorsi = percorsiPerTab[activeTab] || [];

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(percorsi.length > 1);

  return (
    <div className="w-full my-10">
      {/* Tabs */}
      <FadeInSection delay={50}>
        <div className="flex gap-y-4 gap-x-6 lg:gap-10 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowPrev(false);
                setShowNext((percorsiPerTab[tab] || []).length > 1);
              }}
              className={`uppercase lg:text-lg rounded-sm border transition font-work ${
                activeTab === tab
                  ? "underline underline-offset-4 underline-purple100 text-purple100 "
                  : "bg-transparent text-gray70 hover:text-purple100 hover:underline hover:underline-offset-4"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </FadeInSection>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="relative w-full overflow-visible"
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          grabCursor={true}
          loop={false} // disattiviamo il loop così ha senso nascondere le frecce
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          onSlideChange={(swiper) => {
            setShowPrev(!swiper.isBeginning);
            setShowNext(!swiper.isEnd);
          }}
          onAfterInit={(swiper) => {
            setShowPrev(!swiper.isBeginning);
            setShowNext(!swiper.isEnd);
          }}
          className="!px-0"
        >
          {percorsi.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="flex flex-col bg-gray80/30 hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2 p-3"
                title={post.title}
              >
                <FadeInSection delay={100}>
                  <div className="relative w-full h-[400px] lg:h-[600px] rounded-sm overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gray100/40"></div>
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-10 ">
                      <h3 className="font-abhaya font-bold text-[8vw] md:text-[4vw] lg:text-[2.6vw] leading-none text-white">
                        {post.title}
                      </h3>
                      <Button className="mt-4" href={post.link}>
                        Scopri di più
                      </Button>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </SwiperSlide>
          ))}

          <div className="relative flex w-full mt-10">
            <div className="mt-10 swiper-pagination"></div>
          </div>
        </Swiper>

        {/* Navigation Buttons */}
        {percorsi.length > 1 && (
          <>
            <button
              className={`prev absolute top-1/2 left-2 lg:-left-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
        hover:bg-purple100 hover:text-white 
        ${
          showPrev
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
              aria-label="Previous slide"
            >
              <Icon
                icon="prime:chevron-left"
                width={24}
                className="text-main"
              />
            </button>

            <button
              className={`next absolute top-1/2 right-2 lg:-right-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
        hover:bg-purple100 hover:text-white 
        ${
          showNext
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
              aria-label="Next slide"
            >
              <Icon
                icon="prime:chevron-right"
                width={24}
                className="text-main"
              />
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default PercorsiCarousel;

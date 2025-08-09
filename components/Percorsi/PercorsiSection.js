import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Button from "../layout/Button";
import FadeInSection from "../layout/FadeInSection";
import ButtonOutline from "../layout/ButtonOutline";

// Struttura percorsi divisa per tab
const percorsiPerTab = {
  privati: [
    {
      id: 1,
      title: "Trova la tua direzione",
      image: "/assets/trova_la_tua_direzione.avif",
      link: "/privati1",
    },
    {
      id: 2,
      title: "Cambia e trova la tua strada nel lavoro",
      image: "/assets/cambia_e_trova_la_tua_strada_nel_lavoro_2.jpg",
      link: "/privati2",
    },
    {
      id: 3,
      title: "Trova il lavoro che desideri",
      image: "/assets/trova_il_lavoro_che_desideri.jpg",
      link: "/privati2",
    },
    {
      id: 4,
      title: "Trova le tue radici",
      image: "/assets/cerca_le_tue_radici.jpg",
      link: "/privati2",
    },
  ],
  "libera professione": [
    {
      id: 5,
      title: "Avvia la tua attività con consapevolezza",
      image: "/assets/avvia_la_tua_attività_con_consapevolezza.jpg",
      link: "/liberaprof1",
    },
  ],
  organizzazioni: [
    {
      id: 6,
      title: "Soluzioni su misura per crescere",
      image: "/assets/soluzioni_su_misura_per_crescere.jpg",
      link: "/organizzazioni1",
    },
  ],
};

const tabs = ["privati", "libera professione", "organizzazioni"];

const PercorsiCarousel = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const percorsi = percorsiPerTab[activeTab] || [];

  return (
    <div className="w-full lg:my-20">
      {/* Tabs */}
      <FadeInSection delay={50}>
        <div className="flex gap-10 overflow-x-auto whitespace-nowrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-lg rounded-sm border transition   ${
                activeTab === tab
                  ? "underline underline-offset-4 underline-purple100 text-purple100 "
                  : "bg-transparent  text-gray70 hover:text-purple100 hover:underline hover:underline-offset-4"
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
          grabCursor={true}
          loop={percorsi.length > 1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-0"
        >
          {percorsi.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="flex flex-col bg-gray80/30 hover:border hover:border-gray100 hover:rounded-lgtransition-all duration-500 hover:p-2 p-3"
                title={post.title}
              >
                <div className="relative w-full h-[400px] lg:h-[600px]  rounded-sm overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gray100/40"></div>
                </div>
                <div className="absolute bottom-10 left-10 ">
                  <h3 className="font-abhaya font-bold text-[8vw] lg:text-[2.6vw] leading-none text-white">
                    {post.title}
                  </h3>
                  <Button className="mt-4" href={post.link}>
                    Scopri di più
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default PercorsiCarousel;

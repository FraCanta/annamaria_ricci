import React, { useEffect, useState } from "react";
import percorsiIT from "@/public/locales/it/percorsi.json";
import Image from "next/image";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import FadeInSection from "@/components/layout/FadeInSection";
import Button from "@/components/layout/Button";
import ButtonOutline from "@/components/layout/ButtonOutline";
import Head from "next/head";
import { Icon } from "@iconify/react";

function SinglePercorso({ percorsi, others }) {
  const [animate, setAnimate] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // delay iniziale
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>{percorsi.seoTitle}</title>
        <meta name="description" content={percorsi.description} />
        <meta property="og:title" content={percorsi.seoTitle} />
        <meta property="og:description" content={percorsi.description} />
        <meta property="og:image" content={percorsi.img} />
      </Head>
      <div className="my-10 lg:my-20">
        <h1
          dangerouslySetInnerHTML={{
            __html: percorsi.name,
          }}
          className={`lg:absolute lg:inset-0 lg:pt-[16vw] z-10 p-2 text-[9vw] text-center w-full transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] leading-none lg:text-[4.5vw] flex justify-center text-gray100 my-10 font-abhaya font-bold ${
            animate
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-sm translate-y-4"
          }`}
        ></h1>
        <div
          className={`relative lg:inset-0 lg:absolute aspect-square lg:h-[800px] w-full transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"}`}
        >
          <Image
            src={percorsi.img}
            alt={percorsi.name}
            fill
            className="absolute  w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 lg:mt-[750px]">
        <AnimatedLineView />
        <div className="my-10 lg:my-20 flex flex-col gap-4">
          <FadeInSection delay={100}>
            <h2 className="font-abhaya font-[400] text-[25px] md:text-[30px] 2xl:text-[3vw] leading-none text-gray100 ">
              {percorsi.introTitle && percorsi.introTitle}
            </h2>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="font-work font-normal text-base md:text-[1.2vw] text-gray90 leading-snug">
              {percorsi.description && percorsi.description}
            </p>
          </FadeInSection>
        </div>
        <AnimatedLineView />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 lg:my-20">
          <FadeInSection delay={100}>
            <h2 className="font-abhaya font-[400] text-[28px] md:text-[30px] 2xl:text-[3vw] leading-none text-gray100 ">
              {percorsi.offro.title}
            </h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <ul className="flex flex-col gap-4 list-disc list-inside">
              {percorsi.offro.items.map((item, index) => (
                <li
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={index}
                  className="text-gray90 text-base lg:text-[20px] leading-snug font-work font-[400]"
                ></li>
              ))}
            </ul>
          </FadeInSection>
        </div>
        <AnimatedLineView />
        {/* Come funziona il percorso */}

        <div className="flex flex-col gap-10 my-10 lg:my-20">
          <FadeInSection delay={100}>
            <h2 className="font-abhaya font-[400] text-[28px] md:text-[30px] 2xl:text-[3vw] leading-none text-gray100 ">
              {percorsi.howTo.title}
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <FadeInSection delay={100}>
              <div className="flex flex-col gap-10 bg-gray80/30 h-auto lg:h-[300px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
                <div className="h-[30px] w-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 45 45"
                  >
                    <g
                      id="Gruppe_984"
                      data-name="Gruppe 984"
                      transform="translate(-104 -1865.5)"
                    >
                      <line
                        id="Linie_161"
                        data-name="Linie 161"
                        y2="45"
                        transform="translate(126.5 1865.5)"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      ></line>
                      <line
                        id="Linie_162"
                        data-name="Linie 162"
                        x1="45"
                        transform="translate(104 1888)"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      ></line>
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                    {percorsi.howTo.step1.title}
                  </h3>
                  <ul className="flex flex-col gap-2 list-disc list-inside">
                    {percorsi.howTo.step1.list.map((item, index) => (
                      <li
                        dangerouslySetInnerHTML={{ __html: item }}
                        key={index}
                        className="text-gray90 text-base lg:text-[18px] leading-snug font-work"
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
            {percorsi.howTo.step2 && (
              <FadeInSection delay={200}>
                <div className="flex flex-col gap-10 bg-gray80/30 h-auto lg:h-[300px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
                  <div className="h-[30px] w-[30px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 45 45"
                    >
                      <g
                        id="Gruppe_984"
                        data-name="Gruppe 984"
                        transform="translate(-104 -1865.5)"
                      >
                        <line
                          id="Linie_161"
                          data-name="Linie 161"
                          y2="45"
                          transform="translate(126.5 1865.5)"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        ></line>
                        <line
                          id="Linie_162"
                          data-name="Linie 162"
                          x1="45"
                          transform="translate(104 1888)"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        ></line>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                      {percorsi.howTo.step2.title}
                    </h3>
                    <ul className="flex flex-col gap-4 list-disc list-inside">
                      {percorsi.howTo.step2.target.map((item, index) => (
                        <li
                          dangerouslySetInnerHTML={{ __html: item }}
                          key={index}
                          className="text-gray90 text-base lg:text-[18px] leading-snug font-work"
                        ></li>
                      ))}
                    </ul>
                  </div>
                </div>{" "}
              </FadeInSection>
            )}
          </div>
        </div>
        <AnimatedLineView />
        <div className="flex flex-col gap-4 my-10 lg:my-20">
          <FadeInSection delay={100}>
            <h2 className="font-abhaya font-bold text-[8vw] lg:text-[4vw] leading-none text-gray100 text-center">
              Inizia ora il tuo viaggio verso il cambiamento
            </h2>
          </FadeInSection>
          <div className="flex justify-center">
            <FadeInSection delay={100}>
              <ButtonOutline
                target="_blank"
                href="https://calendly.com/welcome-annamariaricci/30min"
              >
                Prenota una consulenza
              </ButtonOutline>
            </FadeInSection>
          </div>
        </div>
        <AnimatedLineView />
        {percorsi.oneshot && percorsi.tailored && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-20">
            <FadeInSection delay={100}>
              <div className="flex flex-col gap-10 bg-gray80/30 h-auto lg:h-[300px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
                <div className="flex flex-col gap-4 h-full justify-between">
                  <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                    {percorsi.oneshot.title}
                  </h3>
                  <p className="text-gray90 text-base lg:text-[18px] leading-snug font-work">
                    {percorsi.oneshot.description}
                  </p>
                  <p
                    className="text-gray90 text-base lg:text-[18px] leading-snug font-work"
                    dangerouslySetInnerHTML={{ __html: percorsi.oneshot.p }}
                  ></p>
                  <Button
                    className="mt-4"
                    href="https://calendly.com/welcome-annamariaricci/30min"
                  >
                    Prenota una consulenza
                  </Button>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="flex flex-col gap-10 bg-gray80/30 h-auto lg:h-[300px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-4">
                    {" "}
                    <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100 ">
                      {percorsi.tailored.title}
                    </h3>
                    <p
                      className="text-gray90 text-base lg:text-[18px] leading-snug font-work"
                      dangerouslySetInnerHTML={{
                        __html: percorsi.tailored.description,
                      }}
                    ></p>
                  </div>

                  <Button className="mt-4" href="/contatti">
                    Contattami
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        )}
        <AnimatedLineView />
        <FadeInSection delay={200}>
          <div className="flex justify-between items-center w-full my-10">
            <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-6 ">
              <h2 className="text-[8vw] lg:text-[3vw] font-abhaya font-bold leading-none text-gray-900">
                I miei percorsi
              </h2>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={200}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="relative w-full overflow-visible mb-20"
          >
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              grabCursor={true}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              onSwiper={(swiper) => {
                setShowPrev(!swiper.isBeginning);
                setShowNext(!swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setShowPrev(!swiper.isBeginning);
                setShowNext(!swiper.isEnd);
              }}
              loop={percorsi.length > 1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              className="!px-0"
            >
              {others.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="flex flex-col bg-gray80/30 hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2 p-3">
                    <div className="relative w-full h-[400px] lg:h-[600px]  rounded-sm overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-gray100/40"></div>
                      <div className="absolute top-4  right-4 lg:top-10  lg:right-10 bg-purple100 text-white uppercase max-w-max px-4 py-2 rounded-sm">
                        <p>{post.cat}</p>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-10 ">
                        <h3
                          dangerouslySetInnerHTML={{ __html: post.name }}
                          className="font-abhaya font-bold text-[8vw] md:text-[4vw] lg:text-[2.6vw] leading-none text-white"
                        ></h3>
                        <Button className="mt-4" href={post.link}>
                          Scopri di più
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="relative flex w-full mt-10">
                <div className="mt-10 swiper-pagination"></div>
              </div>
            </Swiper>
            {/* Frecce sempre nel DOM */}
            <button
              className={`prev absolute top-1/2 left-2 lg:-left-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
                          hover:bg-purple100 hover:text-white
                          ${
                            showPrev
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
              aria-label="Previous slide"
            >
              <Icon
                icon="prime:chevron-left"
                width={30}
                className="text-main"
              />
            </button>

            <button
              className={`next absolute top-1/2 right-2 lg:-right-6 z-10 p-2 bg-white shadow-md rounded-full transition-all duration-300 
                          hover:bg-purple100 hover:text-white
                          ${
                            showNext
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
              aria-label="Next slide"
            >
              <Icon
                icon="prime:chevron-right"
                width={30}
                className="text-main"
              />
            </button>
          </motion.div>
        </FadeInSection>

        <AnimatedLineView />
      </div>
    </>
  );
}

export default SinglePercorso;

export async function getStaticProps({ params, locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = percorsiIT;
      break;
    default:
      obj = percorsiIT;
      break;
  }

  const { cat, title } = params;

  const targetObj = obj?.percorsi?.singlePercorsi?.[title];

  const others = Object.keys(obj?.percorsi?.singlePercorsi)
    .filter((key) => key !== title)
    .map((key) => obj.percorsi.singlePercorsi[key]);

  return {
    props: {
      percorsi: targetObj,
      others,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = percorsiIT;
      break;
    default:
      obj = percorsiIT;
      break;
  }

  const paths = Object.values(obj.percorsi.singlePercorsi).map((el) => ({
    params: {
      cat: el.cat,
      title: el.title,
    },
    locale: "it",
  }));

  return {
    paths,
    fallback: false,
  };
}

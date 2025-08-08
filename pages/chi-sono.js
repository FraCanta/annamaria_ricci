import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Button from "@/components/layout/Button";
import FadeInSection from "@/components/layout/FadeInSection";
import HeroAbout from "@/components/layout/HeroAbout";
import PercorsiSection from "@/components/Percorsi/PercorsiSection";
import Reviews from "@/components/Reviews/Reviews";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function ChiSono() {
  return (
    <>
      <Head>
        <title>Chi Sono - Anna Maria Ricci</title>
      </Head>

      <HeroAbout />
      <AnimatedLineView />
      <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
        <h2 className="text-[12vw] font-abhaya font-bold leading-none text-gray-900">
          <FadeInSection delay={100}>
            <span
              className={`block pl-[15%] transition-[padding-left] duration-500 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)]`}
            >
              Questo è ciò che
            </span>
          </FadeInSection>
          <FadeInSection delay={200}>
            <span className="flex w-full justify-between items-center gap-2">
              <span>distingue</span> <span>il mio</span>
            </span>
          </FadeInSection>

          <FadeInSection delay={400}>
            <span className="flex justify-end">approccio</span>
          </FadeInSection>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-14 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
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
                  Libertà
                </h3>
                <p className="text-gray200">
                  La libertà è alla base del mio lavoro, permettendo a ogni
                  individuo di esprimere la propria autenticità.
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex flex-col gap-14 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
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
                  Evoluzione
                </h3>
                <p className="text-gray200">
                  Credo nell'evoluzione continua, sia personale che
                  professionale, e mi impegno a crescere e adattarmi in un mondo
                  in costante cambiamento.
                </p>
              </div>
            </div>{" "}
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="flex flex-col gap-14 bg-gray80/30 h-[280px]  p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500">
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
                  Fiducia
                </h3>
                <p className="text-gray200">
                  La fiducia è fondamentale per costruire relazioni autentiche e
                  durature, sia con i clienti che con i collaboratori.
                </p>
              </div>
            </div>{" "}
          </FadeInSection>
        </div>
      </div>
      <AnimatedLineView />
      <div className="min-h-screen mt-20 relative mb-20 lg:mb-10">
        <FadeInSection delay={50}>
          <Image
            src="/assets/annamaria2.png"
            alt="Hero"
            width={1500}
            height={1500}
            className="w-full lg:h-[80vh] object-cover"
          />
        </FadeInSection>
      </div>

      <AnimatedLineView />
      <div className="flex justify-between items-center w-full my-10">
        <FadeInSection delay={50}>
          <h2 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100">
            I miei percorsi
          </h2>
        </FadeInSection>
        <FadeInSection delay={50}>
          <Button href="/percorsi">Vedi tutti i percorsi</Button>
        </FadeInSection>
      </div>
      <FadeInSection delay={50}>
        <PercorsiSection />
      </FadeInSection>
      <AnimatedLineView />
      <FadeInSection delay={50}>
        <Reviews />
      </FadeInSection>
    </>
  );
}

export default ChiSono;

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

const HeroHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[calc(80vh-90px)] w-full my-10">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full  items-center gap-y-4">
        {/* TESTO */}
        <div className="w-full lg:w-[55%] py-4 flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-2">
            <h1
              className={`font-abhaya font-bold text-[10vw] lg:text-[5vw] leading-none text-gray100 transition-[filter,transform] duration-700 ease-[cubic-bezier(0.44,0,0.25,0.99)] ${
                animate ? "blur-0 translate-y-0" : "blur-sm translate-y-1"
              }`}
            >
              Anna Maria Ricci
            </h1>

            <p
              className={`font-abhaya font-regular text-[20px] md:text-[30px] leading-tight text-gray90 transition-[filter,transform] duration-700 ease-[cubic-bezier(0.44,0,0.25,0.99)] ${
                animate ? "blur-0 translate-y-0" : "blur-sm translate-y-1"
              }`}
            >
              Consulenze e Servizi di Orientamento, Miglioramento, Evoluzione
            </p>
          </div>

          {/* BOTTONI */}
          <div
            className={`flex flex-col md:flex-row gap-4 lg:gap-10 lg:items-center transition-[filter,transform] duration-700 ease-in-out ${
              animate ? "blur-0 translate-y-0" : "blur-sm translate-y-2"
            }`}
          >
            <Button href="/tutti-i-percorsi">Scopri i miei percorsi</Button>
            <ButtonOutline href="/prenota-la-tua-consulenza">
              Chiedi una consulenza
            </ButtonOutline>
          </div>
          <div
            className={`flex flex-col gap-2 transition-[filter,transform] duration-700 ease-in-out ${
              animate ? "blur-0 translate-y-0" : "blur-sm translate-y-2"
            }`}
          >
            <h2 className="font-abhaya font-regular text-[18px] md:text-[1.4vw]  leading-none text-gray90 ">
              “Ogni orientamento presuppone un disorientamento”
            </h2>
            <p className="font-abhaya font-bold text-base md:text-[20px] leading-none text-gray100/80 ">
              Hans Magnus Enzensberger
            </p>
          </div>
        </div>

        {/* IMMAGINE */}
        <div className=" w-full lg:w-[40%] relative flex justify-end overflow-hidden">
          <div
            className={`w-full h-[60vh] md:h-[80vh] relative transition-[filter,transform] duration-700 ease-[cubic-bezier(0.44,0,0.25,0.99)] ${
              animate ? "scale-100 blur-0" : "scale-[1.03] blur-sm"
            }`}
          >
            <Image
              src="/assets/Io.jpg"
              alt="Ritratto di Anna Maria Ricci"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, 95vw"
              className="md:w-[600px] h-full w-full absolute top-0 right-0 object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

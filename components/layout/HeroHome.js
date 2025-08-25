import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import FadeInSection from "./FadeInSection";

const HeroHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // delay iniziale
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[calc(80vh-90px)] w-full my-10">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full  items-center gap-y-4">
        {/* TESTO */}
        <div className="w-full lg:w-[55%] py-4 flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col gap-2">
            <h1
              className={`font-abhaya font-bold text-[10vw] lg:text-[5vw] leading-none text-gray100 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
            >
              Anna Maria Ricci
            </h1>

            <p
              className={`font-abhaya font-regular text-[20px] md:text-[30px]   leading-tight text-gray90 
    transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] delay-200 
    ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
            >
              Consulenze e Servizi di Orientamento, Miglioramento, Evoluzione.
            </p>
          </div>

          {/* BOTTONI */}
          <div
            className={`flex flex-col md:flex-row gap-4 lg:gap-10 lg:items-center 
              transition-all duration-1000 ease-in-out delay-500
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
          >
            <Button href="/tutti-i-percorsi">Scopri i miei percorsi</Button>
            <ButtonOutline href="/">Chiedi una consulenza</ButtonOutline>
          </div>
          <div
            className={`flex flex-col gap-2  transition-all duration-1000 ease-in-out delay-600
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
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
            className={`transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"} 
              w-full h-[60vh] md:h-[80vh]  relative`}
          >
            <Image
              src="/assets/Io.jpg"
              alt="Hero Home"
              fill
              className="md:w-[600px] h-full w-full absolute top-0 right-0 object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

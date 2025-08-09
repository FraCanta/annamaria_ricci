import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

const HeroHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // delay iniziale
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen md:h-[calc(100vh-90px)] w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full py-4 items-center gap-y-4">
        {/* TESTO */}
        <div className="w-full lg:w-[55%] py-4 flex flex-col gap-6 lg:gap-10">
          <h1
            className={`font-abhaya font-bold text-[10vw] md:text-[6vw] leading-none text-gray100 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
          >
            Esperta in crescita personale e professionale
          </h1>

          <p
            className={`font-abhaya font-regular text-[18px] md:text-[28px] 2xla:text-[30px] leading-tight text-gray90 
    transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] delay-200 
    ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
          >
            Accompagno persone e organizzazioni a scoprire e valorizzare le
            proprie risorse, unendo strumenti tradizionali e approcci olistici
            per una crescita autentica, consapevole e sostenibile.
          </p>

          {/* BOTTONI */}
          <div
            className={`flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center 
              transition-all duration-1000 ease-in-out delay-500
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
          >
            <Button href="/">Scopri i miei percorsi</Button>
            <ButtonOutline href="/">
              Contattami per una consulenza
            </ButtonOutline>
          </div>
        </div>

        {/* IMMAGINE */}
        <div className=" w-full lg:w-[40%] h-full relative flex justify-end overflow-hidden">
          <div
            className={`transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"} 
              w-full h-[50vh] lg:h-full relative`}
          >
            <Image
              src="/assets/Io.jpg"
              alt="Hero Home"
              fill
              className="md:w-[800px] h-full w-full absolute top-0 right-0 object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

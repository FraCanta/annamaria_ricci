"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // delay iniziale
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen md:h-[calc(100vh-90px)] w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full py-4 items-center">
        {/* TESTO */}
        <div className="w-full lg:w-[55%] py-4 flex flex-col gap-4 lg:gap-10">
          <h1
            className={`font-abhaya font-bold text-[35px] md:text-[60px] 2xla:text-[75px] leading-none text-gray100 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
          >
            La passione mi ha portato qui. Sono convinta che un lavoro non sia
            solo un lavoro.
          </h1>

          <h2
            className={`font-abhaya font-bold text-[35px] md:text-[60px] 2xla:text-[75px] leading-none text-gray90 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] delay-200 
              ${animate ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
          >
            È chi sei tu. <br /> E ne ho le prove.
          </h2>

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
            <div className="flex gap-4 lg:gap-10 items-center">
              <Link
                href="/"
                className="bg-purple100 text-sm text-white px-[18px] py-[16px] rounded-sm transition duration-200 max-w-max uppercase flex items-center gap-2"
              >
                sei un'azienda?
                <Icon
                  icon="lets-icons:arrow-right-light"
                  width="24"
                  height="24"
                />
              </Link>
              <p className="font-abhaya uppercase text-base">oppure</p>
            </div>
            <Link
              href="/"
              className="border border-purple100 text-sm text-purple100 px-[18px] py-[16px] rounded-sm transition duration-200 max-w-max uppercase flex items-center gap-2"
            >
              sei un professionista?
              <Icon
                icon="lets-icons:arrow-right-light"
                width="24"
                height="24"
              />
            </Link>
          </div>
        </div>

        {/* IMMAGINE */}
        <div className="bg-gray80 w-full lg:w-[40%] h-full relative flex justify-end overflow-hidden">
          <div
            className={`transition-transform transition-filter duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"} 
              w-full h-full relative`}
          >
            <Image
              src="/assets/annamaria_foto.png"
              alt="Hero"
              fill
              className="md:w-[800px] h-full w-full absolute top-0 right-0 object-contain object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;

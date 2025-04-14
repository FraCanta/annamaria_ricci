import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const Mobile = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const navbarRef = useRef(null);

  // Funzione per l'Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Se l'elemento è visibile, iniziamo le animazioni
          const items = document.querySelectorAll(".logo, .nav__burger");

          // Animazione del logo e del menu burger
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove("opacity-0", "translate-y-4");
              item.classList.add("opacity-100", "translate-y-0");
            }, 300 + 200 * index); // Ritardo dinamico per il logo e burger
          });

          // Animazione delle linee del burger (crescita da 0px a 20px)
          const burgerLines = document.querySelectorAll(".nav__burger__line");
          burgerLines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add("width-20", "opacity-100");
            }, 500 + 100 * index); // Ritardo per ciascuna linea
          });
        }
      },
      { threshold: 0.5 } // Quando l'elemento è visibile per il 50%
    );

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="py-4 flex items-center justify-between lg:hidden"
        ref={navbarRef}
      >
        {/* Logo con animazione */}
        <div
          className="flex items-center logo opacity-0 translate-y-4 transition-all duration-500"
          style={{
            transitionDelay: `calc(0.05s * 0 + 0.3s)`, // Ritardo per il logo
          }}
        >
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={95}
            height={93}
            className="w-[95px] h-[50px] md:w-[120px] md:h-[100px]"
          />
        </div>

        {/* Burger menu con linee che si animano */}
        <button className="nav__burger" style={{ "--length": 2 }}>
          <div
            className="nav__burger__line opacity-0 translate-y-0 transition-all duration-500"
            style={{ "--index": 0 }}
          >
            <div className="nav__burger__line__fill"></div>
          </div>
          <div
            className="nav__burger__line opacity-0 translate-y-0 transition-all duration-500"
            style={{ "--index": 1 }}
          >
            <div className="nav__burger__line__fill"></div>
          </div>
        </button>
      </div>
      <div className="block lg:hidden">
        <AnimatedLineView />
      </div>
    </>
  );
};

export default Mobile;

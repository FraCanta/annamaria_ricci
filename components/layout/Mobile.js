import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { Icon } from "@iconify/react";
import AccordionItem from "../AccordionItem/AccordionItem";
const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = document.querySelectorAll(".logo, .nav__burger");

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove("opacity-0", "translate-y-4");
              item.classList.add("opacity-100", "translate-y-0");
            }, 300 + 200 * index);
          });

          const burgerLines = document.querySelectorAll(".nav__burger__line");
          burgerLines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add("width-20", "opacity-100");
            }, 500 + 100 * index);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (navbarRef.current) observer.observe(navbarRef.current);
    return () => {
      if (navbarRef.current) observer.unobserve(navbarRef.current);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      // Animazione di entrata delle voci del menu
      const menuItems = document.querySelectorAll(".menu-item");
      gsap.fromTo(
        menuItems,
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.3,
          stagger: 0.1, // Ogni voce si anima con un piccolo ritardo
          ease: "power2.out",
        }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className="py-4 flex items-center  justify-between lg:hidden relative z-50"
        ref={navbarRef}
      >
        {/* Logo con animazione */}
        <Link
          href={"/"}
          className="flex items-center logo opacity-0 translate-y-4 transition-all duration-500"
          style={{
            transitionDelay: `calc(0.05s * 0 + 0.3s)`,
          }}
        >
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={95}
            height={93}
            className="w-[95px] h-[50px] md:w-[130px] md:h-[110px]"
          />
        </Link>

        {/* Burger menu con trasformazione in X */}
        <button
          className="nav__burger"
          style={{ "--length": 2 }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div
            className={`nav__burger__line transition-all duration-500 ${
              menuOpen
                ? "rotate-45 translate-y-[4px] width-20 opacity-100"
                : "width-20 opacity-100"
            }`}
            style={{ "--index": 0 }}
          >
            <div className="nav__burger__line__fill"></div>
          </div>
          <div
            className={`nav__burger__line transition-all duration-500 ${
              menuOpen
                ? "-rotate-45 -translate-y-[4px] width-20 opacity-100"
                : "width-20 opacity-100"
            }`}
            style={{ "--index": 1 }}
          >
            <div className="nav__burger__line__fill"></div>
          </div>
        </button>
      </nav>

      {/* Animated line */}
      <div className="flex lg:hidden ">
        <AnimatedLineView />
      </div>

      {/* Menu a sipario */}
      <div
        className={`fixed lg:hidden top-0 left-0 w-full h-dvh bg-gray80 overflow-hidden z-20 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-[100vh]"
        }`}
      >
        <div className="flex flex-col mt-32 md:mt-48 w-[95%] mx-auto h-full gap-4 text-[8vw]  font-work ">
          <Link
            href="/"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/i-miei-strumenti"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Strumenti
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`menu-item group w-full flex justify-between items-center py-2 text-left duration-300 transition-all 
         `}
          >
            {/* Titolo con px condizionale */}
            <h4
              className={`font-work   my-2 leading-none text-gray100 transition-all duration-300 
          `}
            >
              <span>Percorsi</span>
            </h4>

            {/* Icona + che ruota in X */}
            <span
              className={`relative w-5 h-5 flex items-center justify-center transition-transform duration-300 mr-6 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            >
              {/* Linea verticale */}
              <span className="absolute h-5 w-[2px] bg-gray100" />
              {/* Linea orizzontale */}
              <span className="absolute w-5 h-[2px] bg-gray100" />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 
              
            `}
          >
            {/* <div className="py-10">sottomenu</div> */}
          </div>
          <Link
            href="#contatti"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Respiro
          </Link>
          {/* <Link
            href="/blog"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link> */}
          <Link
            href="/chi-sono"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Chi sono
          </Link>
          <Link
            href="/contatti"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Contatti
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mobile;

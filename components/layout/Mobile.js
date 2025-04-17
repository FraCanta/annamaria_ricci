import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div
        className="py-4 flex items-center justify-between lg:hidden relative z-50"
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
            className="w-[95px] h-[50px] md:w-[120px] md:h-[100px]"
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
      </div>

      {/* Animated line */}
      <div className="block lg:hidden">
        <AnimatedLineView />
      </div>

      {/* Menu a sipario */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray80 z-40 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col mt-32 w-[90%] mx-auto h-full gap-6 text-3xl font-medium">
          <Link
            href="#servizi"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Servizi
          </Link>
          <Link
            href="#percorsi"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Percorsi
          </Link>
          <Link
            href="/chi-sono"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Chi siamo
          </Link>
          <Link
            href="#contatti"
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

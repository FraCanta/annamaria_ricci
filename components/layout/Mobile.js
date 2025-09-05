import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import AccordionItem from "../AccordionItem/AccordionItem";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [percorsiOpen, setPercorsiOpen] = useState(false);

  // Animazione all'entrata del navbar
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

  // Animazione entrata voci menu con GSAP
  useEffect(() => {
    if (menuOpen) {
      const menuItems = document.querySelectorAll(".menu-item");
      gsap.fromTo(
        menuItems,
        { opacity: 0, y: 30, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className="w-[95%] mx-auto py-4  flex items-center justify-between lg:hidden relative z-50"
        ref={navbarRef}
      >
        {/* Logo */}
        <Link
          title="Torna alla homepage"
          href="/"
          className="flex items-center logo opacity-0 translate-y-4 transition-all duration-500"
          style={{ transitionDelay: `calc(0.05s * 0 + 0.3s)` }}
        >
          <Image
            src="/assets/logo_annamaria.svg"
            alt="Logo"
            width={95}
            height={93}
            className="w-[95px] h-[50px] md:w-[130px] md:h-[110px]"
          />
        </Link>

        {/* Burger menu */}
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
            <div className="nav__burger__line__fill" />
          </div>
          <div
            className={`nav__burger__line transition-all duration-500 ${
              menuOpen
                ? "-rotate-45 -translate-y-[4px] width-20 opacity-100"
                : "width-20 opacity-100"
            }`}
            style={{ "--index": 1 }}
          >
            <div className="nav__burger__line__fill" />
          </div>
        </button>
      </nav>

      {/* Animated line */}
      <div className="flex lg:hidden">
        <AnimatedLineView />
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed lg:hidden pt-[15rem] top-0 left-0 w-full h-dvh bg-gray80 z-20 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-[100vh]"
        }`}
      >
        {/* Container interno con padding-top invece di mt */}
        <div className="flex flex-col  uppercase  w-[95%] mx-auto h-full gap-6 text-2xl font-work overflow-y-auto pb-8">
          {/* Voci principali */}
          <Link
            href="/"
            title="Torna alla homepage"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            title="Scopri chi sono"
            href="/chi-sono"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Chi sono
          </Link>
          <Link
            title="I miei strumenti"
            href="/i-miei-strumenti"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Strumenti
          </Link>

          {/* Bottone Percorsi */}
          <button
            onClick={() => setPercorsiOpen(true)}
            className="menu-item flex justify-between items-center uppercase  w-full"
          >
            Percorsi
            <Icon icon="ei:chevron-right" className="w-8 h-8" />
          </button>

          {/* Altre voci */}
          <Link
            title="Respiro Circolare Consapevole"
            href="/respiro-circolare-consapevole"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Respiro
          </Link>
          <Link
            title="Blog"
            href="/blog"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            title="Contatti"
            href="/contatti"
            className="menu-item"
            onClick={() => setMenuOpen(false)}
          >
            Contatti
          </Link>
        </div>

        {/* Sottomenu Percorsi a slide completa */}
        <AnimatePresence>
          {percorsiOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="fixed top-0 left-0 w-full h-screen bg-gray80 text-gray100 z-30"
            >
              {/* Chevron fisso */}
              <div className="absolute top-0 left-0 w-full flex items-center justify-start p-4 z-40 bg-gray80">
                <button onClick={() => setPercorsiOpen(false)}>
                  <Icon icon="ei:chevron-left" className="w-10 h-10" />
                </button>
              </div>

              {/* Contenuto scrollabile sotto lo chevron */}
              <div className="pt-20 h-full overflow-auto px-[5%] flex flex-col gap-6">
                {/* Privati */}
                <AccordionItem
                  title="Privati"
                  className="uppercase text-lg mb-2"
                >
                  <Link
                    href="/tutti-i-percorsi/privati/trova-la-tua-direzione"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Trova la tua direzione
                  </Link>
                  <Link
                    href="/tutti-i-percorsi/privati/cambia-e-trova-la-tua-strada-nel-lavoro"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Cambia e trova la tua strada nel lavoro
                  </Link>
                  <Link
                    href="/tutti-i-percorsi/privati/trova-il-lavoro-che-desideri"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Trova il lavoro che desideri
                  </Link>
                  <Link
                    href="/tutti-i-percorsi/privati/trova-le-tue-radici"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Trova le tue radici
                  </Link>
                </AccordionItem>

                {/* Libera professione */}
                <AccordionItem
                  title="Libera professione"
                  className="font-medium uppercase text-lg mb-2"
                >
                  <Link
                    href="/tutti-i-percorsi/libera-professione/avvia-la-tua-attività-con-consapevolezza"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Avvia la tua attività con consapevolezza
                  </Link>
                </AccordionItem>

                {/* Organizzazioni */}
                <AccordionItem
                  title="Organizzazioni"
                  className="font-medium uppercase text-lg mb-2"
                >
                  <Link
                    href="/tutti-i-percorsi/organizzazioni/soluzioni-su-misura-per-crescere"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-xl"
                  >
                    Soluzioni su misura per crescere
                  </Link>
                </AccordionItem>

                {/* Tutti i percorsi */}
                <Link
                  href="/tutti-i-percorsi"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-lg uppercase font-[600]"
                >
                  Tutti i percorsi
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Mobile;

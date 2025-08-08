import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import gsap from "gsap";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const megaMenuRef = useRef(null);
  const menuItemsRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = navbarRef.current.querySelectorAll(
            "li, a.bg-red, .logo"
          );
          items.forEach((item, index) => {
            item.classList.add("transition-all", "duration-700", "ease-out");
            setTimeout(() => {
              item.classList.remove("opacity-0", "translate-y-2");
              item.classList.add("opacity-100", "translate-y-0");
            }, 300 + 50 * index);
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
    const menu = megaMenuRef.current;
    if (!menu) return;

    if (showMegaMenu) {
      clearTimeout(timeoutRef.current);
      gsap.killTweensOf(menu);
      gsap.set(menu, {
        display: "block",
        clipPath: "inset(0 0 100% 0)",
        opacity: 1,
      });

      gsap.to(menu, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.55,
        ease: "power2.out",
      });

      gsap.fromTo(
        menuItemsRef.current.querySelectorAll(".menu-item"),
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          delay: 0.05,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    } else {
      gsap.killTweensOf(menu);
      gsap.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.55,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menu, { display: "none" });
        },
      });
    }
  }, [showMegaMenu]);

  // Gestione sicura dell'hover
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMegaMenu(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 100); // evita flickering
  };

  useEffect(() => {
    if (megaMenuRef.current) {
      gsap.set(megaMenuRef.current, {
        display: "none",
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
      });
    }
  }, []);

  return (
    <>
      <nav
        className="h-[90px] lg:flex items-center justify-between hidden py-10 relative z-[999]"
        ref={navbarRef}
      >
        <div
          className="flex items-center space-x-2 logo opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)]"
          style={{ transitionDelay: `calc(0.02s * 0 + 0.3s)` }}
        >
          <Link href="/">
            <Image
              src="/assets/logo_annamaria.svg"
              alt="Logo"
              width={100}
              height={93}
            />
          </Link>
        </div>

        <ul className="flex items-center gap-[30px] uppercase">
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 1 + 0.3s)` }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 2 + 0.3s)` }}
          >
            <Link href="/">Strumenti</Link>
          </li>
          <li
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 3 + 0.3s)` }}
          >
            <span>Percorsi +</span>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 4 + 0.3s)` }}
          >
            <Link href="/">Respiro</Link>
          </li>

          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 5 + 0.3s)` }}
          >
            <Link href="/">Blog</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 6 + 0.3s)` }}
          >
            <Link href="/chi-sono">Chi sono</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-[15px]"
            style={{ transitionDelay: `calc(0.02s * 7 + 0.3s)` }}
          >
            <Link href="/chi-sono">Contatti</Link>
          </li>
        </ul>

        <Link
          href="/"
          className="group bg-red text-md text-white px-[18px] py-[14px] opacity-0 translate-y-2 rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple110"
          style={{ transitionDelay: `calc(0.02s * 8 + 0.3s)` }}
        >
          Prenota una consulenza{" "}
          <Icon
            icon="prime:arrow-up-right"
            width="24"
            height="24"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </nav>

      {/* Megamenu */}
      <div
        ref={megaMenuRef}
        className="bg-gray80 absolute left-0 top-0 right-0 h-[650px] w-screen z-[100] overflow-hidden hidden"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div
          ref={menuItemsRef}
          className="flex flex-col items-center justify-start w-[95%] mx-auto absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ "--nav-dd-index": hoveredItemIndex ?? -1 }}
        >
          {/* Grid a 3 colonne */}
          <div className="grid grid-cols-2 gap-10 leading-tight font-regular font-work text-gray100 w-full mb-8">
            {[
              {
                title: "Privati",
                items: [
                  {
                    label: "Trova la tua direzione",
                    href: "/privati/trova-la-tua-direzione",
                  },
                  {
                    label: "Cambia e trova la tua strada nel lavoro",
                    href: "/privati/cambia-e-trova-la-tua-strada-nel-lavoro",
                  },
                  {
                    label: "Trova il lavoro che desideri",
                    href: "/privati/trova-il-lavoro-che-desideri",
                  },
                ],
              },
              {
                title: "Libera professione",
                items: [
                  {
                    label: "Avvia la tua attività con consapevolezza",
                    href: "/liberi-professionisti/servizio-1",
                  },
                ],
              },
              {
                title: "Organizzazioni",
                items: [
                  {
                    label: "Soluzioni su misura per crescere",
                    href: "/organizzazioni/soluzioni-su-misura-per-crescere",
                  },
                ],
              },
            ].map((group, colIndex) => {
              const baseIndex = colIndex * 10;
              return (
                <div key={colIndex} className="flex flex-col gap-3">
                  {/* Titolo con opacità */}
                  <div
                    onMouseEnter={() => setHoveredItemIndex(baseIndex - 1)}
                    onMouseLeave={() => setHoveredItemIndex(null)}
                    className="menu-item relative translate-y-4"
                  >
                    <h3
                      className={`inline-block relative text-[3vw] z-10 transition-opacity duration-300 ease-in-out font-medium ${
                        hoveredItemIndex !== null &&
                        !(
                          hoveredItemIndex >= baseIndex &&
                          hoveredItemIndex < baseIndex + group.items.length
                        ) &&
                        hoveredItemIndex !== baseIndex - 1
                          ? "opacity-30"
                          : "opacity-100"
                      }`}
                    >
                      {group.title}
                      <div className="utl-hover_block absolute z-0" />
                    </h3>
                  </div>

                  {/* Voci del menu */}
                  {group.items.map((item, index) => {
                    const itemIndex = baseIndex + index;
                    return (
                      <div
                        key={itemIndex}
                        onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                        onMouseLeave={() => setHoveredItemIndex(null)}
                        className="menu-item relative translate-y-4"
                      >
                        <Link
                          href={item.href}
                          className={`inline-block relative text-[2vw] w-full z-10 text-gray100/80 transition-opacity duration-300 ease-in-out ${
                            hoveredItemIndex !== null &&
                            hoveredItemIndex !== itemIndex
                              ? "opacity-30"
                              : "opacity-100"
                          }`}
                        >
                          {item.label}
                          <div className="utl-hover_block absolute z-0" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div
              onMouseEnter={() => setHoveredItemIndex(999)}
              onMouseLeave={() => setHoveredItemIndex(null)}
              className="menu-item relative translate-y-4 text-[2.5vw] leading-tight font-regular font-work text-gray100 w-full"
            >
              <Link
                href="/tutti-i-percorsi"
                className={`inline-block relative z-10 text-gray100 transition-opacity duration-300 ease-in-out ${
                  hoveredItemIndex !== null && hoveredItemIndex !== 999
                    ? "opacity-30"
                    : "opacity-100"
                }`}
              >
                Tutti i Percorsi
                <div className="utl-hover_block absolute z-0" />
              </Link>
            </div>
          </div>

          {/* Voce finale sotto (Tutti i servizi) */}
        </div>
      </div>

      {/* Overlay (sotto il megamenu) */}
      <div
        className={`fixed inset-0 bg-purple100 bg-opacity-40  z-[90] transition-opacity duration-500 ease-out ${
          showMegaMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        // onMouseEnter={handleLeave}
      ></div>

      <div className="lg:flex hidden z-[99999]">
        <AnimatedLineView />
      </div>
    </>
  );
};

export default Navbar;

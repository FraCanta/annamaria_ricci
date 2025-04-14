import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const Navbar = () => {
  const navbarRef = useRef(null);

  // Funzione per l'Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = document.querySelectorAll("li, a.bg-red, .logo");

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove("opacity-0", "translate-y-4");
              item.classList.add("opacity-100", "translate-y-0");
            }, 300 + 50 * index); // Ritardo dinamico
          });
        }
      },
      { threshold: 0.5 } // L'elemento è visibile al 50%
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
        className="h-[90px] lg:flex items-center justify-between hidden py-10"
        ref={navbarRef}
      >
        {/* Logo con animazione */}
        <div
          className="flex items-center space-x-2 logo opacity-0 translate-y-4 transition-all duration-500"
          style={{
            transitionDelay: `calc(0.05s * 0 + 0.3s)`, // Ritardo specifico per il logo
          }}
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

        {/* Nav Items senza map */}
        <ul className="flex items-center gap-[30px] uppercase text-lg">
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-4 transition-all duration-400 text-base"
            style={{
              transitionDelay: `calc(0.05s * 0 + 0.3s)`,
            }}
          >
            <Link href="/">Servizi e percorsi +</Link>
            <ul className="absolute bg-white shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <li>
                <Link href="/servizi">Servizio 1</Link>
              </li>
              <li>
                <Link href="/percorsi">Percorso 1</Link>
              </li>
            </ul>
          </li>

          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-4 transition-all duration-400 text-base"
            style={{
              transitionDelay: `calc(0.05s * 1 + 0.3s)`,
            }}
          >
            <Link href="/chi-sono">Chi sono</Link>
          </li>

          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-4 transition-all duration-400 text-base"
            style={{
              transitionDelay: `calc(0.05s * 2 + 0.3s)`,
            }}
          >
            <Link href="/">Respiro</Link>
          </li>

          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-4 transition-all duration-400 text-base"
            style={{
              transitionDelay: `calc(0.05s * 3 + 0.3s)`,
            }}
          >
            <Link href="/">Blog</Link>
          </li>

          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-4 transition-all duration-400 text-base"
            style={{
              transitionDelay: `calc(0.05s * 4 + 0.3s)`,
            }}
          >
            <Link href="/">Contatti</Link>
          </li>
        </ul>

        {/* Bottone */}
        <Link
          href="/"
          className="bg-red uppercase text-white px-4 py-4 rounded-sm text-base transition duration-500 opacity-0 translate-y-4"
          style={{
            transitionDelay: `calc(0.05s * 5 + 0.3s)`,
            transitionProperty: "opacity, transform",
            transitionDuration: "500ms",
          }}
        >
          Hai bisogno di aiuto?
        </Link>
      </div>
      <AnimatedLineView />
    </>
  );
};

export default Navbar;

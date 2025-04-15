import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";
import gsap from "gsap";
const Navbar = () => {
  const navbarRef = useRef(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const megaMenuRef = useRef(null);
  const menuItemsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = document.querySelectorAll("li, a.bg-red, .logo");

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove("opacity-0", "translate-y-2");
              item.classList.add("opacity-100", "translate-y-0");
            }, 300 + 50 * index); // più morbido: 20ms anziché 50ms
          });
        }
      },
      { threshold: 0.5 }
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

  useEffect(() => {
    if (megaMenuRef.current) {
      if (showMegaMenu) {
        gsap.to(megaMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          display: "block",
        });

        // Stagger animazione degli item dentro
        gsap.fromTo(
          menuItemsRef.current.querySelectorAll(".menu-item"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(megaMenuRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => {
            if (megaMenuRef.current) {
              megaMenuRef.current.style.display = "none";
            }
          },
        });
      }
    }
  }, [showMegaMenu]);

  return (
    <>
      <div
        className="h-[90px] lg:flex items-center justify-between hidden py-10 relative z-[999]"
        ref={navbarRef}
      >
        <div
          className=" flex items-center space-x-2 logo opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)]"
          style={{
            transitionDelay: `calc(0.02s * 0 + 0.3s)`,
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

        <ul className="flex items-center gap-[30px] uppercase text-lg">
          <li
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-base"
            style={{
              transitionDelay: `calc(0.02s * 1 + 0.3s)`,
            }}
          >
            <Link href="/">Servizi e percorsi +</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-base"
            style={{
              transitionDelay: `calc(0.02s * 2 + 0.3s)`,
            }}
          >
            <Link href="/">Respiro</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-base"
            style={{
              transitionDelay: `calc(0.02s * 3 + 0.3s)`,
            }}
          >
            <Link href="/">Blog</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-base"
            style={{
              transitionDelay: `calc(0.02s * 4 + 0.3s)`,
            }}
          >
            <Link href="/chi-sono">Chi sono</Link>
          </li>
          <li
            className="text-gray100 hover:text-gray90 cursor-pointer opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)] text-base"
            style={{
              transitionDelay: `calc(0.02s * 5 + 0.3s)`,
            }}
          >
            <Link href="/">Contatti</Link>
          </li>
        </ul>

        <Link
          href="/"
          className="bg-red uppercase text-white px-4 py-4 rounded-sm text-base transition-all opacity-0 translate-y-2 duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)]"
          style={{
            transitionDelay: `calc(0.02s * 6 + 0.3s)`,
          }}
        >
          Hai bisogno di aiuto?
        </Link>
      </div>
      {/* dropdown megamenu */}
      <div
        ref={megaMenuRef}
        className={`bg-gray80 absolute left-0 top-0 right-0 h-[650px] w-screen z-[99] transition-all duration-300 ease-in-out ${
          showMegaMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <div
          ref={menuItemsRef}
          className="grid grid-cols-3 gap-8 text-gray100 w-[95%] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="menu-item opacity-0 translate-y-4">Percorso 1</div>
          <div className="menu-item opacity-0 translate-y-4">Percorso 2</div>
          <div className="menu-item opacity-0 translate-y-4">Percorso 3</div>
          <div className="menu-item opacity-0 translate-y-4">Servizio 1</div>
          <div className="menu-item opacity-0 translate-y-4">Servizio 2</div>
          <div className="menu-item opacity-0 translate-y-4">Servizio 3</div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-purple100 bg-opacity-40 backdrop-blur-sm z-[90] transition-opacity duration-500 ease-out ${
          showMegaMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={() => setShowMegaMenu(false)} // facoltativo: chiude se si esce dal mega
      ></div>

      <div className="lg:block hidden z-[999]">
        <AnimatedLineView />
      </div>
    </>
  );
};

export default Navbar;

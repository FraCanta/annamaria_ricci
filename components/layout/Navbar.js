import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

const Navbar = () => {
  const navbarRef = useRef(null);

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

  return (
    <>
      <div
        className="h-[90px] lg:flex items-center justify-between hidden py-10"
        ref={navbarRef}
      >
        <div
          className="flex items-center space-x-2 logo opacity-0 translate-y-2 transition-all duration-600 ease-[cubic-bezier(0.33, 1, 0.68, 1)]"
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

      <div className="lg:block hidden">
        <AnimatedLineView />
      </div>
    </>
  );
};

export default Navbar;

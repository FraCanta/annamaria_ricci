"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import AnimatedLineView from "../AnimatedLine/AnimatedLineView";

function AccordionSection({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  return (
    <div className="border-b border-gray90">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left text-gray100 font-[600] uppercase"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 text-[25px] font-[400] ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-300"
      >
        <div className="pb-10">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content">
      {/* FOOTER MOBILE */}
      <footer className="block md:hidden py-10 text-[15px] ">
        {/* Logo + copyright */}
        <div className="mb-6">
          <Link href="/" title="Torna alla home">
            <Image
              src="/assets/logo_annamaria.svg"
              alt="Logo"
              width={120}
              height={113}
            />
          </Link>
          <p className="text-gray100 mt-4">
            Partita IVA 02068280508 <br /> Professionista ai sensi L. 04-2013
          </p>
          <p className="text-gray100 mt-4">
            Copyright © 2025 Anna Maria Ricci. <br /> Tutti i diritti riservati.
          </p>
        </div>

        {/* Accordion Pagine */}
        <AccordionSection title="Pagine">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" title="Torna alla home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/chi-sono" title="Scopri chi sono">
                Chi sono
              </Link>
            </li>
            <li>
              <Link href="/" title="Scopri gli strumenti">
                Strumenti
              </Link>
            </li>
            <li>
              <Link href="/tutti-i-percorsi" title="Scopri tutti i percorsi">
                Percorsi
              </Link>
            </li>
            <li>
              <Link href="/" title="Scopri il percorso Respiro">
                Respiro
              </Link>
            </li>
            <li>
              <Link href="/blog" title="Leggi il blog">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contatti" title="Contatti">
                Contatti
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                title="Prenota una consulenza"
                href="https://calendly.com/welcome-annamariaricci/15min"
              >
                Prenota una consulenza
              </Link>
            </li>
          </ul>
        </AccordionSection>

        {/* Accordion Orari */}
        <AccordionSection title="Contatti">
          <ul className="flex flex-col gap-3 text-gray100">
            <li>
              <Link href="tel:+393515991968" title="Chiama il numero">
                <strong>Mobile:</strong> +39 351 599 1968
              </Link>
            </li>
            <li>
              <Link
                href="mailto:welcome@annamariaricci.eu"
                title="Invia un'email"
              >
                <strong>Email:</strong> welcome@annamariaricci.eu
              </Link>
            </li>
          </ul>
        </AccordionSection>

        {/* Accordion Socials */}
        <AccordionSection title="Social">
          <div className="flex flex-col gap-2">
            <Link
              target="_blank"
              title="Visita la pagina Facebook"
              href="https://www.facebook.com/annamariaricciofficial"
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              title="Visita la pagina Instagram"
              href="https://www.instagram.com/lariccigiontella/"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              title="Visita la pagina Ricerche genealogiche"
              href="https://www.instagram.com/ricerche_genealogiche/"
            >
              Ricerche genealogiche (Instagram)
            </Link>
            <Link
              target="_blank"
              title="Visita la pagina Linkedin"
              href="https://www.linkedin.com/in/annamariaricci/"
            >
              Linkedin
            </Link>
          </div>
        </AccordionSection>
        <AnimatedLineView />
        {/* Credits */}
        <div className="flex flex-col gap-3 text-gray100 text-[15px] my-6 uppercase">
          <div className="flex flex-col gap-2 mb-6">
            <p>
              Made with ❤️ by{" "}
              <Link
                title="Visita il sito di Thallion dev"
                href="https://www.thallion-dev.it/"
                target="_blank"
              >
                Thallion dev -
              </Link>
            </p>
            <p>
              brand by{" "}
              <Link
                title="Visita il sito di Miao graphics"
                href="https://www.miaographics.it/"
                target="_blank"
              >
                Miao graphics
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </footer>

      {/* FOOTER DESKTOP (3 colonne) */}
      <footer className="hidden md:grid my-14 grid-cols-3 gap-[120px] p-4 lg:p-0 text-[14px] ">
        {/* Logo + copyright */}
        <div className="flex flex-col">
          <Link href="/" title="Torna alla home">
            <Image
              src="/assets/logo_annamaria.svg"
              alt="Logo"
              width={120}
              height={113}
            />
          </Link>
          <p className="text-gray100 mt-4">
            Partita IVA 02068280508 <br /> Professionista ai sensi L. 04-2013
          </p>
          <p className="text-gray100 mt-4">
            Copyright © 2025 Anna Maria Ricci. <br /> Tutti i diritti riservati.
          </p>
        </div>

        {/* Pagine */}
        <div className="flex flex-col gap-3">
          <h3 className="font-[600] font-work mb-2 text-gray100 uppercase">
            Pagine
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" title="Torna alla home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/chi-sono" title="Scopri chi sono">
                Chi sono
              </Link>
            </li>
            <li>
              <Link href="/i-miei-strumenti" title="Scopri i miei strumenti">
                Strumenti
              </Link>
            </li>
            <li>
              <Link href="/tutti-i-percorsi" title="Scopri tutti i percorsi">
                Percorsi
              </Link>
            </li>
            <li>
              <Link
                href="/respiro-circolare-consapevole"
                title="Scopri il percorso di Respiro"
              >
                Respiro
              </Link>
            </li>
            <li>
              <Link href="/blog" title="Leggi il nostro blog">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/contatti" title="Contatti">
                Contatti
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                title="Prenota una consulenza"
                href="https://calendly.com/welcome-annamariaricci/15min"
              >
                Prenota una consulenza
              </Link>
            </li>
          </ul>
        </div>

        {/* Orari e Socials */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="font-[600] font-work mb-2 text-gray100 uppercase">
              Contatti
            </h3>
            <ul className="flex flex-col gap-2 text-gray100">
              <li>
                <Link title="Chiama il numero" href="tel:+393515991968">
                  Mobile: +39 351 599 1968
                </Link>
              </li>
              <li>
                <Link
                  title="Invia un'email"
                  href="mailto:welcome@annamariaricci.eu"
                >
                  Email: welcome@annamariaricci.eu
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-[600] font-work mb-2 text-gray100 uppercase">
              Social
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                target="_blank"
                title="Visita la pagina Facebook"
                href="https://www.facebook.com/annamariaricciofficial"
              >
                Facebook
              </Link>
              <Link
                target="_blank"
                title="Visita la pagina Instagram"
                href="https://www.instagram.com/lariccigiontella/"
              >
                Instagram
              </Link>
              <Link
                target="_blank"
                title="Visita la pagina Ricerche genealogiche"
                href="https://www.instagram.com/ricerche_genealogiche/"
              >
                Ricerche genealogiche (Instagram)
              </Link>
              <Link
                target="_blank"
                title="Visita la pagina Linkedin"
                href="https://www.linkedin.com/in/annamariaricci/"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Animated line (se ti serve in entrambi i layout) */}
      <AnimatedLineView />

      {/* Credits desktop */}
      <div className="hidden md:flex w-full my-6 gap-4 justify-between items-center p-4 lg:p-0 text-[14px] text-gray100 uppercase">
        <div className="flex gap-2">
          <p>
            Made with ❤️ by{" "}
            <Link
              title="Visita il sito di Thallion dev"
              href="https://www.thallion-dev.it/"
              target="_blank"
            >
              Thallion dev -
            </Link>
          </p>
          <p>
            brand by{" "}
            <Link
              title="Visita il sito di Miao graphics"
              href="https://www.miaographics.it/"
              target="_blank"
            >
              Miao graphics
            </Link>
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.iubenda.com/privacy-policy/68292067"
            className="iubenda-white iubenda-noiframe iubenda-embed"
            title="Privacy Policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>

          <Link
            href="https://www.iubenda.com/privacy-policy/68292067/cookie-policy"
            className="iubenda-white iubenda-noiframe iubenda-embed"
            title="Cookie Policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

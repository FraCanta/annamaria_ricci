import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Button from "@/components/layout/Button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import FadeInSection from "@/components/layout/FadeInSection";
import ContactForm from "@/components/layout/ContactForm";
import Head from "next/head";
function Contatti() {
  const controls = useAnimation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      controls.start("visible");
    }, 300); // ritardo iniziale
    return () => clearTimeout(timer);
  }, [controls]);
  return (
    <>
      <Head>
        <title>Anna Maria Ricci - Contatti</title>
        <meta name="author" content="Anna Maria Ricci" />
        <meta
          name="description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta name="keywords" content="consulenza, orientamento, evoluzione" />

        <meta
          property="og:url"
          content="https://www.annamariaricci.eu/contatti"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anna Maria Ricci - Contatti" />
        <meta
          property="og:description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />
        <meta
          property="og:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="annamariaricci.eu" />
        <meta
          property="twitter:url"
          content="https://www.annamariaricci.eu/chi-sono"
        />
        <meta
          name="twitter:image"
          content="https://www.annamariaricci.eu/assets/annamaria_cover.png"
        />
        <meta name="twitter:title" content="Anna Maria Ricci - Chi Sono" />
        <meta
          name="twitter:description"
          content="Consulenze e Servizi di Orientamento, miglioramento, evoluzione"
        />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Annamaria Ricci" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="content">
        <h1
          className={`text-[9vw] w-full leading-none lg:text-[4vw] flex flex-col text-gray100 my-8 lg:my-14 font-abhaya font-bold`}
        >
          <span
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.44,0,0.25,0.99)]
      ${
        animate
          ? "opacity-100 blur-0 translate-y-0 delay-[0ms]"
          : "opacity-0 blur-sm translate-y-4 delay-[0ms]"
      }`}
          >
            Felice
          </span>

          <span
            className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.44,0,0.25,0.99)]
      ${
        animate
          ? "opacity-100 blur-0 translate-y-0 delay-[400ms]"
          : "opacity-0 blur-sm translate-y-4 delay-[0ms]"
      }`}
          >
            di conoscerti
          </span>
        </h1>

        <AnimatedLineView />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-10 lg:my-20">
          <div className="flex flex-col gap-8">
            <FadeInSection delay={100}>
              <h2 className="text-[6vw] md:text-[8vw] lg:text-[2vw] font-abhaya font-bold leading-none text-gray100">
                Per contattarmi, compila semplicemente il form oppure puoi
                prenotare direttamente una consulenza.
              </h2>
            </FadeInSection>
            <FadeInSection delay={100}>
              <Button
                target="_blank"
                href="https://calendly.com/welcome-annamariaricci/15min"
              >
                Prenota una consulenza
              </Button>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="flex flex-wrap gap-2">
                <p className="font-work text-gray90">
                  Hai bisogno della mia email?
                </p>
                <Link
                  className="font-[600] text-gray90"
                  href="mailto:welcome@annamariaricci.eu"
                >
                  welcome@annamariaricci.eu
                </Link>
              </div>
            </FadeInSection>
          </div>
          <FadeInSection delay={100}>
            <ContactForm />
          </FadeInSection>
        </div>
        <AnimatedLineView />
      </div>
    </>
  );
}

export default Contatti;

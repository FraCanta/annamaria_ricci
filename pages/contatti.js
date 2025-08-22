import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import Button from "@/components/layout/Button";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import FadeInSection from "@/components/layout/FadeInSection";
import ContactForm from "@/components/layout/ContactForm";
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
    <div>
      <h1
        className={`text-[14vw] w-full leading-none lg:text-[5vw] flex flex-col text-gray100 my-14 font-abhaya font-bold`}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-20">
        <div className="flex flex-col gap-8">
          <FadeInSection delay={100}>
            <h2 className="text-[6vw] md:text-[8vw] lg:text-[2vw] font-abhaya font-bold leading-none text-gray100">
              Per contattarmi, compila semplicemente il form oppure puoi
              prenotare direttamente una consulenza.
            </h2>
          </FadeInSection>
          <FadeInSection delay={100}>
            <Button href="/prenota">Prenota una consulenza</Button>
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
  );
}

export default Contatti;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import FadeInSection from "./FadeInSection";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.44, 0, 0.25, 0.99],
    },
  },
};

function HeroAbout() {
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
      <FadeInSection delay={50}>
        <div className="w-full my-10 lg:my-20">
          <div className="w-full my-14 flex flex-col items-center gap-4 z-10 ">
            <h1
              className={`font-abhaya font-bold text-[11vw] lg:text-[4vw] leading-none text-gray100 text-center 
              transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] 
              ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
            >
              Ciao, mi chiamo Anna Maria Ricci!
            </h1>
            <p
              className={`text-[4vw] lg:text-[1.4vw] text-gray90 text-center font-abhaya font-normal leading-none ${
                animate
                  ? "opacity-100 blur-0 translate-y-0"
                  : "opacity-0 blur-sm translate-y-4"
              }`}
            >
              Professional Counselor, Orientatrice Professionale e Scolastica,
              Rebirther, Facilitatrice di Respiro Circolare
              Consapevole e Mindfulness
            </p>
          </div>
          <div
            className={`relative aspect-square lg:h-[700px] w-full ${
              animate ? "scale-100 blur-0" : "scale-[1.1] blur-sm"
            }`}
          >
            <Image
              src="/assets/chi_sono2.webp"
              alt="Hero"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default HeroAbout;

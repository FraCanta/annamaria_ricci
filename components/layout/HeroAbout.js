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
    // <div className="relative my-6 lg:my-8">
    //   {/* Titolo animato a stagger */}
    //   <motion.h1
    //     className="absolute bottom-0 left-5 lg:left-10 font-abhaya font-bold text-[8vw] md:text-[60px] 2xl:text-[95px] leading-none text-white z-10 my-10 p-[0.rem]   lg:my-20  w-full overflow-hidden"
    //     variants={containerVariants}
    //     initial="hidden"
    //     animate={controls}
    //   >
    //     <motion.span className="block" variants={itemVariants}>
    //       Ciao, sono Anna Maria Ricci,
    //     </motion.span>
    //     <motion.span className="block" variants={itemVariants}>
    //       Professional Counselor,
    //     </motion.span>
    //     <motion.span className="block" variants={itemVariants}>
    //       Rebirther e Orientatrice
    //     </motion.span>
    //   </motion.h1>

    //   {/* Immagine con animazione blur */}
    //   <div
    //     className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] ${
    //       animate ? "blur-0" : "blur-sm"
    //     } w-full h-full relative`}
    //   >
    //     <Image
    //       src="/assets/hero_chisono.jpg"
    //       alt="Hero"
    //       width={1500}
    //       height={1500}
    //       className="w-full h-[90vh] object-cover"
    //     />
    //   </div>
    // </div>
    <div className="min-h-screen my-10 lg:my-20">
      <div className="w-screen lg:w-full h-full mx-auto">
        <FadeInSection delay={50}>
          <Image
            src="/assets/annamaria_scritta.png"
            alt="Hero Home"
            width={1500}
            height={1500}
            className="w-full lg:h-full object-cover object-left lg:object-contain lg:object-right overflow-x-hidden h-[50px]"
          />
        </FadeInSection>
      </div>

      {/* SEZIONE A DUE COLONNE */}
      <FadeInSection delay={50}>
        <div className="w-full h-full flex flex-col lg:flex-row my-10 lg:my-20 gap-10 ">
          {/* COLONNA sinistra - 40% */}
          <div className="w-full lg:w-[40%] flex flex-col gap-10">
            <h1 className="font-abhaya font-bold text-[38px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100 ">
              La mia storia
            </h1>
            <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              Sono nata in Lombardia, e ho radici Umbre di cui sono molto fiera.
              Vivo in Toscana dal 1999, una terra che amo molto. Sono la quarta
              di sei figli, prima femmina dopo 3 maschi.
            </p>
            <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              Il lavoro per me è sempre stato molto importante, ho infatti
              iniziato da giovanissima, per una forte spinta interiore verso la
              libertà.
            </p>
            <p className="font-work font-normal text-base md:text-[20px] text-gray90 leading-snug">
              Amo <strong>profondamente</strong>, <strong>imparare</strong>,{" "}
              <strong>studiare</strong>, <strong>formarmi</strong> e condividere
              ciò che imparo e scopro.
              <br />
              Sono una <strong>professionista della relazione di aiuto</strong>,
              specializzata in benessere personale, relazionale, lavoro e
              organizzazioni.
              <br /> Mi occupo di{" "}
              <strong>orientamento professionale e scolastico</strong>,
              <strong>counseling</strong>,{" "}
              <strong>respiro circolare consapevole</strong>.
              <br />
              Pratico la <strong>comunicazione non violenta</strong> e la{" "}
              <strong>meditazione sumarah</strong>.
            </p>
          </div>
          {/* COLONNA destra - 60% */}

          <div className="w-full lg:w-[60%] relative aspect-square flex justify-center items-center">
            <Image
              src="/assets/annamaria_chisono.jpg"
              alt="Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default HeroAbout;

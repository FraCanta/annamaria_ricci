import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

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
    <div className="relative my-6 lg:my-8">
      {/* Titolo animato a stagger */}
      <motion.h1
        className="absolute top-0 left-0 font-abhaya font-bold text-[8vw] md:text-[60px] 2xl:text-[95px] leading-none text-gray90 z-10 my-10 p-[0.rem]   lg:my-20 text-center w-full overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.span className="block" variants={itemVariants}>
          Ciao, sono Anna Maria Ricci,
        </motion.span>
        <motion.span className="block" variants={itemVariants}>
          Professional Counselor,
        </motion.span>
        <motion.span className="block" variants={itemVariants}>
          Rebirther e Orientatrice
        </motion.span>
      </motion.h1>

      {/* Immagine con animazione blur */}
      <div
        className={`transition-all duration-[1500ms] ease-[cubic-bezier(0.44,0,0.25,0.99)] ${
          animate ? "blur-0" : "blur-sm"
        } w-full h-full relative`}
      >
        <Image
          src="/assets/prova2.webp"
          alt="Hero"
          width={1500}
          height={1500}
          className="w-full min-h-screen object-cover object-top"
        />
      </div>
    </div>
  );
}

export default HeroAbout;

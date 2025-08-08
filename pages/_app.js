import AudioPlayer from "@/components/layout/AudioPlayer";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(router.pathname);

  const transitionColor = "#E0DCE2";

  const transitionSpringPhysics = {
    type: "tween",
    duration: 0.8,
    ease: [0.77, 0, 0.175, 1],
  };

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setIsTransitioning(true);
      }
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentRoute(router.pathname);
      }, 800); // deve coincidere con la durata dell'animazione
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{
              scaleY: 0.2,
              scaleX: 0.8,
              bottom: "50px", // Offset dal basso di 50px
              top: 0, // Inizia dalla parte superiore
              transformOrigin: "bottom center",
            }}
            animate={{
              scaleY: 1,
              scaleX: 1,
              bottom: 0, // Il pannello si espande fino a coprire tutta la pagina
              top: 0,
              transformOrigin: "bottom center",
            }}
            exit={{
              scaleY: 0,
              scaleX: 1,
              bottom: "50px", // Torna a 50px dal basso durante la chiusura
              top: 0,
              transformOrigin: "top center",
            }}
            transition={transitionSpringPhysics}
            style={{
              position: "fixed",
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: transitionColor,
              zIndex: 9999,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Mostra contenuto solo quando la transizione è terminata */}
      {!isTransitioning && (
        <Layout>
          {/* <AudioPlayer /> */}
          <Component key={currentRoute} {...pageProps} />
        </Layout>
      )}
    </>
  );
}

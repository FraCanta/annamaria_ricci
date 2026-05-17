import AudioPlayer from "@/components/layout/AudioPlayer";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/contact.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AudioProvider } from "@/context/AudioContext";
import Script from "next/script";
import { Work_Sans } from "next/font/google";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("@/components/privacy/CookieBanner"), {
  ssr: false,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(router.pathname);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [loadCookieBanner, setLoadCookieBanner] = useState(false);

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
      }, 800);
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

  useEffect(() => {
    const scheduleCookieBanner = () => {
      const load = () => setLoadCookieBanner(true);

      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(load, { timeout: 2500 });
        return () => window.cancelIdleCallback?.(idleId);
      }

      const timeoutId = window.setTimeout(load, 1200);
      return () => window.clearTimeout(timeoutId);
    };

    if (document.readyState === "complete") {
      return scheduleCookieBanner();
    }

    let cleanupIdle;
    const handleLoad = () => {
      cleanupIdle = scheduleCookieBanner();
    };

    window.addEventListener("load", handleLoad, { once: true });

    return () => {
      window.removeEventListener("load", handleLoad);
      cleanupIdle?.();
    };
  }, []);

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <div className={workSans.variable}>
      <AudioProvider>
        <AnimatePresence mode="wait">
          {isTransitioning && (
            <motion.div
              key="transition"
              initial={{
                scaleY: 0.2,
                scaleX: 0.8,
                bottom: "50px",
                top: 0,
                transformOrigin: "bottom center",
              }}
              animate={{
                scaleY: 1,
                scaleX: 1,
                bottom: 0,
                top: 0,
                transformOrigin: "bottom center",
              }}
              exit={{
                scaleY: 0,
                scaleX: 1,
                bottom: "50px",
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

        {!isTransitioning && (
          <>
            <AudioPlayer />
            {getLayout(<Component key={currentRoute} {...pageProps} />)}
          </>
        )}
      </AudioProvider>

      {analyticsEnabled && (
        <Script id="google-analytics" strategy="afterInteractive" defer>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BL0G9HLEHG', { 'debug_mode':true });`}
        </Script>
      )}

      {loadCookieBanner && (
        <CookieBanner onConsentChange={setAnalyticsEnabled} />
      )}
    </div>
  );
}

import AboutSection from "@/components/About/AboutSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import VerticalAnimatedLine from "@/components/AnimatedLine/VerticalAnimatedLine";
import HeroHome from "@/components/layout/HeroHome";
import ServiziSection from "@/components/Servizi/ServiziSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Maria Ricci</title>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
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
      <HeroHome />

      <div>
        <AnimatedLineView />
      </div>
      <AboutSection />
      <div>
        <AnimatedLineView />
      </div>
      <ServiziSection />
      <div>
        <AnimatedLineView />
      </div>
      <p>carosello</p>
      <div>
        <AnimatedLineView />
      </div>
      <AboutSection />
    </>
  );
}

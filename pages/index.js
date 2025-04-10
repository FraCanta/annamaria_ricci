import AboutSection from "@/components/About/AboutSection";
import AnimatedLineView from "@/components/AnimatedLine/AnimatedLineView";
import VerticalAnimatedLine from "@/components/AnimatedLine/VerticalAnimatedLine";
import InfiniteTextScroll from "@/components/InfiniteTextScroller/InfiniteTextScroll";
import HeroHome from "@/components/layout/HeroHome";
import ServiziSection from "@/components/Servizi/ServiziSection";
import Head from "next/head";
import Image from "next/image";

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
      <InfiniteTextScroll />
      <div>
        <AnimatedLineView />
      </div>
      <div className="h-screen my-20 relative">
        <div className="absolute top-0 left-0 w-full">
          <Image
            src="/assets/annamaria_scritta.png"
            alt="Hero"
            width={800}
            height={800}
            className="w-full h-full object-cover lg:object-contain object-right overflow-x-hidden"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 absolute top-6 lg:top-20 left-0 w-full h-full gap-10">
            <div className="aspect-square rounded-full relative">
              <Image
                src="/assets/chi_sono.webp"
                alt="Hero"
                fill
                className="w-full h-full object-contain object-right rounded-full absolute top-0 left-0"
              />
            </div>
            <div>testo</div>
          </div>
        </div>
      </div>
    </>
  );
}

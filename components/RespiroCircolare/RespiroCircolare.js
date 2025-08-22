import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../layout/Button";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeInSection from "../layout/FadeInSection";

gsap.registerPlugin(ScrollTrigger);

export default function RespiroCircolare() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clip-path da cerchio piccolo (16% radius) a fullscreen (150% per sicurezza)
      gsap.fromTo(
        containerRef.current,
        {
          clipPath: "circle(16% at 50% 50%)",
          WebkitClipPath: "circle(16% at 50% 50%)",
        },
        {
          clipPath: "circle(150% at 50% 50%)",
          WebkitClipPath: "circle(150% at 50% 50%)",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            // markers: true,
          },
        }
      );

      // Overlay fade in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 0.6,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      // Testo fade in e slide up
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="lg:min-h-[100vh] py-10">
      <div
        ref={containerRef}
        className="relative w-full aspect-square lg:h-screen mx-auto overflow-hidden"
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/assets/respiro.jpg"
          alt="Respiro Circolare"
          fill
          className="object-cover"
          priority
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gray100/50"
          style={{ opacity: 0 }}
        />
        <div
          ref={contentRef}
          className="absolute inset-0 flex flex-col items-center justify-center gap-10 text-center text-white p-8"
          style={{ opacity: 0 }}
        >
          <FadeInSection delay={100}>
            <h2 className="text-[8vw] lg:text-[5vw] font-abhaya font-[600] leading-none">
              Il Respiro Circolare Consapevole
            </h2>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex justify-center">
              <Button href="/respiro-circolare-consapevole">
                Scopri di più
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

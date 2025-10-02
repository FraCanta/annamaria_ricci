import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const items = [
  { img: "/assets/logo_collaborazioni/asnor_logo.png", alt: "Asnor logo" },
  {
    img: "/assets/logo_collaborazioni/confcommercio_pisa_prato.webp",
    alt: "Confcommercio Pisa Prato",
  },

  {
    img: "/assets/logo_collaborazioni/imofor_toscana.png",
    alt: "Imofor Toscana",
  },

  {
    img: "/assets/logo_collaborazioni/logo_talentform.webp",
    alt: "Talentform",
  },
  {
    img: "/assets/logo_collaborazioni/omnia_formazione.webp",
    alt: "Omnia Formazione",
  },
  {
    img: "/assets/logo_collaborazioni/spazio_cuore_terra_di_nuova_luce.webp",
    alt: "Spazio Cuore Terra di Nuova Luce",
  },
];

// Duplica e aggiunge leggere variazioni di spacing e opacità
const getOrganicItems = (repeat = 2) => {
  const organic = [];
  for (let r = 0; r < repeat; r++) {
    items.forEach((item, index) => {
      const randomGap = 10 + Math.floor(Math.random() * 5); // spazio 30-35px
      const opacity = 0.93 + Math.random() * 0.02; // 0.93-0.95
      organic.push({
        ...item,
        key: `${r}-${index}`,
        style: {
          marginRight: `${randomGap}px`,
          opacity,
        },
      });
    });
  }
  return organic;
};

function InfiniteTextScroll() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2;

    const tl = gsap.to(slider, {
      x: `-=${totalWidth}`,
      duration: 45,
      ease: "linear",
      repeat: -1,
    });

    return () => tl.kill();
  }, []);

  const organicItems = getOrganicItems(2);

  return (
    <div className="overflow-hidden py-8 lg:py-16">
      <div
        ref={sliderRef}
        className="flex w-max whitespace-nowrap "
        style={{ willChange: "transform" }}
      >
        {organicItems.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-center shrink-0 px-8 py-4 rounded-sm bg-gray80/50"
            style={{
              marginRight: item.style.marginRight,
              opacity: item.style.opacity,
            }}
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={160} // ✅ dimensioni controllate
              height={160}
              className="object-contain w-[100px] h-[70px] lg:w-[150px] lg:h-[80px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteTextScroll;

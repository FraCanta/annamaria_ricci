import React, { useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";

const items = [
  { icon: "material-symbols:help-outline", text: "1h di consulenza" },
  { icon: "mdi:account-group", text: "accanto alle aziende" },
  { icon: "ph:lightbulb", text: "curriculum vitae" },
  { icon: "mdi:timer-outline", text: "mentoring 1:1" },
  { icon: "ph:spiral-light", text: "respiro circolare" },
];

// Duplica e aggiunge leggere variazioni di spacing e opacità
const getOrganicItems = (repeat = 2) => {
  const organic = [];
  for (let r = 0; r < repeat; r++) {
    items.forEach((item, index) => {
      const randomGap = 20 + Math.floor(Math.random() * 15); // px tra 20 e 40
      const opacity = 0.9 + Math.random() * 0.1; // tra 0.9 e 1
      organic.push({
        ...item,
        key: `${r}-${index}`,
        style: {
          gap: `${randomGap}px`,
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
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    return () => tl.kill();
  }, []);

  const organicItems = getOrganicItems(2); // 2 cicli con variazioni

  return (
    <div className="overflow-hidden py-8 lg:py-16 ">
      <div
        ref={sliderRef}
        className="flex w-max whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {organicItems.map((item, index) => (
          <div
            key={item.key}
            className="flex items-center text-gray90 text-xl lg:text-4xl px-6 shrink-0 font-work"
            style={{ gap: item.style.gap, opacity: item.style.opacity }}
          >
            <Icon icon={item.icon} className="text-xl lg:text-4xl" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteTextScroll;

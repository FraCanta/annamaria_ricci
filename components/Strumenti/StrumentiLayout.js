import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import FadeInSection from "../layout/FadeInSection";

export default function StrumentiLayout({ translation }) {
  const [view, setView] = useState("grid"); // grid | list
  const [strumenti, setStrumenti] = useState([]);

  useEffect(() => {
    const items = translation?.strumenti?.items ?? [];
    setStrumenti(items);
  }, [translation]);

  return (
    <div className="p-6">
      {/* Header toggle */}
      <div className="flex justify-end items-center mb-6">
        <FadeInSection delay={100}>
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-xl shadow transition ${
                view === "grid" ? "bg-gray100 text-white" : "bg-white/40"
              }`}
            >
              <Icon icon="mdi:view-grid" width="24" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-xl shadow transition ${
                view === "list" ? "bg-gray100 text-white" : "bg-white/40"
              }`}
            >
              <Icon icon="mdi:view-list" width="24" />
            </button>
          </div>
        </FadeInSection>
      </div>

      {/* Lista o griglia strumenti */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {translation.map((item, index) => (
          <FadeInSection delay={100}>
            <div
              key={index}
              className={`flex flex-col gap-14 bg-gray80/30 p-8 justify-start hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 ${
                view === "grid" ? "lg:h-[450px]" : "h-auto"
              }`}
            >
              <div className="h-[50px] w-[50px]">
                <Image
                  src={item.icon}
                  alt={item.titolo}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-abhaya font-bold text-[25px] lg:text-[30px] leading-none text-gray100">
                  {item.titolo}
                </h3>
                <p className="text-gray90">{item.descrizione}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}

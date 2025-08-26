import { useState, useRef } from "react";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className={`group w-full flex justify-between items-center py-4 text-left duration-300 transition-all 
          ${open ? "bg-gray80/30" : "hover:bg-gray80/30"}`}
      >
        {/* Titolo con px condizionale */}
        <h4
          className={`font-work font-[600] text-lg lg:text-[22px] my-2 leading-none text-gray100 transition-all duration-300 
            ${open ? "px-6" : "px-0 group-hover:px-6"}`}
        >
          <span className="uppercase">{title}</span>
        </h4>

        {/* Icona + che ruota in X */}
        <span
          className={`relative w-5 h-5 flex items-center justify-center transition-transform duration-300 mr-6 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          {/* Linea verticale */}
          <span className="absolute h-5 w-[2px] bg-gray100" />
          {/* Linea orizzontale */}
          <span className="absolute w-5 h-[2px] bg-gray100" />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "bg-gray80/30 px-6" : ""
        }`}
      >
        <div className="py-10">{children}</div>
      </div>
    </div>
  );
}

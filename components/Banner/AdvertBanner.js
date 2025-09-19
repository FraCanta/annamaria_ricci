import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function AdvertBanner() {
  return (
    <div className="py-4 relative bg-purple100  text-white font-[500] font-work z-[100]">
      <Link
        href="/contatti"
        className="w-[95%] mx-auto text-xs md:text-base uppercase text-center  flex flex-wrap justify-center lg:justify-between gap-2 "
      >
        <p className="text-center">
          bilancio di COMPETENZE : Il primo passo per cambiare lavoro - webinar
          gratuito 16/09 h. 17 - Iscriviti ora!
        </p>
      </Link>
    </div>
  );
}

export default AdvertBanner;

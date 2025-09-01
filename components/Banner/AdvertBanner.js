import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function AdvertBanner() {
  return (
    <div className="py-4 relative bg-purple100  text-white font-[500] font-work z-[100]">
      <Link
        href="/contatti"
        className="content text-sm md:text-base uppercase text-center  flex flex-wrap justify-center lg:justify-between gap-2 "
      >
        <p className="text-center">
          COMPETENZE : Il primo passo per cambiare lavoro - webinar gratuito
          16/09 h. 17
        </p>
        <p className="flex items-center gap-2 justify-center w-full lg:w-auto lg:justify-end">
          Iscriviti adesso{" "}
          <Icon
            icon="lets-icons:arrow-right-light"
            width="24"
            height="24"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </p>
      </Link>
    </div>
  );
}

export default AdvertBanner;

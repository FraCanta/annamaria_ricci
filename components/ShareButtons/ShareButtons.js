import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    name: "Email",
    icon: "mdi:email-outline",
    url: (title, link) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
        link
      )}`,
  },
  {
    name: "Facebook",
    icon: "mdi:facebook",
    url: (title, link) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        link
      )}`,
  },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    url: (title, link) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        link
      )}&title=${encodeURIComponent(title)}`,
  },

  {
    name: "WhatsApp",
    icon: "mdi:whatsapp",
    url: (title, link) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        title + " " + link
      )}`,
  },
];

export default function ShareButtons({ title, link }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset messaggio dopo 2s
    } catch (err) {
      console.error("Errore copia link:", err);
    }
  };

  return (
    <div className="px-6 lg:px-10 py-5 border bg-gray80 w-full lg:w-[60%] lg:min-w-[280px] flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Condividi Articolo
      </h3>
      <div className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <Link
            key={s.name}
            href={s.url(title, link)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Condividi su ${s.name}`}
            className="p-3 border border-gray100/30 hover:border-gray100 transition"
          >
            <Icon
              icon={s.icon}
              width={24}
              height={24}
              className="text-gray100"
            />
          </Link>
        ))}

        {/* Copy Link */}
        <button
          onClick={copyLink}
          aria-label="Copia link"
          className="p-3 border border-gray100/30 hover:border-gray100 transition"
        >
          <Icon
            icon="mdi:link-variant"
            width={24}
            height={24}
            className="text-gray100"
          />
        </button>
      </div>
      {copied && <p className="text-sm text-green-600">Link copiato!</p>}
    </div>
  );
}

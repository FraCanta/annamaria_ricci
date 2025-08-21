import { Icon } from "@iconify/react";

export default function ContactForm() {
  return (
    <form className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      {/* Nome ed Email */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
        />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
        />
      </div>

      {/* Messaggio */}
      <textarea
        placeholder="Scrivi il tuo messaggio..."
        rows={6}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
      />

      {/* Bottone */}
      <button
        type="submit"
        className="group border text-${color} border-purple100 px-[18px] py-[14px] ext-md md:text-xl lg:text-lg xl:text-md 2xl:text-lg rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2
         hover:bg-purple100 hover:text-white"
      >
        Invia Messaggio
        <span className="text-lg">
          <Icon
            icon="lets-icons:arrow-right-light"
            width="24"
            height="24"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </button>
    </form>
  );
}

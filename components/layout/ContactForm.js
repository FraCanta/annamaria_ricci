import { useState } from "react";
import { Icon } from "@iconify/react";
import toast, { Toaster } from "react-hot-toast";
import PrivacyConsent from "../privacy/PrivacyConsent";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
    subject: "",
    privacy: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      toast.error("Devi accettare la Privacy Policy per continuare.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Messaggio inviato con successo!");
        // reset campi form
        setFormData({
          nome: "",
          email: "",
          messaggio: "",
          subject: "",
          privacy: false,
        });
      } else {
        toast.error(data.message || "Errore nell'invio del messaggio");
      }
    } catch (err) {
      toast.error("Errore nell'invio del messaggio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toaster: meglio metterlo una sola volta in _app.js, ma puoi tenerlo anche qui */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          success: {
            iconTheme: {
              primary: "#5cb4ad",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            aria-label="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
          />
        </div>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-label="Argomento"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
        >
          <option value="">Seleziona un argomento</option>
          <option value="Informazioni">Informazioni</option>
          <option value="Richiesta di call gratuita di 20 minuti">
            Richiesta di call gratuita di 20 minuti
          </option>
          <option value="Altro">Altro</option>
        </select>

        <textarea
          name="messaggio"
          placeholder="Scrivi il tuo messaggio..."
          aria-label="Messaggio"
          rows={6}
          value={formData.messaggio}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-1 focus:ring-purple100"
        />

        <PrivacyConsent checked={formData.privacy} onChange={handleChange} />

        <button
          type="submit"
          disabled={loading || !formData.privacy}
          className="group border border-purple100 px-[18px] py-[14px] text-md md:text-xl lg:text-lg xl:text-md 2xl:text-lg rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2
         hover:bg-purple100 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Invio..." : "Invia Messaggio"}
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
    </>
  );
}

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "../layout/Button";

export default function StepsContact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: [],
    message: "",
    privacy: false, // nuovo campo privacy
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Gestione input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") validateEmail(value);
  };

  // Checkbox obiettivi
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      goal: checked
        ? [...prevData.goal, value]
        : prevData.goal.filter((item) => item !== value),
    }));
  };

  // Validazione email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  // Navigazione step
  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy) {
      toast.error("Devi accettare la Privacy Policy per continuare.");
      return;
    }

    try {
      const res = await fetch("/api/progetto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(`Hey ${formData.name}, il messaggio è stato inviato 🎉`);
        setStep(5); // vai direttamente alla schermata di successo
      } else {
        const errorData = await res.json().catch(() => ({}));
        toast.error(errorData.message || "Invio fallito.");
      }
    } catch (err) {
      toast.error("Errore di rete, riprova più tardi.");
    }
  };

  // Validazione per disabilitare i bottoni Avanti
  const isNextButtonDisabled = () => {
    switch (step) {
      case 0:
        return false;
      case 1:
        return !formData.name;
      case 2:
        return !formData.email || !isEmailValid;
      case 3:
        return formData.goal.length === 0;
      case 4:
        return !formData.message || !formData.privacy;
      default:
        return false;
    }
  };

  const goalGroups = [
    {
      items: [
        {
          id: "direzione",
          value: "Trova la tua direzione",
          label: "Trova la tua direzione - Privati",
        },
        {
          id: "strada-lavoro",
          value: "Cambia e trova la tua strada nel lavoro",
          label: "Cambia e trova la tua strada nel lavoro - Privati",
        },
        {
          id: "lavoro-desideri",
          value: "Trova il lavoro che desideri",
          label: "Trova il lavoro che desideri - Privati",
        },
        {
          id: "radici",
          value: "Trova le tue radici",
          label: "Trova le tue radici - Privati",
        },
      ],
    },
    {
      items: [
        {
          id: "libera-professione",
          value: "Avvia la tua attività con consapevolezza",
          label:
            "Avvia la tua attività con consapevolezza - Libera Professione",
        },
      ],
    },
    {
      items: [
        {
          id: "organizzazioni",
          value: "Soluzioni su misura per crescere",
          label: "Soluzioni su misura per crescere - Organizzazioni",
        },
      ],
    },
  ];

  return (
    <>
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
      <div className="flex justify-center w-full lg:w-[90%] mx-auto pb-10 lg:pb-32">
        <div className="w-full lg:w-[500px] bg-purple100/20 h-1.5 mb-4">
          <div
            className="progress-bar"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full lg:w-[90%] mx-auto">
        {/* STEP 0 */}
        {step === 0 && (
          <div className="flex flex-col lg:max-w-3xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h1 className="mb-4 text-3xl font-bold lg:text-5xl text-gray100 font-abhaya">
              Prenota la tua consulenza
            </h1>
            <p className="mb-6 text-lg text-gray90 font-work">
              Compila il form in pochi passaggi e ottieni subito la tua
              consulenza personalizzata. Dedicata a privati, liberi
              professionisti, aspiranti tali e aziende che vogliono crescere e
              raggiungere i propri obiettivi con maggiore sicurezza.
            </p>
            <button
              onClick={nextStep}
              className="group border text-purple100 font-work border-purple100 px-[18px] py-[14px] text-sm md:text-xl lg:text-lg xl:text-md rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple100 hover:text-white"
            >
              <span className="px-2">inizia subito</span>
              <Icon
                icon="guidance:left-arrow"
                className="text-[1.5rem] text-first"
              />
            </button>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-4xl text-gray100 font-abhaya">
              Perfetto! Ci vorrà solo un minuto <br />
              per comprendere meglio la tua situazione.
            </h2>
            <p className="mb-6 text-lg text-gray90 font-work">
              Cominciamo con il tuo nome: come ti chiami?
            </p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-form__input text-l text-m_sm contact-form__input_pinched contact-form__input_pinched_t text-pink"
              placeholder="Inserisci il tuo nome*"
              required
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                indietro
              </button>
              <button
                onClick={nextStep}
                className={`group border text-purple100 font-work border-purple100 px-[18px] py-[14px] text-sm md:text-xl lg:text-lg xl:text-md rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple100 hover:text-white ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
                disabled={isNextButtonDisabled()}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col max-w-2xl gap-4 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-4xl text-gray100 font-abhaya">
              Ciao {formData.name}, puoi dirmi <br />
              qual è la tua email?
            </h2>
            <input
              id="email"
              className="text-pink contact-form__input text-l text-m_sm contact-form__input_pinched contact-form__input_pinched_t"
              name="email"
              placeholder="Inserisci la tua email*"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {!isEmailValid && (
              <p className="text-purple100">
                Per favore inserisci una email valida.
              </p>
            )}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                indietro
              </button>
              <button
                onClick={nextStep}
                className={`group border text-purple100 font-work border-purple100 px-[18px] py-[14px] text-sm md:text-xl lg:text-lg xl:text-md rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple100 hover:text-white ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
                disabled={isNextButtonDisabled()}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="max-w-2xl text-lg font-medium lg:text-2xl text-gray100 font-abhaya">
              Grazie {formData.name}! Per capire come posso supportarti al
              meglio, ho ancora qualche domanda.
            </h2>
            <h3 className="text-2xl font-bold lg:text-4xl text-gray100 font-abhaya">
              Quali sono i tuoi obiettivi?
            </h3>

            {/* griglia obiettivi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
              {goalGroups.flatMap((group) =>
                group.items.map((goal) => (
                  <label
                    key={goal.id}
                    htmlFor={goal.id}
                    className={`cursor-pointer goal-label flex items-center justify-center py-3 px-3 border rounded-sm hover:border-second ${
                      formData.goal.includes(goal.value)
                        ? "border-purple100 bg-purple100"
                        : "border-gray100 hover:border-purple100 hover:bg-purple100 hover:text-white transition-all duration-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="goal"
                      id={goal.id}
                      value={goal.value}
                      checked={formData.goal.includes(goal.value)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <p
                      className={`flex items-center text-center text-base ${
                        formData.goal.includes(goal.value)
                          ? "text-white font-semibold"
                          : "text-gray100 hover:text-white"
                      }`}
                    >
                      {goal.label}
                    </p>
                  </label>
                ))
              )}
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-second "
              >
                indietro
              </button>
              <button
                onClick={nextStep}
                className={`group border text-purple100 font-work border-purple100 px-[18px] py-[14px] text-sm md:text-xl lg:text-lg xl:text-md rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple100 hover:text-white ${
                  isNextButtonDisabled() ? "disabled opacity-40" : "opacity-100"
                }`}
                disabled={isNextButtonDisabled()}
              >
                <span className="px-2">Avanti</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="max-w-2xl text-2xl font-bold lg:text-4xl text-gray100 font-abhaya">
              Ultima domanda: {formData.name}, quali sono le difficoltà
              principali che stai incontrando?
            </h2>
            <h3 className="text-lg  lg:text-2xl text-gray90 font-work">
              Conoscere questi dettagli è fondamentale per capire come posso
              aiutarti a raggiungere i tuoi obiettivi.
            </h3>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-form__input text-l font-work text-m_sm contact-form__input_pinched contact-form__input_pinched_t text-gray100"
              placeholder="Sentiti liber@ di dirmi qualsiasi cosa*"
              required
            />

            {/* Privacy */}
            <div className="flex items-center gap-1">
              <input
                id="privacy"
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="border border-gray100 rounded-md !bg-transparent"
              />
              <label htmlFor="privacy" className="ms-1 text-gray100 font-work">
                Ho letto e accetto la{" "}
                <Link
                  href="https://www.iubenda.com/privacy-policy/68292067"
                  target="_blank"
                  className="underline decoration-purple100 decoration-2 text-purple100"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="px-4 py-2 underline text-gray100 "
              >
                indietro
              </button>
              <button
                onClick={handleSubmit}
                className={`group border text-purple100 font-work border-purple100 px-[18px] py-[14px] text-sm md:text-xl lg:text-lg xl:text-md rounded-sm transition-all duration-300 max-w-max uppercase flex items-center gap-2 hover:bg-purple100 hover:text-white ${
                  !formData.message || !formData.privacy
                    ? "opacity-40"
                    : "opacity-100"
                }`}
                disabled={!formData.message || !formData.privacy}
              >
                <span className="px-2">Invia</span>
                <Icon
                  icon="guidance:left-arrow"
                  className="text-[1.5rem] text-first"
                />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 - Success */}
        {step === 5 && (
          <div className="flex flex-col max-w-2xl gap-4 pb-10 mx-auto lg:items-center lg:text-center lg:justify-center">
            <h2 className="text-2xl font-bold lg:text-5xl text-gray100 font-abhaya">
              Woo-ooh! 🎉
            </h2>

            <p className="mb-5 text-lg text-gray90 font-work">
              La tua richiesta è stata inviata con successo e riceverai presto
              una mail di conferma.
            </p>
            <p className="mb-5 text-lg text-gray90 font-work">
              Entro 72 ore ti risponderò per pianificare la tua consulenza.
            </p>

            <Button
              href="/tutti-i-percorsi"
              text="Scopri tutti i percorsi"
              title="Scopri tutti i percorsi"
            >
              Scopri tutti i percorsi
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

// components/ContactButton.jsx
import ContactForm2 from "../layout/ContactForm2";

export default function ContactButton() {
  return (
    <div className="w-full  my-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-[6vw] md:text-[8vw] lg:text-[2vw] font-abhaya font-bold leading-none text-gray100">
          Vuoi partecipare ad una sessione <br />
          di Respiro Circolare Consapevole?
        </h2>
        <p className="text-lg text-gray90 font-work">
          Contattami per qualsiasi domanda o per prenotare una sessione.
        </p>
        <p className="text-lg text-gray90 font-work">
          Compila il form qui a fianco oppure scrivimi direttamente a{" "}
          <a
            href="mailto:welcome@annamariaricci.eu"
            className="text-purple100 hover:underline"
          >
            welcome@annamariaricci.eu
          </a>
        </p>
      </div>
      <div>
        <ContactForm2 />
      </div>
    </div>
  );
}

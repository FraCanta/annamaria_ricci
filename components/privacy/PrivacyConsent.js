import Link from "next/link";

export default function PrivacyConsent({
  checked,
  id = "privacy",
  name = "privacy",
  onChange,
}) {
  return (
    <div className="flex items-start gap-2 text-left">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required
        className="mt-1 h-4 w-4 flex-shrink-0 border border-gray100 bg-transparent accent-purple100"
      />
      <label htmlFor={id} className="text-sm leading-relaxed text-gray100">
        Ho letto e accetto la{" "}
        <Link
          href="/privacy-policy"
          target="_blank"
          className="font-semibold text-purple100 underline decoration-purple100 decoration-2"
        >
          Privacy Policy
        </Link>{" "}
        e autorizzo il trattamento dei dati per essere ricontattato.
      </label>
    </div>
  );
}


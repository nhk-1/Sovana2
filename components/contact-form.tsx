'use client';

import { FormEvent, useState } from 'react';

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const values = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim()
    };

    const newErrors: FormErrors = {};

    if (!values.name) newErrors.name = 'Veuillez renseigner votre nom.';
    if (!emailRegex.test(values.email)) newErrors.email = 'Veuillez renseigner un email professionnel valide.';
    if (!values.company) newErrors.company = 'Veuillez renseigner le nom de votre entreprise.';
    if (values.message.length < 20) {
      newErrors.message = 'Décrivez votre besoin avec au moins 20 caractères.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  };

  const fieldClass =
    'mt-2 w-full rounded-xl border border-white/15 bg-[#0f1424] px-4 py-3 text-sm text-text outline-none transition focus:border-cyan';

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm text-text">
            Nom
          </label>
          <input id="name" name="name" className={fieldClass} />
          {errors.name ? <p className="mt-1 text-xs text-accent">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-text">
            Email
          </label>
          <input id="email" name="email" type="email" className={fieldClass} />
          {errors.email ? <p className="mt-1 text-xs text-accent">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="company" className="text-sm text-text">
            Entreprise
          </label>
          <input id="company" name="company" className={fieldClass} />
          {errors.company ? <p className="mt-1 text-xs text-accent">{errors.company}</p> : null}
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-text">
            Message
          </label>
          <textarea id="message" name="message" rows={5} className={fieldClass} />
          {errors.message ? <p className="mt-1 text-xs text-accent">{errors.message}</p> : null}
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-signature px-6 py-3 text-sm font-semibold text-text shadow-glow transition hover:scale-[1.01]"
        >
          Envoyer ma demande
        </button>
      </form>
      {submitted ? (
        <p className="mt-5 rounded-xl border border-cyan/40 bg-cyan/10 p-3 text-sm text-cyan">
          Merci, votre message a bien été envoyé. Nous revenons vers vous sous 24h ouvrées.
        </p>
      ) : null}
    </div>
  );
}

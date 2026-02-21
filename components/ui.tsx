import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const styles =
    variant === 'primary'
      ? 'bg-signature text-text shadow-glow hover:scale-[1.01]'
      : 'border border-white/20 bg-white/5 text-text hover:border-cyan hover:bg-white/10';

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, eyebrow, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 max-w-3xl space-y-4">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-cyan">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold leading-tight text-text md:text-4xl">{title}</h2>
        {description ? <p className="text-base text-muted md:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan/70 hover:bg-white/[0.04]">
      <h3 className="mb-3 text-lg font-semibold text-text">{title}</h3>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </article>
  );
}

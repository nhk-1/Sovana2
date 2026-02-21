import { ButtonLink } from '@/components/ui';

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <article
      className={`rounded-2xl border p-6 ${
        highlighted ? 'border-primary bg-white/[0.05] shadow-glow' : 'border-white/10 bg-white/[0.02]'
      }`}
    >
      <p className="text-sm font-medium text-cyan">{name}</p>
      <p className="mt-4 text-3xl font-semibold text-text">{price}</p>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <ul className="mt-6 space-y-2 text-sm text-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href="/contact" variant={highlighted ? 'primary' : 'secondary'}>
          Choisir {name}
        </ButtonLink>
      </div>
    </article>
  );
}

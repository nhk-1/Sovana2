import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'À propos de Sovana',
  description: 'Découvrez la vision, la mission et les valeurs de Sovana, partenaire IT des PME ambitieuses.'
};

const values = [
  {
    title: 'Rigueur',
    text: 'Des analyses précises, des plans clairs, des livrables exploitables.'
  },
  {
    title: 'Performance',
    text: 'Chaque action technique vise un gain mesurable pour votre activité.'
  },
  {
    title: 'Fiabilité',
    text: 'Des systèmes stables, sécurisés et pensés pour durer.'
  },
  {
    title: 'Clarté',
    text: 'Un discours compréhensible, orienté décision et impact business.'
  }
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="À propos"
        title="Sovana, partenaire stratégique de votre transformation IT"
        description="Nous accompagnons les dirigeants et équipes opérationnelles dans la construction d’un système informatique robuste, agile et aligné avec les objectifs de croissance."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Vision</h3>
            <p className="mt-3 text-sm text-muted">Permettre à chaque PME de disposer d’un socle technologique digne des meilleures organisations, sans complexité inutile.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Mission</h3>
            <p className="mt-3 text-sm text-muted">Transformer l’IT en levier de productivité, de fiabilité et de croissance durable grâce à une exécution méthodique.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Nos valeurs" description="Un cadre d’intervention exigeant pour des résultats consistants.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold text-text">{value.title}</h3>
              <p className="mt-3 text-sm text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Approche méthodique"
        description="Notre méthode associe expertise technique avancée et compréhension fine des priorités business."
      >
        <ol className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-muted">
          <li>
            <span className="font-semibold text-text">1. Diagnostic : </span>analyse terrain, priorités, risques et dépendances.
          </li>
          <li>
            <span className="font-semibold text-text">2. Priorisation : </span>plan d’actions classé par impact et faisabilité.
          </li>
          <li>
            <span className="font-semibold text-text">3. Exécution : </span>implémentations progressives, mesurées et documentées.
          </li>
          <li>
            <span className="font-semibold text-text">4. Amélioration continue : </span>suivi des KPI, ajustements et montée en maturité.
          </li>
        </ol>
      </SectionWrapper>
    </>
  );
}

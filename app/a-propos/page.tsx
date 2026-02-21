import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'À propos de Sovana à Beauvais',
  description:
    'Découvrez la vision, la mission et les valeurs de Sovana : un accompagnement informatique professionnel, pédagogique et rassurant autour de Beauvais.'
};

const values = [
  {
    title: 'Rigueur',
    text: 'Chaque intervention suit une méthode claire pour garantir des résultats fiables.'
  },
  {
    title: 'Performance',
    text: 'Nous améliorons vos usages numériques avec des actions concrètes et mesurables.'
  },
  {
    title: 'Fiabilité',
    text: 'Nous privilégions des solutions durables, stables et adaptées à votre réalité.'
  },
  {
    title: 'Clarté',
    text: 'Nous expliquons simplement les choix techniques pour vous aider à décider en confiance.'
  }
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="À propos"
        title="Sovana, un partenaire numérique de confiance"
        description="Basée autour de Beauvais, Sovana accompagne particuliers, seniors et professionnels avec une expertise technique solide et une approche humaine."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Vision</h3>
            <p className="mt-3 text-sm text-muted">
              Rendre l’informatique moderne réellement utile, accessible et rassurante pour tous les profils d’utilisateurs.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Mission</h3>
            <p className="mt-3 text-sm text-muted">
              Sécuriser et optimiser votre environnement numérique grâce à des services informatiques locaux, pédagogiques et professionnels.
            </p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Nos valeurs" description="Un cadre clair pour bâtir une relation durable et efficace.">
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
        title="Une approche méthodique, orientée résultats"
        description="Notre manière de travailler combine expertise technique et compréhension des enjeux de terrain."
      >
        <ol className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-muted">
          <li>
            <span className="font-semibold text-text">1. Écoute : </span>nous comprenons votre contexte, vos contraintes et vos attentes.
          </li>
          <li>
            <span className="font-semibold text-text">2. Diagnostic : </span>nous identifions les causes réelles des difficultés rencontrées.
          </li>
          <li>
            <span className="font-semibold text-text">3. Intervention : </span>nous appliquons des solutions simples, robustes et documentées.
          </li>
          <li>
            <span className="font-semibold text-text">4. Suivi : </span>nous vous transmettons les bons réflexes pour rester autonome et serein.
          </li>
        </ol>
      </SectionWrapper>
    </>
  );
}

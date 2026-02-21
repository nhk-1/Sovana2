import { ButtonLink, Card, SectionWrapper } from '@/components/ui';

const painPoints = [
  'Un ordinateur lent ou des blocages qui perturbent votre quotidien.',
  'Des outils numériques mal configurés qui font perdre du temps.',
  'Des inquiétudes sur la sécurité, les sauvegardes et la confidentialité de vos données.'
];

const coreServices = [
  {
    title: 'Assistance à distance',
    text: 'Intervention rapide pour résoudre les problèmes courants sans vous déplacer : lenteurs, logiciels, messagerie, imprimante, configuration.'
  },
  {
    title: 'Intervention à domicile',
    text: 'Accompagnement sur place à Beauvais et alentours pour installation, dépannage informatique et optimisation de vos équipements.'
  },
  {
    title: 'Packs d’accompagnement',
    text: 'Des formules claires pour sécuriser votre poste, réussir une installation complète ou protéger durablement vos données.'
  }
];

const differentiators = [
  'Une communication pédagogique, sans jargon, adaptée aux seniors comme aux professionnels.',
  'Un accompagnement local et rassurant dans un rayon de 20 km autour de Beauvais.',
  'Des interventions structurées avec des conseils concrets pour éviter les pannes récurrentes.'
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-14 pt-20 md:pb-24 md:pt-28">
        <div className="max-w-3xl animate-fade-in-up space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Votre partenaire numérique de confiance</p>
          <h1 className="text-4xl font-semibold leading-tight text-text md:text-6xl">
            Sovana — L’ingénierie informatique au service de votre croissance.
          </h1>
          <p className="text-base text-muted md:text-xl">
            Nous aidons les particuliers, seniors, indépendants et petites structures à Beauvais à retrouver un numérique
            fiable, clair et serein grâce à des services informatiques locaux de qualité.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Découvrir nos services
            </ButtonLink>
          </div>
        </div>
      </section>

      <SectionWrapper
        eyebrow="Problèmes fréquents"
        title="Quand l’informatique devient un frein"
        description="Nous intervenons quand votre matériel, vos logiciels ou votre organisation numérique vous font perdre du temps et de la sérénité."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {painPoints.map((pain) => (
            <Card key={pain} title="Situation rencontrée">
              {pain}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Nos services"
        title="Une assistance informatique à domicile et à distance"
        description="Des solutions adaptées à votre niveau, à votre activité et à vos priorités pour un dépannage informatique efficace."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {coreServices.map((service) => (
            <Card key={service.title} title={service.title}>
              {service.text}
            </Card>
          ))}
        </div>
      </SectionWrapper>



      <SectionWrapper
        eyebrow="Tarifs"
        title="Des prix transparents pour avancer en confiance"
        description="Prestations horaires et packs structurés pour répondre à vos besoins sans surprise."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Assistance à distance">50 € / heure pour un dépannage rapide et efficace.</Card>
          <Card title="Intervention à domicile">70 € / heure à Beauvais et alentours (déplacement inclus jusqu’à 10 km).</Card>
          <Card title="Packs Sovana">Pack PC Sérénité 149 €, Installation Complète 189 €, Sécurité & Sauvegarde 169 €.</Card>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Zone d’intervention"
        title="Beauvais et 20 km autour"
        description="Sovana intervient localement pour garantir proximité, disponibilité et accompagnement humain sur le long terme."
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-sm text-muted md:text-base">
          <p>
            Intervention à domicile à Beauvais et dans les communes voisines. Les déplacements sont inclus dans un rayon de 10 km,
            puis facturés 10 € entre 10 et 20 km.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Pourquoi Sovana"
        title="Un service rassurant, professionnel et accessible"
        description="Notre approche combine expertise technique, pédagogie et sens du service pour vous aider durablement."
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <ul className="space-y-4 text-sm text-muted md:text-base">
            {differentiators.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-primary/40 bg-[linear-gradient(135deg,rgba(30,94,255,0.2),rgba(89,195,247,0.08))] p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-text md:text-3xl">Besoin d’un accompagnement informatique fiable à Beauvais ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base">
            Contactez Sovana pour un échange clair et sans engagement. Nous vous orientons vers la solution la plus adaptée à
            votre situation.
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink href="/contact">Être rappelé rapidement</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

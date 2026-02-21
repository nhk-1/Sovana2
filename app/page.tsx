import { ButtonLink, Card, SectionWrapper } from '@/components/ui';

const pains = [
  'Des outils dispersés qui ralentissent vos équipes et créent des erreurs.',
  'Une infrastructure instable qui génère des interruptions coûteuses.',
  'Des tâches répétitives qui consomment un temps opérationnel stratégique.'
];

const services = [
  {
    title: 'Audit & Conseil IT',
    text: 'Nous alignons votre système d’information avec vos enjeux business grâce à une feuille de route précise et actionnable.'
  },
  {
    title: 'Automatisation des processus',
    text: 'Nous supprimons les frictions opérationnelles en automatisant les tâches clés de vos équipes.'
  },
  {
    title: 'Infrastructure & Réseaux',
    text: 'Nous sécurisons et modernisons votre socle technique pour une performance durable.'
  },
  {
    title: 'Maintenance & Support',
    text: 'Nous assurons un accompagnement réactif avec des engagements de service clairs.'
  }
];

const differentiators = [
  'Une approche conseil + exécution : recommandations concrètes, livraison mesurable.',
  'Un pilotage orienté ROI : chaque action technique est reliée à un gain business.',
  'Une communication claire pour dirigeants : priorités, risques et décisions simplifiées.'
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-14 pt-20 md:pb-24 md:pt-28">
        <div className="max-w-3xl animate-fade-in-up space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">Ingénierie informatique premium</p>
          <h1 className="text-4xl font-semibold leading-tight text-text md:text-6xl">
            Sovana — L’ingénierie informatique au service de votre croissance.
          </h1>
          <p className="text-base text-muted md:text-xl">
            Nous aidons les PME, entrepreneurs et indépendants à structurer leur IT, automatiser leurs processus et fiabiliser
            leur infrastructure pour accélérer leur développement.
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
        eyebrow="Constat"
        title="Vos enjeux IT freinent votre potentiel"
        description="Quand les fondations techniques ne suivent pas la croissance, la productivité baisse et les décisions deviennent plus risquées."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pains.map((pain) => (
            <Card key={pain} title="Douleur identifiée">
              {pain}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Solutions"
        title="Des interventions concrètes, orientées performance"
        description="Nous priorisons les actions à fort impact pour sécuriser votre activité et augmenter votre efficacité opérationnelle."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title}>
              {service.text}
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Pourquoi Sovana"
        title="Une méthode robuste, une exécution propre"
        description="Nous combinons excellence technique, cadre méthodique et compréhension business pour délivrer des résultats durables."
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

      <SectionWrapper
        eyebrow="Témoignages"
        title="Des collaborations qui créent de la valeur"
        description="Exemples de retours clients sur nos accompagnements stratégiques et opérationnels."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card title="PME industrielle">
            « En 8 semaines, Sovana a stabilisé notre infrastructure et automatisé notre reporting. Résultat : +30% de temps gagné
            côté direction opérationnelle. »
          </Card>
          <Card title="Cabinet de conseil">
            « Une approche claire, structurée et proactive. Nous avons enfin une vision fiable de notre SI et de nos priorités
            d’investissement. »
          </Card>
        </div>
      </SectionWrapper>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-primary/40 bg-[linear-gradient(135deg,rgba(30,94,255,0.2),rgba(89,195,247,0.08))] p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-text md:text-3xl">Prêt à rendre votre système informatique plus performant ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted md:text-base">
            Échangeons sur vos objectifs et bâtissons un plan d’action IT aligné avec votre croissance.
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink href="/contact">Parler à un expert Sovana</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

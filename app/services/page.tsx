import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services IT pour PME et entrepreneurs',
  description: 'Découvrez les services Sovana : audit IT, automatisation, infrastructure, monitoring, outils internes et support.'
};

const services = [
  {
    title: 'Audit & Conseil IT',
    description: 'Cartographie de votre existant, évaluation des risques et définition d’une feuille de route priorisée.',
    problems: 'Manque de vision IT, décisions techniques réactives, coûts cachés.',
    benefits: 'Pilotage maîtrisé, réduction des risques, investissements ciblés.',
    example: 'Audit 360° d’une PME multisite avec plan d’actions sur 12 mois.'
  },
  {
    title: 'Automatisation & Optimisation des processus',
    description: 'Automatisation des flux métiers répétitifs et standardisation des routines opérationnelles.',
    problems: 'Perte de temps, erreurs manuelles, faible traçabilité.',
    benefits: 'Gains de productivité, meilleure fiabilité, équipes recentrées sur la valeur.',
    example: 'Automatisation du cycle devis-facturation-relance pour un cabinet de services.'
  },
  {
    title: 'Infrastructure & Réseaux',
    description: 'Conception, modernisation et sécurisation de votre socle technique.',
    problems: 'Pannes récurrentes, architecture vieillissante, performance limitée.',
    benefits: 'Haute disponibilité, sécurité renforcée, scalabilité.',
    example: 'Refonte d’une architecture hybride avec segmentation réseau et sauvegarde robuste.'
  },
  {
    title: 'Monitoring & Supervision',
    description: 'Mise en place d’indicateurs, alertes intelligentes et tableaux de bord temps réel.',
    problems: 'Incidents détectés trop tard, absence de visibilité, interventions subies.',
    benefits: 'Anticipation des incidents, continuité de service, meilleure qualité opérationnelle.',
    example: 'Déploiement d’un centre de supervision simplifié avec alerting multi-canal.'
  },
  {
    title: 'Développement d’outils internes',
    description: 'Création d’outils web internes pour vos flux critiques et votre pilotage.',
    problems: 'Outils génériques inadaptés, multiplications des fichiers manuels.',
    benefits: 'Processus unifiés, efficacité accrue, adoption facilitée.',
    example: 'Développement d’un portail interne de suivi opérationnel et de KPI direction.'
  },
  {
    title: 'Maintenance & Support',
    description: 'Support utilisateur, maintenance préventive et curative avec engagements clairs.',
    problems: 'Interruptions fréquentes, support non structuré, manque de réactivité.',
    benefits: 'Stabilité quotidienne, assistance fiable, baisse des interruptions.',
    example: 'Contrat de maintenance mensuel avec SLA et revue de performance trimestrielle.'
  }
];

export default function ServicesPage() {
  return (
    <SectionWrapper
      eyebrow="Services"
      title="Un accompagnement complet pour fiabiliser votre IT"
      description="Chaque mission est structurée autour de vos enjeux de croissance, de sécurité et de performance opérationnelle."
    >
      <div className="space-y-4">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h3 className="text-xl font-semibold text-text">{service.title}</h3>
            <p className="mt-3 text-sm text-muted md:text-base">{service.description}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan">Problèmes résolus</p>
                <p className="mt-2 text-sm text-muted">{service.problems}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan">Bénéfices</p>
                <p className="mt-2 text-sm text-muted">{service.benefits}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan">Exemple d’intervention</p>
                <p className="mt-2 text-sm text-muted">{service.example}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

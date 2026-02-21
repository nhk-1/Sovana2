import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services informatiques à Beauvais',
  description:
    'Assistance informatique à domicile, dépannage informatique, audit, monitoring et support : découvrez les services Sovana pour Beauvais et ses alentours.'
};

const services = [
  {
    title: 'Audit & Conseil IT',
    description: 'Analyse de vos usages et de votre matériel pour identifier les priorités techniques et les bonnes pratiques.',
    problems: 'Parc informatique désorganisé, outils mal utilisés, budget mal orienté.',
    benefits: 'Vision claire, plan d’action pragmatique, décisions plus sereines.',
    example: 'Diagnostic complet pour une activité indépendante avec recommandations simples à appliquer.'
  },
  {
    title: 'Automatisation & Optimisation des processus',
    description: 'Simplification des tâches répétitives (classement, sauvegardes, routines bureautiques).',
    problems: 'Perte de temps, erreurs manuelles, étapes inutiles au quotidien.',
    benefits: 'Temps gagné, meilleure fiabilité, usage plus confortable.',
    example: 'Mise en place d’une routine automatisée de sauvegarde et d’archivage documentaire.'
  },
  {
    title: 'Infrastructure & Réseaux',
    description: 'Configuration et amélioration de votre réseau, Wi-Fi, postes et périphériques pour une base stable.',
    problems: 'Connexion instable, imprimante indisponible, matériel mal paramétré.',
    benefits: 'Réseau fiable, meilleure performance, moins d’interruptions.',
    example: 'Reconfiguration complète d’un réseau domestique et professionnel léger à Beauvais.'
  },
  {
    title: 'Monitoring & Supervision',
    description: 'Suivi préventif de vos équipements clés afin d’anticiper les incidents.',
    problems: 'Pannes soudaines, absence de visibilité, interventions en urgence répétées.',
    benefits: 'Moins d’imprévus, continuité de service, meilleure tranquillité.',
    example: 'Mise en place d’alertes de capacité disque et d’état de sauvegarde.'
  },
  {
    title: 'Développement d’outils internes',
    description: 'Création d’outils simples pour fluidifier votre gestion quotidienne.',
    problems: 'Tableaux dispersés, suivi manuel, manque de centralisation.',
    benefits: 'Processus structurés, meilleure organisation, visibilité opérationnelle.',
    example: 'Mini-outil interne de suivi clients et interventions pour petite structure.'
  },
  {
    title: 'Maintenance & Support',
    description: 'Assistance à distance et intervention à domicile avec un accompagnement pédagogique.',
    problems: 'Blocages techniques récurrents, manque d’aide réactive, stress numérique.',
    benefits: 'Support humain, résolution rapide, montée en autonomie des utilisateurs.',
    example: 'Dépannage informatique à domicile pour senior avec reprise en main complète du poste.'
  }
];

export default function ServicesPage() {
  return (
    <SectionWrapper
      eyebrow="Services"
      title="Des services informatiques locaux, utiles et compréhensibles"
      description="Sovana intervient à Beauvais et dans l’Oise pour résoudre vos problèmes techniques avec méthode et pédagogie."
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

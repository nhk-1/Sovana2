import type { Metadata } from 'next';
import { PricingCard } from '@/components/pricing-card';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tarification des services IT',
  description: 'Découvrez les offres Sovana : Essentiel, Croissance et Sur-mesure, pensées pour les besoins des PME.'
};

const offers = [
  {
    name: 'Pack Essentiel',
    price: '490€ / mois',
    description: 'Pour structurer les bases et sécuriser l’existant.',
    highlighted: false,
    features: ['Audit de démarrage trimestriel', 'Support prioritaire par email', 'Maintenance préventive mensuelle', 'Reporting synthétique']
  },
  {
    name: 'Pack Croissance',
    price: '990€ / mois',
    description: 'Pour accélérer et automatiser vos opérations IT.',
    highlighted: true,
    features: [
      'Tout le pack Essentiel',
      'Automatisations ciblées mensuelles',
      'Supervision proactive 24/7',
      'Comité de pilotage mensuel'
    ]
  },
  {
    name: 'Pack Sur-mesure',
    price: 'Sur devis',
    description: 'Pour les environnements complexes ou multisites.',
    highlighted: false,
    features: ['Architecture personnalisée', 'Développement d’outils internes', 'SLA renforcé', 'Accompagnement stratégique direction']
  }
];

export default function PricingPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Tarification"
        title="Des offres conçues pour la réalité des PME"
        description="Nos tarifs sont positionnés pour offrir un niveau premium, avec un impact mesurable sur votre productivité et votre fiabilité."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <PricingCard key={offer.name} {...offer} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Comparatif des prestations"
        description="Visualisez rapidement le niveau d’accompagnement de chaque formule."
      >
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-left text-sm text-muted">
            <thead className="bg-white/[0.03] text-text">
              <tr>
                <th className="px-4 py-3">Prestation</th>
                <th className="px-4 py-3">Essentiel</th>
                <th className="px-4 py-3">Croissance</th>
                <th className="px-4 py-3">Sur-mesure</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Audit IT', 'Trimestriel', 'Mensuel', 'Personnalisé'],
                ['Supervision', 'Basique', 'Proactive 24/7', 'Avancée'],
                ['Automatisation', '—', 'Incluse', 'Sur périmètre défini'],
                ['Comité stratégique', '—', 'Mensuel', 'À la demande']
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper title="FAQ" description="Questions fréquentes sur nos modalités d’accompagnement.">
        <div className="space-y-3">
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Puis-je changer de pack en cours de contrat ?</summary>
            <p className="mt-2 text-sm text-muted">Oui, nous ajustons la formule selon l’évolution de vos priorités business et techniques.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Proposez-vous des interventions ponctuelles ?</summary>
            <p className="mt-2 text-sm text-muted">Oui, sous forme de missions ciblées, notamment pour audit, migration ou automatisation.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Quel est le délai de démarrage ?</summary>
            <p className="mt-2 text-sm text-muted">En général 5 à 10 jours ouvrés après validation du périmètre et des objectifs.</p>
          </details>
        </div>
      </SectionWrapper>
    </>
  );
}

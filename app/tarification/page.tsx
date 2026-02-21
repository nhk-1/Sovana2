import type { Metadata } from 'next';
import { PricingCard } from '@/components/pricing-card';
import { SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tarifs assistance informatique à Beauvais',
  description:
    'Consultez les tarifs Sovana : assistance à distance, intervention à domicile et packs informatiques pensés pour particuliers, seniors et petites structures.'
};

const offers = [
  {
    name: 'Pack PC Sérénité',
    price: '149 €',
    description: 'Pour retrouver un ordinateur stable et agréable à utiliser.',
    highlighted: false,
    features: ['Optimisation générale du poste', 'Nettoyage logiciel', 'Mises à jour sécurité', 'Conseils d’usage personnalisés']
  },
  {
    name: 'Pack Installation Complète',
    price: '189 €',
    description: 'Pour une mise en service complète, claire et sans stress.',
    highlighted: true,
    features: ['Installation poste + périphériques', 'Configuration internet et email', 'Transfert de base des données', 'Prise en main guidée']
  },
  {
    name: 'Pack Sécurité & Sauvegarde',
    price: '169 €',
    description: 'Pour protéger vos données et limiter les risques de perte.',
    highlighted: false,
    features: ['Configuration sauvegarde automatique', 'Vérification sécurité système', 'Bonnes pratiques cybersécurité', 'Plan de récupération simplifié']
  }
];

export default function PricingPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Tarification"
        title="Des tarifs clairs, justes et adaptés aux besoins locaux"
        description="Notre positionnement est professionnel et accessible pour les PME, indépendants, particuliers et seniors autour de Beauvais."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <PricingCard key={offer.name} {...offer} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Interventions ponctuelles" description="Des prestations à l’heure pour répondre rapidement à un besoin ciblé.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Assistance à distance</h3>
            <p className="mt-3 text-3xl font-semibold text-text">50 € / heure</p>
            <p className="mt-2 text-sm text-muted">Idéal pour les blocages courants, la configuration logicielle et le support réactif.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold text-text">Intervention à domicile</h3>
            <p className="mt-3 text-3xl font-semibold text-text">70 € / heure</p>
            <p className="mt-2 text-sm text-muted">Parfait pour les problèmes matériels, réseau local, installation et accompagnement personnalisé.</p>
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Tableau comparatif" description="Comparez rapidement les options pour choisir la formule la plus adaptée.">
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-left text-sm text-muted">
            <thead className="bg-white/[0.03] text-text">
              <tr>
                <th className="px-4 py-3">Prestation</th>
                <th className="px-4 py-3">À distance</th>
                <th className="px-4 py-3">À domicile</th>
                <th className="px-4 py-3">Packs</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tarif', '50 € / heure', '70 € / heure', '149 € à 189 €'],
                ['Déplacement', 'Non concerné', 'Inclus 0-10 km', 'Selon type de pack'],
                ['Zone 10-20 km', '—', 'Forfait 10 €', 'Forfait 10 € si déplacement'],
                ['Cas d’usage', 'Dépannage rapide', 'Installation / matériel', 'Accompagnement structuré']
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

      <SectionWrapper title="FAQ" description="Réponses aux questions les plus fréquentes avant une intervention.">
        <div className="space-y-3">
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Comment sont calculés les frais de déplacement ?</summary>
            <p className="mt-2 text-sm text-muted">Les déplacements sont inclus jusqu’à 10 km autour de Beauvais, puis un forfait de 10 € s’applique entre 10 et 20 km.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Les seniors peuvent-ils bénéficier d’un accompagnement pédagogique ?</summary>
            <p className="mt-2 text-sm text-muted">Oui, chaque intervention est expliquée avec des mots simples pour vous rendre autonome progressivement.</p>
          </details>
          <details className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-sm font-medium text-text">Proposez-vous des solutions pour petites entreprises ?</summary>
            <p className="mt-2 text-sm text-muted">Oui, nous accompagnons aussi les indépendants et petites structures avec des prestations sur mesure selon votre activité.</p>
          </details>
        </div>
      </SectionWrapper>
    </>
  );
}

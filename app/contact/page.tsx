import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { SectionWrapper } from '@/components/ui';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contactez Sovana',
  description: 'Demandez un devis ou planifiez un échange avec nos experts IT pour PME.'
};

export default function ContactPage() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Échangeons sur vos enjeux informatiques"
      description="Décrivez votre contexte et vos objectifs. Nous revenons vers vous rapidement avec une recommandation claire."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />
        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-semibold text-text">Coordonnées professionnelles</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <span className="text-text">Email :</span> {siteConfig.email}
            </li>
            <li>
              <span className="text-text">Téléphone :</span> {siteConfig.phone}
            </li>
            <li>
              <span className="text-text">Localisation :</span> {siteConfig.location}
            </li>
            <li>
              <span className="text-text">Disponibilité :</span> Lun-Ven, 9h00–18h30
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Votre demande est traitée avec confidentialité. Nous vous proposons un premier échange orienté solutions, sans jargon inutile.
          </p>
        </aside>
      </div>
    </SectionWrapper>
  );
}

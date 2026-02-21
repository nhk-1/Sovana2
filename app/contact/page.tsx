import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { SectionWrapper } from '@/components/ui';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact assistance informatique Beauvais',
  description:
    'Contactez Sovana pour une assistance informatique à domicile ou à distance à Beauvais : dépannage, installation, maintenance et conseil.'
};

export default function ContactPage() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Parlons de votre besoin informatique"
      description="Décrivez votre situation en quelques lignes. Nous vous répondons rapidement avec une solution claire et adaptée."
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
              <span className="text-text">Zone :</span> {siteConfig.location}
            </li>
            <li>
              <span className="text-text">Disponibilité :</span> Lun-Ven, 9h00–18h30
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            Nous privilégions un accompagnement rassurant, notamment pour les seniors et les personnes peu à l’aise avec
            l’informatique.
          </p>
        </aside>
      </div>
    </SectionWrapper>
  );
}

import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Sovana',
  url: 'https://sovana.fr',
  description:
    'Sovana, votre partenaire numérique de confiance à Beauvais : assistance informatique à domicile, dépannage informatique et services informatiques locaux pour particuliers, seniors et petites structures.',
  phone: '+33 6 12 34 56 78',
  email: 'contact@sovana.fr',
  location: 'Beauvais (Oise) — interventions dans un rayon de 20 km'
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Sovana — Assistance informatique à Beauvais',
    template: '%s | Sovana'
  },
  description: siteConfig.description,
  keywords: [
    'assistance informatique à domicile Beauvais',
    'dépannage informatique Beauvais',
    'services informatiques locaux',
    'support informatique seniors',
    'intervention informatique Oise'
  ],
  openGraph: {
    title: 'Sovana — Votre partenaire numérique de confiance à Beauvais',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'fr_FR',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

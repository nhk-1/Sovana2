import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Sovana',
  url: 'https://sovana.fr',
  description:
    'Sovana accompagne les PME, entrepreneurs et indépendants dans la structuration, l’optimisation et la performance de leur système informatique.',
  phone: '+33 1 89 70 44 22',
  email: 'contact@sovana.fr',
  location: 'Lyon, France'
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Sovana — Ingénierie informatique premium pour PME',
    template: '%s | Sovana'
  },
  description: siteConfig.description,
  keywords: [
    'services informatiques PME',
    'audit IT',
    'automatisation processus',
    'infrastructure réseaux',
    'maintenance informatique'
  ],
  openGraph: {
    title: 'Sovana — Ingénierie informatique premium pour PME',
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

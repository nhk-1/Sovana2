import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Footer, Navbar } from '@/components/layout';
import { defaultMetadata, siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: 'France',
    description: siteConfig.description
  };
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="relative min-h-screen overflow-x-hidden bg-background">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(30,94,255,0.25),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(126,214,249,0.18),transparent_35%)]" />
          <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

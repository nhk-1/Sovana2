import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/tarification', label: 'Tarifs' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-text">
          Sovana
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-muted transition hover:text-text">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-text transition hover:border-cyan"
        >
          Demander un devis
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c16]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-text">Sovana</p>
          <p className="mt-3 text-sm text-muted">Ingénierie informatique premium pour structurer votre croissance.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-text">Liens rapides</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-text">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-text">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.location}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

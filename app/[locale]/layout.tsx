import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import NavBar from '@/components/NavBar';
import PrivacyBanner from '@/components/PrivacyBanner';
import QuickExit from '@/components/QuickExit';
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Know Your Rights / Conoce Tus Derechos',
  description:
    'Free bilingual legal rights guide for immigrants. No tracking, no cookies.',
  robots: 'noindex, nofollow',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; frame-src 'none'; object-src 'none'";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        <meta name="referrer" content="no-referrer" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D4E6B" />
      </head>
      <body className="font-sans min-h-screen bg-stone-50 text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <ServiceWorkerRegister />
          <PrivacyBanner />
          <NavBar />
          <main>{children}</main>
          <QuickExit />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

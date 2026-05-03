'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    sessionStorage.setItem('locale', next);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="flex items-center gap-1 text-sm font-medium" aria-label="Language toggle">
      <button
        onClick={() => switchLocale('en')}
        aria-pressed={locale === 'en'}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-brand ${
          locale === 'en'
            ? 'bg-brand text-white'
            : 'text-brand hover:bg-brand-light'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300" aria-hidden>|</span>
      <button
        onClick={() => switchLocale('es')}
        aria-pressed={locale === 'es'}
        disabled={isPending}
        className={`px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-brand ${
          locale === 'es'
            ? 'bg-brand text-white'
            : 'text-brand hover:bg-brand-light'
        }`}
      >
        ES
      </button>
    </div>
  );
}

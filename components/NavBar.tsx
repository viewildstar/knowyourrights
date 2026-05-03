import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';

export default function NavBar() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-semibold text-brand hover:text-brand/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('home')}
          </Link>
          <Link
            href="/rights"
            className="text-gray-600 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('rights')}
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('about')}
          </Link>
        </div>
        <LanguageToggle />
      </nav>
    </header>
  );
}

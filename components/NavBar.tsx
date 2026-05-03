import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';
import TextSizeToggle from './TextSizeToggle';

export default function NavBar() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <nav className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5 text-sm overflow-x-auto">
          <Link
            href="/"
            className="font-semibold text-brand whitespace-nowrap hover:text-brand/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('home')}
          </Link>
          <Link
            href="/phrases"
            className="text-gray-600 whitespace-nowrap hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('phrases')}
          </Link>
          <Link
            href="/rights"
            className="text-gray-600 whitespace-nowrap hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('rights')}
          </Link>
          <Link
            href="/about"
            className="text-gray-600 whitespace-nowrap hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
          >
            {t('about')}
          </Link>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <TextSizeToggle />
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}

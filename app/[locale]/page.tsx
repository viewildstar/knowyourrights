import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const SCENARIOS = ['police', 'ice', 'workplace', 'arrested'] as const;

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-brand mb-4">
          {t('headline')}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          {t('subhead')}
        </p>
      </section>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
        aria-label="Scenarios"
      >
        {SCENARIOS.map((key) => (
          <Link
            key={key}
            href={`/guide/${key}`}
            className="group bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-brand hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <span className="text-3xl" aria-hidden>
              {t(`scenarios.${key}.icon`)}
            </span>
            <span className="font-medium text-gray-800 group-hover:text-brand transition-colors leading-snug mt-1">
              {t(`scenarios.${key}.label`)}
            </span>
          </Link>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
        <p>{t('footer')}</p>
        <Link
          href="/about"
          className="text-brand hover:underline mt-1 inline-block focus:outline-none focus:ring-2 focus:ring-brand rounded"
        >
          About this site
        </Link>
      </footer>
    </div>
  );
}

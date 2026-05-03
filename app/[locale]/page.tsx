import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const SCENARIOS = ['police', 'ice', 'workplace', 'arrested'] as const;

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Privacy badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-semibold px-4 py-2 rounded-full border border-brand/20">
          <span aria-hidden>🔒</span>
          {t('privacy_badge')}
        </div>
      </div>

      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-brand mb-4 leading-tight">
          {t('headline')}
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
          {t('subhead')}
        </p>
      </section>

      {/* Scenario cards */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
        aria-label="Choose your situation"
      >
        {SCENARIOS.map((key) => (
          <Link
            key={key}
            href={`/guide/${key}`}
            className="group bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-brand hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand"
          >
            <span className="text-3xl leading-none mt-0.5" aria-hidden>
              {t(`scenarios.${key}.icon`)}
            </span>
            <div>
              <span className="font-semibold text-gray-800 group-hover:text-brand transition-colors leading-snug block">
                {t(`scenarios.${key}.label`)}
              </span>
              <span className="text-xs text-brand font-medium mt-1 block opacity-0 group-hover:opacity-100 transition-opacity">
                Step-by-step guide →
              </span>
            </div>
          </Link>
        ))}

        {/* Emergency phrases card */}
        <Link
          href="/phrases"
          className="group bg-brand border border-brand rounded-xl p-6 flex items-start gap-4 hover:bg-brand/90 transition-all focus:outline-none focus:ring-2 focus:ring-brand sm:col-span-2"
        >
          <span className="text-3xl leading-none mt-0.5" aria-hidden>
            {t('phrases_card.icon')}
          </span>
          <div>
            <span className="font-semibold text-white leading-snug block">
              {t('phrases_card.label')}
            </span>
            <span className="text-sm text-white/80 mt-0.5 block">
              {t('phrases_card.desc')}
            </span>
          </div>
        </Link>
      </section>

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-400 mb-10">{t('disclaimer')}</p>

      {/* Footer */}
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

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface PhraseItem {
  en: string;
  es: string;
  note: string | null;
}

const CATEGORIES = ['general', 'police', 'ice', 'workplace', 'arrested'] as const;

export default function PhrasesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('phrases');

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand mb-2">
        {t('title')}
      </h1>
      <p className="text-gray-600 mb-2">{t('subtitle')}</p>
      <p className="text-sm text-brand bg-brand-light border border-brand/20 rounded-lg px-4 py-2 mb-8 inline-block">
        {t('tip')}
      </p>

      <div className="space-y-10">
        {CATEGORIES.map((cat) => {
          const items = t.raw(`items.${cat}`) as PhraseItem[];
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2
                id={`cat-${cat}`}
                className="font-serif text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200"
              >
                {t(`categories.${cat}`)}
              </h2>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    {/* English */}
                    <div className="px-5 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">EN</span>
                      </div>
                      <p className="font-serif italic text-brand text-lg leading-snug">
                        &ldquo;{item.en}&rdquo;
                      </p>
                    </div>
                    {/* Spanish */}
                    <div className="px-5 py-4 bg-brand-light/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">ES</span>
                      </div>
                      <p className="font-serif italic text-brand text-lg leading-snug">
                        &ldquo;{item.es}&rdquo;
                      </p>
                    </div>
                    {/* Note */}
                    {item.note && (
                      <div className="px-5 py-2 bg-amber-50 border-t border-amber-100">
                        <p className="text-xs text-amber-700 font-medium">{item.note}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

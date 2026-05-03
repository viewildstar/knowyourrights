import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface RightsEntry {
  right: string;
  source: string;
  url: string;
  explanation: string;
}

export default function RightsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('rights');
  const entries = t.raw('entries') as RightsEntry[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand mb-4">
        {t('title')}
      </h1>
      <p className="text-gray-600 leading-relaxed mb-10">{t('intro')}</p>

      <ul className="space-y-6">
        {entries.map((entry, i) => (
          <li
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <h2 className="font-serif text-lg font-semibold text-brand mb-1">
              {entry.right}
            </h2>
            <p className="text-xs text-gray-500 mb-3">{entry.source}</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {entry.explanation}
            </p>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block text-sm text-brand font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              {t('view_source')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

interface Org {
  name: string;
  phone: string | null;
  url: string;
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('about');
  const orgs = t.raw('orgs') as Org[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand mb-10">
        {t('title')}
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
            {t('what_title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('what_body')}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
            {t('who_title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('who_body')}</p>
        </section>

        <section className="bg-accent-light border border-accent/20 rounded-xl p-6">
          <h2 className="font-serif text-xl font-semibold text-accent mb-2">
            {t('disclaimer_title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t('disclaimer_body')}</p>
        </section>

        <section className="bg-brand-light border border-brand/20 rounded-xl p-6">
          <h2 className="font-serif text-xl font-semibold text-brand mb-2">
            {t('privacy_title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t('privacy_body')}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-gray-800 mb-4">
            {t('orgs_title')}
          </h2>
          <ul className="space-y-3">
            {orgs.map((org, i) => (
              <li
                key={i}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-medium text-gray-800">{org.name}</span>
                  {org.phone && (
                    <span className="text-sm text-gray-500 ml-3">{org.phone}</span>
                  )}
                </div>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-brand font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand rounded shrink-0"
                >
                  {org.url.replace('https://', '')} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

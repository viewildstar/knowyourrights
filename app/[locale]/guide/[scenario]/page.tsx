import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import ReadAloud from '@/components/ReadAloud';

const VALID_SCENARIOS = ['police', 'ice', 'workplace', 'arrested'] as const;
type Scenario = (typeof VALID_SCENARIOS)[number];

interface Step {
  title: string;
  body: string;
  say: string | null;
  dont: string | null;
}

export function generateStaticParams() {
  return VALID_SCENARIOS.map((scenario) => ({ scenario }));
}

export default function GuidePage({
  params: { locale, scenario },
}: {
  params: { locale: string; scenario: string };
}) {
  if (!VALID_SCENARIOS.includes(scenario as Scenario)) notFound();

  setRequestLocale(locale);
  const t = useTranslations('guide');
  const home = useTranslations('home');

  const rights = t.raw(`scenarios.${scenario}.rights`) as string[];
  const steps = t.raw(`scenarios.${scenario}.steps`) as Step[];
  const safetyReminders = t.raw(`scenarios.${scenario}.safety_reminders`) as string[];
  const title = t(`scenarios.${scenario}.title`);
  const whatNext = t(`scenarios.${scenario}.what_next`);
  const legalHelp = t(`scenarios.${scenario}.legal_help`);
  const scenarioLabel = home(`scenarios.${scenario}.label`);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded">
          {t('breadcrumb_home')}
        </Link>
        <span className="mx-2" aria-hidden>›</span>
        <span className="text-gray-700">{scenarioLabel}</span>
      </nav>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand leading-tight">
          {title}
        </h1>
        <ReadAloud
          contentId="guide-content"
          lang={locale}
          label={t('read_aloud')}
          stopLabel={t('stop_reading')}
        />
      </div>

      <div id="guide-content">
        {/* Rights at a glance */}
        <section
          className="bg-brand-light border-l-4 border-brand rounded-r-xl p-6 mb-8"
          aria-labelledby="rights-heading"
        >
          <h2
            id="rights-heading"
            className="font-serif text-lg font-semibold text-brand mb-3"
          >
            {t('rights_title')}
          </h2>
          <ul className="space-y-2">
            {rights.map((right, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800">
                <span className="text-brand font-bold mt-0.5 shrink-0" aria-hidden>•</span>
                {right}
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-8">
          <ol className="space-y-7">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div
                  className="shrink-0 w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm"
                  aria-hidden
                >
                  {i + 1}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1 leading-snug">{step.title}</h3>
                  {step.body && (
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.body}</p>
                  )}
                  {step.say && (
                    <div className="bg-success-light border border-success/20 rounded-lg px-4 py-3 mb-2">
                      <span className="text-success text-xs font-bold uppercase tracking-wide block mb-1">
                        {t('say_this_label')}
                      </span>
                      <p className="font-serif italic text-success text-sm leading-relaxed">
                        &ldquo;{step.say}&rdquo;
                      </p>
                    </div>
                  )}
                  {step.dont && (
                    <div className="bg-accent-light border border-accent/20 rounded-lg px-4 py-3">
                      <span className="text-accent text-xs font-bold uppercase tracking-wide block mb-1">
                        {t('dont_label')}
                      </span>
                      <p className="text-accent text-sm">{step.dont}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What happens next */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-serif text-lg font-semibold text-gray-800 mb-2">
            {t('what_next_title')}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">{whatNext}</p>
        </section>

        {/* Safety reminders */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h2 className="font-serif text-lg font-semibold text-amber-800 mb-3">
            {t('safety_title')}
          </h2>
          <ul className="space-y-2">
            {safetyReminders.map((reminder, i) => (
              <li key={i} className="flex items-start gap-2 text-amber-900 text-sm">
                <span className="text-amber-600 font-bold mt-0.5 shrink-0" aria-hidden>⚠</span>
                {reminder}
              </li>
            ))}
          </ul>
        </section>

        {/* When to seek legal help */}
        <section className="bg-success-light border border-success/20 rounded-xl p-6 mb-8">
          <h2 className="font-serif text-lg font-semibold text-success mb-2">
            {t('legal_help_title')}
          </h2>
          <p className="text-success text-sm leading-relaxed">{legalHelp}</p>
        </section>
      </div>

      {/* CTA */}
      <div className="text-center border-t border-gray-200 pt-6">
        <Link
          href="/rights"
          className="inline-block text-brand font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brand rounded"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}

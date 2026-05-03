import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';

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
  const title = t(`scenarios.${scenario}.title`);
  const whatNext = t(`scenarios.${scenario}.what_next`);
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

      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-brand mb-8">
        {title}
      </h1>

      {/* Rights at a glance */}
      <section
        className="bg-brand-light border-l-4 border-brand rounded-r-xl p-6 mb-10"
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
              <span className="text-brand font-bold mt-0.5" aria-hidden>•</span>
              {right}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-10" aria-labelledby="steps-heading">
        <ol className="space-y-8" aria-labelledby="steps-heading">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div
                className="shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold text-sm"
                aria-hidden
              >
                {i + 1}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                {step.body && (
                  <p className="text-gray-600 text-sm mb-3">{step.body}</p>
                )}
                {step.say && (
                  <div className="bg-success-light border border-success/20 rounded-lg px-4 py-3 mb-2">
                    <span className="text-success text-xs font-semibold uppercase tracking-wide block mb-1">
                      {t('say_this_label')}
                    </span>
                    <p className="font-serif italic text-success text-sm">
                      &ldquo;{step.say}&rdquo;
                    </p>
                  </div>
                )}
                {step.dont && (
                  <div className="bg-accent-light border border-accent/20 rounded-lg px-4 py-3">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wide block mb-1">
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
      <section className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="font-serif text-lg font-semibold text-gray-800 mb-2">
          {t('what_next_title')}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">{whatNext}</p>
      </section>

      {/* CTA */}
      <div className="text-center">
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

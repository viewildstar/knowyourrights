import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default function PitchPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="bg-brand text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            Built for impact. Designed for safety.
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-5 leading-tight">
            Know Your Rights
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-4">
            Privacy-first legal guidance for high-risk encounters
          </p>
          <p className="text-base text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed">
            Clear, immediate rights guidance for immigrants and undocumented people — with zero data collection.
          </p>

          {/* Stat row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            {[
              ['🔒', 'Zero data collected'],
              ['🌐', 'Bilingual EN / ES'],
              ['📱', 'Works offline'],
              ['⚡', 'Loads in under 1 second'],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2">
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              When people face police stops, ICE encounters, or workplace raids, they are often in the worst possible position to make good decisions — stressed, afraid, and without clear information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '😰',
                title: 'Stress leads to preventable mistakes',
                body: 'People say the wrong things, sign documents they shouldn\'t, or waive rights they don\'t know they have — not from bad judgment, but from lack of information in a high-pressure moment.',
              },
              {
                icon: '🔍',
                title: 'Existing tools are unsafe',
                body: 'Many legal resource websites use Google Analytics, third-party fonts, or tracking cookies — exactly the wrong approach for users who need anonymity and cannot afford to leave a digital trail.',
              },
              {
                icon: '📡',
                title: 'Connectivity is unreliable',
                body: 'People in urgent situations often have limited data, slow connections, or shared low-end devices. Most legal sites were not built for this reality and fail exactly when they\'re needed most.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-stone-50 border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3" aria-hidden>{card.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl font-semibold text-brand mb-4">The Solution</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Know Your Rights is a static, bilingual website that puts clear, actionable rights information in front of the people who need it — with no accounts, no tracking, and no infrastructure that could be subpoenaed or breached.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['🚔', 'Police stop or questioning'],
              ['🚪', 'ICE agents at your door'],
              ['🏭', 'Workplace raid'],
              ['⚖️', 'Arrested or detained'],
            ].map(([icon, label]) => (
              <div key={label} className="bg-white border border-brand/20 rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{icon}</span>
                <span className="font-medium text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRIVACY & LOW-BANDWIDTH ─── */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-12">
            <div className="text-brand-light text-sm font-semibold uppercase tracking-widest mb-3">
              Core design principle
            </div>
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Privacy isn&rsquo;t a feature. It&rsquo;s the foundation.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Users may be in urgent, high-risk situations with limited connectivity. The architecture reflects that — not as an afterthought, but as a first principle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-xl" aria-hidden>🔒</span> Privacy guarantees
              </h3>
              <ul className="space-y-3">
                {[
                  'No analytics — not even Plausible',
                  'No external fonts, scripts, or CDN calls',
                  'Strict Content Security Policy on every page',
                  'robots.txt blocks all search engine indexing',
                  'Referrer-Policy: no-referrer on every request',
                  'sessionStorage only — nothing persists after tab closes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-0.5 shrink-0" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-xl" aria-hidden>📡</span> Low-bandwidth design
              </h3>
              <ul className="space-y-3">
                {[
                  'Static export — no server, no runtime',
                  'Offline access via service worker after first load',
                  'Minimal JavaScript bundle',
                  'Locally-bundled fonts (fontsource, no CDN)',
                  'No images, no heavy assets',
                  'Progressive Web App — installable on any device',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-blue-400 mt-0.5 shrink-0" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-10">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: '📋',
                title: 'Scenario-based navigation',
                body: 'Users choose their situation and get an immediate, focused guide — no searching required.',
              },
              {
                icon: '💬',
                title: '"Say this / Don\'t say this"',
                body: 'Every step includes exact phrases to use and common mistakes to avoid.',
              },
              {
                icon: '🗣️',
                title: 'Emergency phrases page',
                body: 'All key phrases in both English and Spanish, organized by encounter type.',
              },
              {
                icon: '✕',
                title: 'Quick Exit button',
                body: 'One tap leaves the site immediately and replaces the browser history entry.',
              },
              {
                icon: '📶',
                title: 'Offline-ready',
                body: 'Service worker caches all pages after first visit. Works without internet.',
              },
              {
                icon: '🌐',
                title: 'Full bilingual support',
                body: 'Complete English and Spanish throughout. Language choice stored per session.',
              },
              {
                icon: '🔊',
                title: 'Read aloud',
                body: 'Web Speech API reads page content aloud — hands-free use in emergencies.',
              },
              {
                icon: '🔡',
                title: 'Text size controls',
                body: 'Three size settings, persisted per session, for accessibility and readability.',
              },
              {
                icon: '🔒',
                title: 'Zero data collection',
                body: 'No analytics, no cookies, no accounts, no server. Nothing to breach or subpoena.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-stone-50 border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2" aria-hidden>{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEMO FLOW ─── */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-brand mb-4">How It Works</h2>
          <p className="text-gray-600 mb-12">Four steps from opening the site to acting with confidence.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                n: '1',
                title: 'Open in private mode',
                body: 'A banner reminds users to use incognito mode or Tor for maximum privacy.',
              },
              {
                n: '2',
                title: 'Choose your situation',
                body: 'Select from four scenarios — police, ICE, workplace, or detained.',
              },
              {
                n: '3',
                title: 'Follow the steps',
                body: 'Read exactly what to do, what to say, and what to avoid — in plain language.',
              },
              {
                n: '4',
                title: 'Exit quickly if needed',
                body: 'Tap the red Exit button to leave instantly. History entry is replaced.',
              },
            ].map((step) => (
              <div key={step.n} className="bg-white border border-brand/20 rounded-xl p-5">
                <div className="w-9 h-9 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center mb-3">
                  {step.n}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ETHICAL DESIGN ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-10">Ethical Design</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'User safety above all',
                body: 'Every design decision asks: does this put the user at risk? The Quick Exit, sessionStorage-only state, and no-CDN architecture all exist because users may be surveilled.',
              },
              {
                icon: '🚫',
                title: 'No surveillance of any kind',
                body: 'No analytics, no tracking pixels, no fingerprinting. The site cannot identify, profile, or record its users. There is no data to be breached, sold, or compelled.',
              },
              {
                icon: '⚖️',
                title: 'Empowers, not exploits',
                body: 'The site gives users information and agency. It doesn\'t collect data "for their benefit," require an account, or monetize vulnerability.',
              },
              {
                icon: '📋',
                title: 'Honest about limitations',
                body: 'Every page states clearly: this is general legal information, not legal advice. Users are directed to licensed attorneys for their specific situations.',
              },
            ].map((p) => (
              <div key={p.title} className="border border-gray-200 rounded-xl p-6">
                <div className="text-2xl mb-3" aria-hidden>{p.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL BUILD ─── */}
      <section className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">Technical Build</h2>
          <p className="text-gray-600 mb-8">
            A real, working static site — not a mockup. Deployable to GitHub Pages or any static host.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              'Next.js 14 (App Router)',
              'Static export (output: export)',
              'Tailwind CSS',
              'next-intl (EN + ES)',
              'Web Speech API',
              'Service Worker (offline)',
              'Web App Manifest (PWA)',
              'No backend',
              'No database',
              'No API keys',
              'No analytics',
              'No cookies',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Architecture note</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Static export means there is no server process to compromise. All HTML is pre-rendered at build time. There is no runtime that can log requests, expose a database, or leak user data. The architecture is the privacy guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* ─── IMPACT ─── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-4">Impact</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            An estimated 11 million undocumented immigrants live in the United States. Millions more are in mixed-status families, on temporary status, or facing uncertain immigration situations. All of them have legal rights — and most have never had a clear, safe way to understand what those rights are in a real-world emergency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: '11M+',
                label: 'undocumented immigrants in the US',
              },
              {
                stat: '40%',
                label: 'of immigration detainees have no legal representation',
              },
              {
                stat: '1 tap',
                label: 'to exit safely and erase browser history',
              },
            ].map((s) => (
              <div key={s.label} className="bg-brand-light border border-brand/20 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl font-semibold text-brand mb-2">{s.stat}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FUTURE WORK ─── */}
      <section className="py-20 px-4 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-semibold text-brand mb-10">What&rsquo;s Next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['🏛️', 'Additional jurisdictions', 'State-specific rights vary. Expand to cover California, Texas, New York, and other high-population states.'],
              ['🤝', 'Legal org validation', 'Partner with ACLU, NILC, and immigration attorneys to review and validate all content.'],
              ['📱', 'QR code distribution', 'Printable QR code cards for community organizations, churches, and schools.'],
              ['🌍', 'More languages', 'Portuguese, Haitian Creole, Mandarin, Vietnamese — serving more communities.'],
              ['📲', 'Enhanced offline support', 'Fully installable PWA with push notifications for rights updates and legal changes.'],
            ].map(([icon, title, body]) => (
              <div key={title} className="bg-white border border-brand/20 rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0" aria-hidden>{icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSE ─── */}
      <section className="py-24 px-4 bg-brand text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-10 text-white/95">
            &ldquo;Know Your Rights is built on one principle: safety information should be private, lightweight, and accessible when people need it most.&rdquo;
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-full hover:bg-brand-light transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            View the product →
          </Link>
        </div>
      </section>

    </div>
  );
}

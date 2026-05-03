# Know Your Rights

A free, bilingual (English/Spanish), privacy-first legal rights guide for immigrants.

**No tracking. No cookies. No data collected.**

## Setup

```bash
npm install
npm run dev
```

## Build (static)

```bash
npm run build
# Output is in /out — deploy to GitHub Pages or any static host
```

## Add a language

1. Copy `messages/en.json` → `messages/[locale].json`
2. Translate all strings
3. Add the locale to `i18n/routing.ts`

## Disclaimer

This site provides general information, not legal advice. Always consult a licensed immigration attorney.

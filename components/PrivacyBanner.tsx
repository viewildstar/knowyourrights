'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function PrivacyBanner() {
  const t = useTranslations('privacy');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('privacy-dismissed')) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem('privacy-dismissed', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="bg-brand text-white text-sm px-4 py-3 flex items-center justify-between gap-4"
    >
      <p className="flex-1">{t('banner')}</p>
      <button
        onClick={dismiss}
        aria-label={t('dismiss')}
        className="shrink-0 underline underline-offset-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-white rounded"
      >
        {t('dismiss')}
      </button>
    </div>
  );
}

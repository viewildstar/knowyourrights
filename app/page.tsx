'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const stored = sessionStorage.getItem('locale');
    const detected =
      stored || (navigator.language?.startsWith('es') ? 'es' : 'en');
    if (!stored) sessionStorage.setItem('locale', detected);
    router.replace(`/${detected}`);
  }, [router]);

  return null;
}

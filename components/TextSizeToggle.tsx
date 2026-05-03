'use client';

import { useEffect, useState } from 'react';

const SIZES = [16, 19, 22];
const LABELS = ['A', 'A+', 'A++'];

export default function TextSizeToggle() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('text-size');
    if (stored !== null) {
      const i = parseInt(stored, 10);
      setIdx(i);
      document.documentElement.style.fontSize = SIZES[i] + 'px';
    }
  }, []);

  function cycle() {
    const next = (idx + 1) % SIZES.length;
    setIdx(next);
    document.documentElement.style.fontSize = SIZES[next] + 'px';
    sessionStorage.setItem('text-size', String(next));
  }

  return (
    <button
      onClick={cycle}
      aria-label={`Text size: ${LABELS[idx]}. Click to increase.`}
      title="Adjust text size"
      className="text-xs font-bold text-gray-500 hover:text-brand border border-gray-200 hover:border-brand px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
    >
      {LABELS[idx]}
    </button>
  );
}

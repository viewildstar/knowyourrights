'use client';

import { useEffect, useState } from 'react';

interface Props {
  contentId: string;
  lang?: string;
  label?: string;
  stopLabel?: string;
}

export default function ReadAloud({
  contentId,
  lang = 'en',
  label = 'Read aloud',
  stopLabel = 'Stop',
}: Props) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function toggle() {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const el = document.getElementById(contentId);
    if (!el) return;
    const text = el.innerText || el.textContent || '';
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  if (!supported) return null;

  return (
    <button
      onClick={toggle}
      aria-label={speaking ? stopLabel : label}
      className="inline-flex items-center gap-2 text-sm text-brand border border-brand/30 hover:bg-brand-light px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
    >
      <span aria-hidden>{speaking ? '⏹' : '🔊'}</span>
      {speaking ? stopLabel : label}
    </button>
  );
}

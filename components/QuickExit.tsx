'use client';

export default function QuickExit() {
  function exit() {
    // Replace history so back-button doesn't return to this site
    window.location.replace('https://weather.com');
  }

  return (
    <button
      onClick={exit}
      className="fixed bottom-5 right-5 z-50 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm px-5 py-3 rounded-full shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
      aria-label="Quick exit — leave this page immediately"
    >
      ✕ Exit
    </button>
  );
}

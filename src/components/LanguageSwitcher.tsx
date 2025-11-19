'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Get the path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|de)/, '') || '';

  return (
    <div className="flex space-x-2">
      <a
        href={`/en${pathWithoutLocale}`}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
        }`}
        aria-label="Switch to English"
      >
        EN
      </a>
      <a
        href={`/de${pathWithoutLocale}`}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLocale === 'de'
            ? 'bg-blue-600 text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
        }`}
        aria-label="Switch to German"
      >
        DE
      </a>
    </div>
  );
}

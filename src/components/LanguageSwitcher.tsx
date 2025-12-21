'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const params = useParams();

  const handleLocaleChange = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      {pathname, params},
      {locale}
    );
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleLocaleChange('en')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLocale === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange('de')}
        className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
          currentLocale === 'de'
            ? 'bg-blue-600 text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
        }`}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
}

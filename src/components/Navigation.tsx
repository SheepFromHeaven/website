'use client';

import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50"
            >
              {t('brand')}
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-8">
            <Link 
              href="/" 
              className="hidden md:inline-block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              href="/coaching" 
              className="hidden md:inline-block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('coaching')}
            </Link>
            <Link 
              href="/imprint" 
              className="hidden md:inline-block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('imprint')}
            </Link>
            <Link 
              href="/privacy" 
              className="hidden md:inline-block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              {t('privacy')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

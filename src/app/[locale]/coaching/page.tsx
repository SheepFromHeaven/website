import {getTranslations, setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import CoachingCTAs, { CoachingContactCTAs } from '@/components/CoachingCTAs';

export default async function CoachingPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({locale, namespace: 'coaching'});

  const ctaTranslations = {
    ctaTitle: t('cta.title'),
    ctaDescription: t('cta.description'),
    bookButton: t('cta.bookButton'),
    question: t('cta.question'),
    emailButton: t('cta.emailButton'),
    linkedinButton: t('cta.linkedinButton'),
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 items-center mb-8">
          <Image
            src="/profile.webp"
            alt="Marc Emmanuel"
            width={120}
            height={120}
            className="rounded-full object-cover"
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              {t('title')}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {t('intro')}
            </p>
          </div>
        </div>

        {/* Prominent CTA - Book Free Intro Call */}
        <CoachingCTAs translations={ctaTranslations} />

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            {t('whatIOffer.title')}
          </h2>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('whatIOffer.items.mentoring')}</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('whatIOffer.items.career')}</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('whatIOffer.items.leadership')}</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('whatIOffer.items.conflict')}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            {t('sessionOptions.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {t('sessionOptions.single.title')}
              </h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('sessionOptions.single.price')}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {t('sessionOptions.single.description')}
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• {t('sessionOptions.single.features.video')}</li>
                <li>• {t('sessionOptions.single.features.recording')}</li>
                <li>• {t('sessionOptions.single.features.summary')}</li>
              </ul>
            </div>
            
            <div className="border-2 border-blue-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {t('sessionOptions.package.badge')}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {t('sessionOptions.package.title')}
              </h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                {t('sessionOptions.package.price')}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {t('sessionOptions.package.description')}
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• {t('sessionOptions.package.features.video')}</li>
                <li>• {t('sessionOptions.package.features.recordings')}</li>
                <li>• {t('sessionOptions.package.features.support')}</li>
                <li>• {t('sessionOptions.package.features.tracking')}</li>
              </ul>
            </div>
          </div>
        </div>

        <CoachingContactCTAs translations={ctaTranslations} />
      </div>
    </main>
  );
}

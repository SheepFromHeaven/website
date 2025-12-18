import {getTranslations, setRequestLocale} from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'privacy'});
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({locale, namespace: 'privacy'});

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          {t('subtitle')}
        </p>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              1. {t('section1.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              {t('section1.intro')}
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1 mb-4">
              <li>{t('section1.data.timestamp')}</li>
              <li>{t('section1.data.method')}</li>
              <li>{t('section1.data.url')}</li>
              <li>{t('section1.data.protocol')}</li>
              <li>{t('section1.data.responseCode')}</li>
              <li>{t('section1.data.bytes')}</li>
              <li>{t('section1.data.time')}</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section1.closing')}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              2. {t('section2.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section2.content')}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              3. {t('section3.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section3.content')}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              4. {t('section4.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section4.content')}
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              5. {t('section5.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section5.content')}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              6. {t('section6.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section6.content')}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              7. {t('section7.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section7.content')}
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              8. {t('section8.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section8.content')}
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              9. {t('section9.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section9.content')}
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              10. {t('section10.title')}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t('section10.content')}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

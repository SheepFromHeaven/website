import {getTranslations, setRequestLocale} from 'next-intl/server';

export default async function ImprintPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations({locale, namespace: 'imprint'});

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          {t('subtitle')}
        </p>

        <div className="space-y-8">
          {/* Responsible Person */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('responsiblePerson.title')}
            </h2>
            <div className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                {t('responsiblePerson.name')}
              </p>
              <p>
                {t('contact.email')}:{' '}
                <a 
                  href="mailto:the.marc.emmanuel+website@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('responsiblePerson.email')}
                </a>
              </p>
              <p>
                {t('contact.linkedin')}:{' '}
                <a 
                  href="https://www.linkedin.com/in/marc-emmanuel/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/marc-emmanuel
                </a>
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('disclaimer.title')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {t('disclaimer.liability.title')}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t('disclaimer.liability.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  {t('disclaimer.links.title')}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t('disclaimer.links.text')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

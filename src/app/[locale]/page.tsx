import { getMediumPosts } from '@/lib/medium';
import MediumPostCard from '@/components/MediumPostCard';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import Image from 'next/image';

export default async function Home({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const posts = await getMediumPosts();
  const t = await getTranslations({locale, namespace: 'home'});

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image
              src="/profile.webp"
              alt="Marc Emmanuel"
              width={200}
              height={200}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Coaching CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 mb-16 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            {t('coachingCTA.title')}
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            {t('coachingCTA.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('coachingCTA.features.experience')}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('coachingCTA.features.personalized')}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('coachingCTA.features.practical')}</span>
            </div>
          </div>
          <a
            href={`/${locale}/coaching`}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('coachingCTA.button')}
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
        {t('blogSection')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <MediumPostCard key={post.guid} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            {t('noPosts')}
          </p>
        </div>
      )}
    </main>
  );
}

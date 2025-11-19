import { getMediumPost, getMediumPosts } from '@/lib/medium';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{
    guid: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getMediumPosts();
  return posts.map((post) => ({
    guid: post.guid,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { guid } = await params;
  const post = await getMediumPost(guid);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        ← Back to all posts
      </Link>

      <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        {post.thumbnail && (
          <div className="relative w-full h-96">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-8 md:p-12">
          <header className="mb-8">
            <time className="text-sm text-zinc-500 dark:text-zinc-400">
              {formattedDate}
            </time>
            {post.author && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                By {post.author}
              </p>
            )}
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-4">
              {post.title}
            </h1>
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:my-4 prose-ul:my-4 prose-li:my-2 prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50"
            dangerouslySetInnerHTML={{ __html: post.content || post.description }}
          />

          <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View original article on Medium →
            </a>
          </footer>
        </div>
      </article>
    </main>
  );
}

import { getMediumPosts } from '@/lib/medium';
import MediumPostCard from '@/components/MediumPostCard';

export default async function Home() {
  const posts = await getMediumPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Exploring technology, development, and sharing insights from my journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <MediumPostCard key={post.guid} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            No posts available yet. Check back soon!
          </p>
        </div>
      )}
    </main>
  );
}

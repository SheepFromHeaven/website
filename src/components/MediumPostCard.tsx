import { MediumPost } from '@/types/medium';
import Image from 'next/image';

interface MediumPostCardProps {
  post: MediumPost;
}

export default function MediumPostCard({ post }: MediumPostCardProps) {
  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {post.thumbnail && (
        <div className="relative w-full h-48">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {formattedDate}
        </time>
        <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          <a 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {post.title}
          </a>
        </h3>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {post.description}
        </p>
        <a 
          href={post.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Read more →
        </a>
      </div>
    </article>
  );
}

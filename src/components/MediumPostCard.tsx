import { MediumPost } from '@/types/medium';
import Image from 'next/image';

interface MediumPostCardProps {
  post: MediumPost;
}

// Helper function to convert HTML to plain text and merge all paragraphs
function htmlToPlainText(html: string): string {
  // Strip all HTML tags and get plain text
  let text = html.replace(/<[^>]*>/g, ' ');
  // Replace multiple spaces with single space
  text = text.replace(/\s+/g, ' ');
  // Trim whitespace
  return text.trim();
}

export default function MediumPostCard({ post }: MediumPostCardProps) {
  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Convert HTML description to plain text for preview
  const plainTextDescription = htmlToPlainText(post.description);

  return (
    <a 
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer">
        {post.thumbnail && (
          <div className="relative w-full h-48 flex-shrink-0">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </time>
          <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 line-clamp-3 flex-grow">
            {plainTextDescription}
          </p>
          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}

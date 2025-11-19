'use client';

import { MediumPost } from '@/types/medium';
import Image from 'next/image';
import { useState } from 'react';

interface MediumPostCardProps {
  post: MediumPost;
}

// Helper function to convert HTML to plain text and merge all paragraphs
function htmlToPlainText(html: string): string {
  // First, replace common block elements with spaces to separate content
  let text = html
    .replace(/<\/p>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/div>/gi, ' ')
    .replace(/<\/h[1-6]>/gi, ' ');
  
  // Strip all remaining HTML tags
  text = text.replace(/<[^>]*>/g, '');
  
  // Replace HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  // Replace multiple spaces/newlines with single space
  text = text.replace(/\s+/g, ' ');
  
  // Trim whitespace
  return text.trim();
}

export default function MediumPostCard({ post }: MediumPostCardProps) {
  const [imageError, setImageError] = useState(false);
  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Convert HTML description to plain text for preview
  const plainTextDescription = htmlToPlainText(post.description);
  
  const hasValidThumbnail = post.thumbnail && post.thumbnail.trim() !== '' && !imageError;

  return (
    <a 
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer">
        <div className="relative w-full h-48 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600">
          {hasValidThumbnail ? (
            <Image
              src={post.thumbnail!}
              alt={post.title}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-white/80" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                />
              </svg>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {formattedDate}
          </time>
          <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <div className="mt-3 text-zinc-600 dark:text-zinc-400 flex-grow">
            <p className="line-clamp-3">
              {plainTextDescription}
            </p>
          </div>
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

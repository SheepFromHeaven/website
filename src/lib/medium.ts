import { MediumPost } from '@/types/medium';

// Function to fetch Medium posts at build time
// In a real implementation, this would fetch from Medium RSS feed
// Example: https://medium.com/feed/@yourusername
export async function getMediumPosts(): Promise<MediumPost[]> {
  // For static generation, we'll use sample data
  // Replace this with actual RSS feed parsing in production
  const posts: MediumPost[] = [
    {
      title: "Getting Started with Next.js Static Generation",
      link: "https://medium.com/@example/getting-started-nextjs",
      pubDate: new Date("2024-01-15").toISOString(),
      guid: "post-1",
      description: "Learn how to build blazing fast static websites with Next.js and modern web technologies. This comprehensive guide covers everything you need to know.",
      thumbnail: "https://via.placeholder.com/400x200/667eea/ffffff?text=Next.js+Guide"
    },
    {
      title: "The Power of Static Site Generation",
      link: "https://medium.com/@example/power-of-ssg",
      pubDate: new Date("2024-02-01").toISOString(),
      guid: "post-2",
      description: "Discover why static site generation is revolutionizing web development. Better performance, security, and SEO all in one approach.",
      thumbnail: "https://via.placeholder.com/400x200/f687b3/ffffff?text=SSG+Power"
    },
    {
      title: "Building Modern Web Applications",
      link: "https://medium.com/@example/modern-web-apps",
      pubDate: new Date("2024-03-10").toISOString(),
      guid: "post-3",
      description: "A deep dive into modern web application architecture, covering React, TypeScript, and best practices for 2024.",
      thumbnail: "https://via.placeholder.com/400x200/48bb78/ffffff?text=Modern+Web"
    }
  ];

  return posts;
}

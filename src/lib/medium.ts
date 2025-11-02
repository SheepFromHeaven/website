import { MediumPost } from '@/types/medium';

const MEDIUM_RSS_URL = 'https://medium.com/@sheepfromheaven/feed';
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`;

interface RSS2JsonItem {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  description: string;
  content?: string;
  thumbnail?: string;
  author?: string;
  categories?: string[];
  enclosure?: {
    link?: string;
  };
}

interface RSS2JsonResponse {
  status: string;
  items: RSS2JsonItem[];
}

// Helper function to extract first image from HTML content
function extractImageFromContent(html: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : undefined;
}

// Sample posts for fallback (when API is unavailable)
const SAMPLE_POSTS: MediumPost[] = [
  {
    title: "Getting Started with Next.js Static Generation",
    link: "https://medium.com/@sheepfromheaven/getting-started-nextjs",
    pubDate: new Date("2024-01-15").toISOString(),
    guid: "post-1",
    description: "<p>Learn how to build <strong>blazing fast</strong> static websites with Next.js and modern web technologies. This comprehensive guide covers everything you need to know about static site generation.</p>",
    content: "<p>Learn how to build <strong>blazing fast</strong> static websites with Next.js and modern web technologies. This comprehensive guide covers everything you need to know about static site generation.</p><h2>Introduction to Static Site Generation</h2><p>Static Site Generation (SSG) is a powerful approach to building websites that pre-renders pages at build time. This results in faster load times, better SEO, and improved security.</p><h2>Benefits of SSG</h2><ul><li>Lightning-fast page loads</li><li>Better SEO performance</li><li>Enhanced security</li><li>Lower hosting costs</li></ul><h2>Getting Started</h2><p>To get started with Next.js SSG, you'll need Node.js installed on your system. Then, create a new project and configure it for static export.</p>",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    author: "SheepFromHeaven",
    categories: ["Next.js", "Web Development"]
  },
  {
    title: "The Power of Static Site Generation",
    link: "https://medium.com/@sheepfromheaven/power-of-ssg",
    pubDate: new Date("2024-02-01").toISOString(),
    guid: "post-2",
    description: "<p>Discover why static site generation is <em>revolutionizing</em> web development. Better <strong>performance</strong>, <strong>security</strong>, and <strong>SEO</strong> all in one approach.</p>",
    content: "<p>Discover why static site generation is <em>revolutionizing</em> web development. Better <strong>performance</strong>, <strong>security</strong>, and <strong>SEO</strong> all in one approach.</p><h2>Why Static Sites Matter</h2><p>In today's web landscape, performance is crucial. Users expect pages to load instantly, and search engines reward fast websites with better rankings.</p><h2>Performance Benefits</h2><p>Static sites are served as pre-built HTML files, eliminating the need for server-side processing on each request. This dramatically reduces page load times.</p><h2>Security Advantages</h2><p>With no database or server-side code execution, the attack surface is significantly reduced. This makes static sites inherently more secure.</p>",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    author: "SheepFromHeaven",
    categories: ["SSG", "Performance"]
  },
  {
    title: "Building Modern Web Applications",
    link: "https://medium.com/@sheepfromheaven/modern-web-apps",
    pubDate: new Date("2024-03-10").toISOString(),
    guid: "post-3",
    description: "<p>A deep dive into <strong>modern web application architecture</strong>, covering React, TypeScript, and best practices for 2024. Learn the patterns that scale.</p>",
    content: "<p>A deep dive into <strong>modern web application architecture</strong>, covering React, TypeScript, and best practices for 2024. Learn the patterns that scale.</p><h2>Modern Architecture Patterns</h2><p>Building scalable web applications requires careful consideration of architecture. Component-based design, type safety, and proper state management are essential.</p><h2>TypeScript Benefits</h2><p>TypeScript adds static typing to JavaScript, catching errors at compile time and improving developer experience with better tooling and autocomplete.</p><h2>React Best Practices</h2><p>React has evolved significantly. Modern best practices include using hooks, server components, and proper error boundaries for robust applications.</p>",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    author: "SheepFromHeaven",
    categories: ["React", "TypeScript", "Architecture"]
  }
];

// Helper function to generate URL-friendly slug from guid
export function generateSlug(guid: string): string {
  return guid.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
}

// Function to fetch Medium posts at build time using rss2json API
export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(RSS2JSON_API);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Medium posts: ${response.statusText}`);
    }
    
    const data: RSS2JsonResponse = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS2Json API returned an error status');
    }
    
    // Map RSS2Json items to MediumPost format
    const posts: MediumPost[] = data.items.map((item) => {
      // Try multiple sources for the thumbnail image
      const thumbnail = 
        item.thumbnail || 
        item.enclosure?.link || 
        extractImageFromContent(item.description) ||
        extractImageFromContent(item.content || '');

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        guid: item.guid,
        description: item.description,
        content: item.content,
        thumbnail,
        author: item.author,
        categories: item.categories,
      };
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return sample posts on error for development/demo purposes
    return SAMPLE_POSTS;
  }
}

// Function to get a single post by its guid
export async function getMediumPost(guid: string): Promise<MediumPost | undefined> {
  const posts = await getMediumPosts();
  return posts.find(post => post.guid === guid);
}

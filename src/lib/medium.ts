import { MediumPost } from '@/types/medium';

const MEDIUM_RSS_URL = 'https://medium.com/@sheepfromheaven/feed';
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`;

interface RSS2JsonItem {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  description: string;
  thumbnail?: string;
}

interface RSS2JsonResponse {
  status: string;
  items: RSS2JsonItem[];
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
    const posts: MediumPost[] = data.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      guid: item.guid,
      description: item.description,
      thumbnail: item.thumbnail,
    }));
    
    return posts;
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // Return empty array on error to prevent build failure
    return [];
  }
}

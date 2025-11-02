# Personal Website

A static generated website built with Next.js, featuring a blog homepage and coaching services page.

## Features

- 🚀 **Static Site Generation**: Pre-rendered HTML for blazing fast performance
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🌙 **Dark Mode Support**: Automatic dark mode support
- 📝 **Blog Posts**: Display Medium posts on the homepage
- 💼 **Coaching Page**: Professional coaching services showcase

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

```bash
# Build the static site
npm run build
```

The static files will be generated in the `out/` directory, ready to be deployed to any static hosting service.

### Deployment

The generated static files in the `out/` directory can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## Customization

### Medium Posts Integration

The site automatically fetches posts from Medium using the rss2json API. The feed URL is configured in `src/lib/medium.ts`:

```typescript
const MEDIUM_RSS_URL = 'https://medium.com/@sheepfromheaven/feed';
```

To use your own Medium account, update the username in this URL.

### Update Coaching Information

Edit `src/app/coaching/page.tsx` to update:
- Pricing information
- Session details
- Contact email (replace `contact@example.com`)
- Calendly URL (replace `https://calendly.com/yourusername`)

### Update Site Metadata

Edit `src/app/layout.tsx` to update:
- Site title
- Site description
- Other metadata

## Project Structure

```
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── coaching/      # Coaching page
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── MediumPostCard.tsx
│   │   └── Navigation.tsx
│   ├── lib/              # Utility functions
│   │   └── medium.ts     # Medium posts data
│   └── types/            # TypeScript types
│       └── medium.ts
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies
```

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [React 19](https://react.dev/) - UI library

## License

This is a personal website template. Feel free to use it as a starting point for your own website.

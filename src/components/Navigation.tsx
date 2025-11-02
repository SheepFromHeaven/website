import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-zinc-900 dark:text-zinc-50"
            >
              Personal Website
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/coaching" 
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 px-3 py-2 text-sm font-medium transition-colors"
            >
              Coaching
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function CoachingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Coaching Services
        </h1>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          I offer personalized coaching sessions to help you level up your skills, 
          overcome challenges, and achieve your professional goals.
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            What I Offer
          </h2>
          <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>One-on-one mentoring sessions tailored to your needs</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Career guidance and technical skill development</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Code reviews and architecture discussions</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Project planning and best practices consultation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Session Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Single Session
              </h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                $150
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                60-minute focused coaching session
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• Video call via Zoom/Google Meet</li>
                <li>• Session recording available</li>
                <li>• Follow-up email summary</li>
              </ul>
            </div>
            
            <div className="border-2 border-blue-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Package (4 Sessions)
              </h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                $500
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Four 60-minute sessions (save $100)
              </p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>• Video call via Zoom/Google Meet</li>
                <li>• Session recordings available</li>
                <li>• Email support between sessions</li>
                <li>• Progress tracking and goals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="mb-6">
            Book your first session today and take the next step in your professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@example.com?subject=Coaching Session Booking"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors text-center"
            >
              Contact via Email
            </a>
            <a
              href="https://calendly.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
            >
              Schedule on Calendly
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
          <p>
            Have questions? Feel free to reach out at{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@example.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

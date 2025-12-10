'use client';

import TrackedLink from '@/components/TrackedLink';

type CoachingCTAsProps = {
  translations: {
    ctaTitle: string;
    ctaDescription: string;
    bookButton: string;
    question: string;
    emailButton: string;
    linkedinButton: string;
  };
};

export default function CoachingCTAs({ translations }: CoachingCTAsProps) {
  return (
    <>
      {/* Prominent CTA - Book Free Intro Call */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 mb-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          {translations.ctaTitle}
        </h2>
        <p className="text-xl mb-6 text-blue-50">
          {translations.ctaDescription}
        </p>
        <TrackedLink
          href="https://calendar.app.google/yJkQ1RtSoHdGHZQK8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
          trackingName="Book Free Intro Call"
          trackingLocation="coaching_page_hero"
          trackingType="booking"
        >
          {translations.bookButton}
        </TrackedLink>
      </div>
    </>
  );
}

export function CoachingContactCTAs({ translations }: CoachingCTAsProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
        {translations.question}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <TrackedLink
          href="mailto:the.marc.emmanuel+website@gmail.com?subject=Coaching Session Booking"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
          trackingName="Email Contact"
          trackingLocation="coaching_page_footer"
          trackingType="cta"
        >
          {translations.emailButton}
        </TrackedLink>
        <TrackedLink
          href="https://www.linkedin.com/in/marc-emmanuel/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-center"
          trackingName="LinkedIn"
          trackingLocation="coaching_page_footer"
          trackingType="external"
        >
          {translations.linkedinButton}
        </TrackedLink>
      </div>
    </div>
  );
}

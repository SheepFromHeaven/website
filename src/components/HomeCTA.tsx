'use client';

import TrackedLink from '@/components/TrackedLink';

type HomeCTAProps = {
  locale: string;
  buttonText: string;
};

export default function HomeCTA({ locale, buttonText }: HomeCTAProps) {
  return (
    <TrackedLink
      href={`/${locale}/coaching`}
      className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      trackingName="Explore Coaching"
      trackingLocation="home_page_cta"
      trackingType="cta"
    >
      {buttonText}
    </TrackedLink>
  );
}

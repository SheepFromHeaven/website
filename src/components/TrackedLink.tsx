'use client';

import { trackCTAClick, trackBookingClick, trackExternalLink } from '@/lib/analytics';
import { ReactNode } from 'react';
import Link from 'next/link';

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  trackingName: string;
  trackingLocation: string;
  trackingType: 'cta' | 'booking' | 'external';
  target?: string;
  rel?: string;
};

export default function TrackedLink({
  href,
  children,
  className,
  trackingName,
  trackingLocation,
  trackingType,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    switch (trackingType) {
      case 'cta':
        trackCTAClick(trackingName, trackingLocation);
        break;
      case 'booking':
        trackBookingClick(trackingLocation);
        break;
      case 'external':
        trackExternalLink(trackingName, href);
        break;
    }
  };

  // Check if it's an external link
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');

  // Use regular anchor tag for external links
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Use Next.js Link for internal navigation
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

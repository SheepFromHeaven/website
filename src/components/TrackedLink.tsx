'use client';

import { trackCTAClick, trackBookingClick, trackExternalLink } from '@/lib/analytics';
import { ReactNode } from 'react';

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

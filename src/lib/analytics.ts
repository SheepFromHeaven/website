// Google Analytics event tracking utility

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GAEventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Track custom events
export const trackEvent = ({ action, category, label, value }: GAEventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Pre-defined events for CTAs
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  });
};

export const trackBookingClick = (location: string) => {
  trackEvent({
    action: 'booking_click',
    category: 'conversion',
    label: location,
  });
};

export const trackExternalLink = (linkName: string, url: string) => {
  trackEvent({
    action: 'external_link_click',
    category: 'outbound',
    label: `${linkName}: ${url}`,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

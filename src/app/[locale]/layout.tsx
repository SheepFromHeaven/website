import Navigation from "@/components/Navigation";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages({locale});
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang={locale}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="5670f556-a155-4063-960e-e47badaf5a46"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased bg-zinc-50 dark:bg-black font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

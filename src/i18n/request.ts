import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ locale }: { locale: Locale }) => {
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/frontapi.json`)).default,
      ...(await import(`../messages/${locale}/auth.json`)).default,
    },
  };
});

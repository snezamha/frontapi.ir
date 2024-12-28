import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  const messagesDir = path.join(process.cwd(), 'src', 'messages', locale);
  let messages: Record<string, Record<string, string>> = {};

  try {
    const files = fs.readdirSync(messagesDir);

    const imports = await Promise.all(
      files
        .filter((file) => file.endsWith('.json'))
        .map(async (file) => {
          const myModule = (await import(`../messages/${locale}/${file}`)) as {
            default: Record<string, string>;
          };

          const key = file.replace('.json', '');
          return [key, myModule.default];
        })
    );

    messages = Object.fromEntries(imports);
  } catch (error) {
    console.error('Error loading messages:', error);
    notFound();
  }

  return {
    locale,
    messages,
  };
});

import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '@/config/locales';

export const routing = defineRouting({
  locales,
  defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

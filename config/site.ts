import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'FrontAPI',
  author: 'Nezameddin Hassani',
  description: '',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui'],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL,
    author: '',
  },
  links: {
    github: 'https://github.com/snezamha/frontapi.ir',
  },
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};

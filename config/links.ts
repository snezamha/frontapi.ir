import { Navigation } from '@/types';

export const navLinks: Navigation = {
  data: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
  ],
};

export const dashboardLinks: Navigation = {
  data: [
    {
      title: 'Home',
      href: '/',
      icon: 'home',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Panel settings',
      href: '/dashboard/settings',
      icon: 'settings',
    },
  ],
};

export const projectLinks = (projectId: string) => ({
  data: [
    {
      title: 'Categories',
      href: `/dashboard/${projectId}/categories`,
      icon: 'categories',
    },
    {
      title: 'Products',
      href: `/dashboard/${projectId}/products`,
      icon: 'products',
    },
    {
      title: 'Auctions',
      href: `/dashboard/${projectId}/auctions`,
      icon: 'auctions',
    },
    {
      title: 'Project settings',
      href: `/dashboard/${projectId}/settings`,
      icon: 'psetting',
    },
  ],
});

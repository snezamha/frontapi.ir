'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface DashboardNavProps {
  items: NavItem[];
}

export function ProjectNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <ul className='flex flex-col items-left space-y-4 mb-5 md:flex-row md:space-x-6 md:space-y-0'>
      {items.map((item, index) => {
        const Icon = Icons[item.icon || 'next'];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? '/' : item.href}>
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                  path === item.href ? 'bg-accent' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                <Icon className='mr-2 h-4 w-4' />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </ul>
  );
}

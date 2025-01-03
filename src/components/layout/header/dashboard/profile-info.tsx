'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/shared/icon';
import { Link } from '@/i18n/routing';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

import { UserAvatar } from './user-avatar';
import { useTranslations } from 'next-intl';
interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'picture' | 'email'>;
}
const ProfileInfo = ({ user }: NavbarProps) => {
  const t = useTranslations('profileInfo');
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='cursor-pointer'>
          <div className='flex items-center gap-3 text-default-800 '>
            <UserAvatar
              user={{
                name: user.name || null,
                picture: user.picture || null,
              }}
            />
            <span className='text-base  me-2.5'>
              <Icon icon='heroicons-outline:chevron-down'></Icon>
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 p-0' align='end'>
          <DropdownMenuLabel className='flex gap-2 items-center mb-1 p-3'>
            <UserAvatar
              user={{
                name: user.name || null,
                picture: user.picture || null,
              }}
            />

            <div>
              <div className='text-sm font-medium text-default-800 capitalize'>
                {user.name || null}
              </div>
              <span className='text-xs text-default-600 hover:text-primary'>
                {user.email || null}
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {[
              {
                name: t('profile'),
                icon: 'heroicons:user',
                href: '/user-profile',
              },
              {
                name: t('settings'),
                icon: 'heroicons:cog-6-tooth',
                href: '/settings',
              },
            ].map((item, index) => (
              <Link
                href={item.href}
                key={`info-menu-${index}`}
                className='cursor-pointer'
              >
                <DropdownMenuItem className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 cursor-pointer'>
                  <Icon icon={item.icon} className='w-4 h-4' />
                  {item.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href='https://github.com/snezamha/frontapi.ir'>
              <DropdownMenuItem className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 cursor-pointer'>
                <Icon icon='octicon:mark-github-24' className='w-4 h-4' />
                {t('github')}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className='mb-0 dark:bg-background' />
          <DropdownMenuItem
            className='flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 cursor-pointer'
            onSelect={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}`,
              });
            }}
          >
            <Icon icon='heroicons:power' className='w-4 h-4' />
            <span>{t('logout')}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default ProfileInfo;

import React from 'react';
import LocalSwitcher from '@/components/shared/locale-switcher';
import ThemeButton from '@/components/shared/theme-switcher';
import HeaderContent from './header-content';
import ProfileInfo from './profile-info';
import { currentUser } from '@/lib/auth';
import HeaderLogo from './header-logo';
import HorizontalMenu from './horizontal-menu';

const DashboardHeader = async () => {
  const user = await currentUser();

  return (
    <>
      <HeaderContent>
        <div className='flex gap-3 items-center'>
          <HeaderLogo />
        </div>
        <div className='flex items-center gap-5'>
          <LocalSwitcher />
          <ThemeButton />
          <ProfileInfo
            user={{
              name: user?.name,
              picture: user?.picture as string,
              email: user?.email,
            }}
          />
        </div>
      </HeaderContent>
      <HorizontalMenu />
    </>
  );
};

export default DashboardHeader;

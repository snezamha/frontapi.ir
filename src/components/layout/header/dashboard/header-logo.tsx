'use client';
import React from 'react';
import { Link } from '@/components/shared/navigation';
import IconLogo from '@/components/shared/icon-logo';
import { useTranslations } from 'next-intl';

const HeaderLogo = () => {
  const t = useTranslations('rootLayout');

  return (
    <Link href='/' className='flex gap-2 items-center'>
      <IconLogo className='text-default-900 h-8 w-8 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background' />
      <h1 className='text-xl font-semibold text-default-900 lg:block hidden'>
        {t('title')}
      </h1>
    </Link>
  );
};

export default HeaderLogo;

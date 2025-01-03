import { Icon } from '@/components/shared/icon';
import { useTranslations } from 'next-intl';
import React from 'react';

const DashboardFooter = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex-none bg-card relative py-4 px-6 bottom-0 z-50 shadow-base'>
      <div className='flex flex-col md:flex-row justify-between items-center text-default-600'>
        <div className='text-center md:text-start text-sm mb-2 md:mb-0'>
          {t('footer', { year: currentYear })}
        </div>
        <div className='text-center md:text-end text-sm'>
          <a
            href='https://github.com/snezamha/frontapi.ir'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center md:justify-end items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors'
          >
            <Icon icon='octicon:mark-github-24' className='h-5 w-5 mx-2' />
            {t('github')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;

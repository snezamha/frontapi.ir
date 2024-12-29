import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/shared/icon';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-auto bg-gray-100 dark:bg-gray-800'>
      <div className='mx-auto w-full max-w-screen-xl p-6 md:py-8'>
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <Link href='/'>
            <h1 className='mb-4 text-2xl font-bold sm:mb-0 text-center sm:text-left'>
              FrontAPI
            </h1>
          </Link>
          <ul className='flex flex-row items-center gap-4 opacity-60'></ul>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700' />
        <div className='container flex flex-col md:flex-row items-center justify-between'>
          <div className='text-sm text-gray-500 dark:text-gray-400 text-center md:text-left mb-2 md:mb-0'>
            {t('footer', { year: currentYear })}
          </div>
          <a
            href='https://github.com/snezamha/frontapi.ir'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors'
          >
            <Icon icon='octicon:mark-github-24' className='h-5 w-5 mx-2' />
            {t('github')}
          </a>
        </div>
      </div>
    </footer>
  );
}

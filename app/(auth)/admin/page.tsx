import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { AdminAuthForm } from '@/components/admin/admin-auth-form';

import { Icons } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Admin login',
  description: '',
};

export default function Signup() {
  return (
    <main className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.back className='mr-2 h-4 w-4' />
          Back
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Admin login
          </h1>
          <p className='text-sm text-muted-foreground'>
            YOU HAVE ADMIN ACCESS
          </p>
        </div>
        <AdminAuthForm />
      </div>
    </main>
  );
}

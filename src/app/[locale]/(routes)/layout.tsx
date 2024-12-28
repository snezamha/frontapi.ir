import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { auth } from '@/server/auth';
import LocalSwitcher from '@/components/shared/locale-switcher';
import ThemeButton from '@/components/shared/theme-switcher';
import Footer from '@/components/layout/footer/footer';
import LogoutButton from '@/components/shared/logout-button';
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL! || 'http://localhost:3000'
  ),
  title: '',
  description: '',
};
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return redirect('/auth');
  }

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <div className='flex justify-end items-center gap-5 w-full p-5'>
        <LogoutButton />
        <LocalSwitcher />
        <ThemeButton />
      </div>
      <div className='flex justify-center items-center grow h-full overflow-hidden'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

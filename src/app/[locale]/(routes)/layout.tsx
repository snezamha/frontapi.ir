import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { auth } from '@/server/auth';
import DashboardFooter from '@/components/layout/footer/dashboard';
import DashboardHeader from '@/components/layout/header/dashboard';
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
    <div className='flex min-h-svh w-full flex-col bg-default-100 dark:bg-background'>
      <DashboardHeader />
      <main className='flex-1 bg-default-100 dark:bg-background'>
        <div className='mb-24 md:mb-0 p-6'>{children}</div>
      </main>
      <DashboardFooter />
    </div>
  );
}

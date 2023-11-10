import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';

import { Shell } from '@/components/layout/shell';
import { DashboardHeader } from '@/components/pages/dashboard/dashboard-header';


export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Monitor your progress.',
};

interface DashboardProps {
  searchParams: { from: string; to: string };
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/signin');
  }


  return (
    <Shell>
      <DashboardHeader heading='Dashboard' text='Monitor your progress.'>
      
      </DashboardHeader>
      
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
   
      </div>
     
    </Shell>
  );
}

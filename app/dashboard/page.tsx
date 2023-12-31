import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';

import { Shell } from '@/components/layout/shell';
import { DashboardHeader } from '@/components/pages/dashboard/dashboard-header';
import ProjectSwitcher from '@/components/project-switcher';
import prismadb from '@/lib/prismadb';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
};

export default async function Dashboard() {
  const user = await getCurrentUser();
  const userId = user.id;

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/signin');
  }
  if (user.isAdmin) {
    var projects = await prismadb.project.findMany();
  } else {
    var projects = await prismadb.project.findMany({
      where: {
        userId,
      },
    });
  }

  return (
    <Shell>
      <DashboardHeader heading='Dashboard' text='Select or create your project'>
        <ProjectSwitcher items={projects} />
      </DashboardHeader>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'></div>
    </Shell>
  );
}

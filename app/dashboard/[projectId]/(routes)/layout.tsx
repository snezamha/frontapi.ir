import { projectLinks } from '@/config/links';

import { ProjectNav } from '@/components/pages/dashboard/project-nav';
import { Shell } from '@/components/layout/shell';
import { DashboardHeader } from '@/components/pages/dashboard/dashboard-header';
import ProjectSwitcher from '@/components/project-switcher';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';

import prismadb from '@/lib/prismadb';
interface DashboardLayoutProps {
  children: React.ReactNode;
  params: { projectId: string };
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const projectId = params.projectId;
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/signin');
  }
  if (user?.isAdmin) {
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
      <div className='flex flex-col items-center'>
        <ProjectNav items={projectLinks(projectId).data} />
      </div>
      <DashboardHeader heading='' text='You can switch between projects'>
        <ProjectSwitcher items={projects} />
      </DashboardHeader>

      <main className='flex w-full flex-1 flex-col'>{children}</main>
    </Shell>
  );
}

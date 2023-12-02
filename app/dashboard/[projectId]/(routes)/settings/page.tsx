import prismadb from '@/lib/prismadb';

import { SettingsForm } from './components/settings-form';
import { getCurrentUser } from '@/lib/session';

const SettingsPage = async ({ params }: { params: { projectId: string } }) => {
  const user = await getCurrentUser();
  const userId = user?.id;
  if (user?.isAdmin) {
    var project = await prismadb.project.findFirst({
      where: {
        id: params.projectId,
      },
    });
  } else {
    var project = await prismadb.project.findFirst({
      where: {
        id: params.projectId,
        userId,
      },
    });
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SettingsForm initialData={project} />
      </div>
    </div>
  );
};

export default SettingsPage;

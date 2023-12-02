import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import prismadb from '@/lib/prismadb';
interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  isAdmin?: boolean | null | undefined;
}

interface Session {
  user: User | null | undefined;
}
export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const session = (await getServerSession(authOptions)) as Session;
    const userId = session?.user?.id;
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!params.projectId) {
      return new NextResponse('Project id is required', { status: 400 });
    }
    if (session?.user?.isAdmin) {
      var project = await prismadb.project.updateMany({
        where: {
          id: params.projectId,
        },
        data: {
          name,
        },
      });
    } else {
      var project = await prismadb.project.updateMany({
        where: {
          id: params.projectId,
          userId,
        },
        data: {
          name,
        },
      });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log('[PROJECT_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const session = (await getServerSession(authOptions)) as Session;
    const userId = session?.user?.id;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 });
    }

    if (!params.projectId) {
      return new NextResponse('Project id is required', { status: 400 });
    }

    if (session?.user?.isAdmin) {
      var project = await prismadb.project.deleteMany({
        where: {
          id: params.projectId,
        },
      });
    } else {
      var project = await prismadb.project.deleteMany({
        where: {
          id: params.projectId,
          userId,
        },
      });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log('[PROJECT_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

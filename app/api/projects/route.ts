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
export async function POST(req: Request) {
  try {
    const session = (await getServerSession(authOptions)) as Session;
    const body = await req.json();

    const { name } = body;

    if (!session || !session.user) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }
    const userId = session.user.id;
    const project = await prismadb.project.create({
      data: {
        name,
        userId,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log('[PROJECTS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

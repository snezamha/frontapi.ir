import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authValidator } from '@/lib/validations/auth';
import bcrypt from 'bcrypt';

import prismadb from '@/lib/prismadb';

export const authOptions: NextAuthOptions = {
  // @see https://github.com/prisma/prisma/issues/16117
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = authValidator.parse(credentials);

        const user = await prismadb.user.findUnique({
          where: {
            email,
          },
        });
        if (user) {
          const isCorrectPassword = await bcrypt.compare(
            password,
            user.hashedPassword!
          );
          if (!isCorrectPassword) {
            throw new Error('Invalid password');
          }
          return user;
        } else {
          return null;
          // const hashedPassword = await bcrypt.hash(password, 12);
          // const newUser = await prismadb.user.create({
          //   data: {
          //     email,
          //     hashedPassword,
          //   },
          // });
          // return newUser;
        }
      },
    }),
  ],
  callbacks: {
    //TODO: fix this any
    async session({ token, session }: any) {
      const user = await prismadb.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!user) {
        try {
          const newUser = await prismadb.user.create({
            data: {
              email: token.email,
              name: token.name,
              is_admin: false,
            },
          });

          //Put new created user data in session
          session.user.id = newUser.id;
          session.user.name = newUser.name;
          session.user.email = newUser.email;
          session.user.isAdmin = false;
          return session;
        } catch (error) {
          return console.log(error);
        }
      } else {
        //User allready exist in localDB, put user data in session
        session.user.id = user.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.isAdmin = user.is_admin;
      }
      //console.log(session, "session");
      return session;
    },
  },
};

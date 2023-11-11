import React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { RxActivityLog } from 'react-icons/rx';
import { BsRocketTakeoff, BsLayoutTextWindowReverse } from 'react-icons/bs';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { buttonVariants } from '@/components/ui/button';
import HeadingText from '@/components/heading-text';
import { FaGithub } from 'react-icons/fa';
function Cards() {
  return (
    <>
      <Card className='flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary'>
        <RxActivityLog className='text-4xl' />
        <CardTitle>Project</CardTitle>
        <CardDescription>
          Define your project and easily switch between your projects.
        </CardDescription>
      </Card>

      <Card className='flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary'>
        <BsLayoutTextWindowReverse className='text-4xl' />
        <CardTitle>Shop</CardTitle>
        <CardDescription>
          Everything a high-end store needs is here. Manage your products here.
        </CardDescription>
      </Card>
      <Card className='flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary'>
        <TbDeviceAnalytics className='text-4xl' />
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          Find the order review and analysis needed in your project here.
        </CardDescription>
      </Card>
      <Card className='flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary'>
        <BsRocketTakeoff className='text-4xl' />
        <CardTitle>َUpdate</CardTitle>
        <CardDescription>
        And things that will be added and updated soon with your help.
        </CardDescription>
      </Card>
    </>
  );
}
export default function Home() {
  return (
    <>
      <section className='space-y-8 pb-12 pt-4 md:space-y-16 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <Link
            href={siteConfig.links.github}
            className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Free and open source!
          </Link>
          <h1 className='text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl'>
            Build your Frontend Api
          </h1>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Manage the data that you need on the front end !
          </p>
          <div className='space-x-4'>
            <Link href='/signin' className={cn(buttonVariants({ size: 'lg' }))}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-secondary' id='features'>
        <div className='container space-y-8 py-12 text-center lg:py-20'>
          <HeadingText subtext='What does Frontapi.ir offer?'>
            Features
          </HeadingText>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
            <Cards />
          </div>
        </div>
      </section>
      <section className='container py-12 lg:py-20'>
        <div className='flex flex-col items-center gap-8'>
          <HeadingText
            subtext='Feel free to view the codebase or contribute!'
            className='text-center'
          >
            Fully Open Source
          </HeadingText>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            className={`w-[10rem] gap-2 ${cn(
              buttonVariants({ variant: 'outline', size: 'sm' })
            )}`}
          >
            <FaGithub />
            Github
          </Link>
        </div>
      </section>
    </>
  );
}

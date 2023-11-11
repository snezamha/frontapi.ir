'use client';

import * as React from 'react';
import { signIn } from 'next-auth/react';

import { cn } from '@/lib/utils';
import { PasswordInput } from '@/components/PasswordInput';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import type * as z from 'zod';
import { authValidator } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { PiSpinnerGapBold } from 'react-icons/pi';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation'

interface AdminAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type Inputs = z.infer<typeof authValidator>;

export function AdminAuthForm({ className, ...props }: AdminAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const form = useForm<Inputs>({
    resolver: zodResolver(authValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter()
  async function onSubmit(values: Inputs) {
    setIsLoading(true);
    const response = await signIn('credentials', {
      ...values,
      redirect: false,
    });
    setIsLoading(false);
    if (response?.ok) {
      toast({
        description: 'Success Login',
      });
    }
    if (response?.error) {
      return toast({
        title: 'Something went wrong.',
        description: response.error,
        variant: 'destructive',
      });
    }
    router.push("/dashboard")
  }
  return (
    <div className={cn('grid gap-2', className)} {...props}>
      <Form {...form}>
        <form
          className='grid gap-4'
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className='placeholder:text-slate-400'
                    placeholder='admin@frontapi.ir'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    className='placeholder:text-slate-400'
                    placeholder='********'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>
            {isLoading && (
              <PiSpinnerGapBold
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Sign in
            <span className='sr-only'>Sign in</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

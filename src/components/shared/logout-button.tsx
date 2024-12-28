'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
  return (
    <Button size='icon' variant='outline' onClick={() => signOut()}>
      <LogOut />
    </Button>
  );
};

export default LogoutButton;

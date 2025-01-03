'use client';
import React from 'react';

const HeaderContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='z-50 top-0 px-0'>
      <div className='flex-none shadow-base bg-header backdrop-blur-lg flex items-center justify-between relative px-5 py-3'>
        {children}
      </div>
    </header>
  );
};

export default HeaderContent;

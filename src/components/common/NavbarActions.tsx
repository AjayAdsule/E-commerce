'use client';

import React from 'react';
import { ThemeBtn } from './ThemeBtn';
import { Search, ShoppingCart, UserRound } from 'lucide-react';
import { clientApi } from '~/trpc/react';

const NavbarActions = () => {
  const { data } = clientApi.buyer.getCart.useQuery();

  return (
    <>
      <Search size={18} strokeWidth={1} className='text-secondary-foreground' />
      <button className='relative'>
        <ShoppingCart size={18} strokeWidth={1} className='text-secondary-foreground' />
        <div className='absolute bottom-0 h-5 w-5 rounded-full bg-primary text-sm text-white'>
          {data?.length}
        </div>
      </button>
      <UserRound size={18} strokeWidth={1} className='text-secondary-foreground' />
      <ThemeBtn />
    </>
  );
};

export default NavbarActions;

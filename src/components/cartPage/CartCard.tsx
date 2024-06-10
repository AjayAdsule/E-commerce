'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';
import { Input } from '../ui/Input';
import { type RouterOutput } from '~/server/api/root';
import { clientApi } from '~/trpc/react';

interface CartCardProps {
  products: RouterOutput['buyer']['getCartProduct'][0];
}

const CartCard: React.FC<CartCardProps> = ({ products }) => {
  const [quantity, setQuantity] = useState(products.quantity);
  const { mutate } = clientApi.buyer.updateQuantity.useMutation({
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context });
    },
  });

  const utils = clientApi.useUtils();

  const { product } = products;
  return (
    <div className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
      <Image
        src='/assets/men_2_mob.png'
        alt='product-image'
        className='w-full rounded-lg sm:w-40'
        width={50}
        height={50}
      />
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900'>{product?.productName}</h2>
          <p className='mt-1 text-xs text-gray-700'>36EU - 4US</p>
        </div>
        <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
          <div className='flex items-center border-gray-100'>
            <Button
              className='rounded-xl '
              size='icon'
              variant='outline'
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              <Minus size={16} strokeWidth={1} />
            </Button>
            <Input className='w-[50px]  focus:outline-none' value={quantity} />
            <Button
              className=''
              size='icon'
              variant='outline'
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <Plus size={16} strokeWidth={1} />
            </Button>
          </div>
          <div className='flex items-center space-x-4'>
            <p className='text-sm'>{product?.price} RS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

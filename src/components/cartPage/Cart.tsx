'use client';
import React from 'react';
import CartCard from './CartCard';
import CartDetail from './CartDetail';
import useCart from '~/app/cart/hooks/useCart';

const Cart = () => {
  const { data, handleQuantityChange } = useCart();

  return (
    <div className='h-screen bg-gray-100 pt-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {data?.map((products) => (
            <CartCard
              key={products.id}
              products={products}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <CartDetail product={data} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

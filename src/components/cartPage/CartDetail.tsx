'use client';
import React from 'react';
import PaymentBtn from '../common/PaymentBtn';
import { env } from 'process';

interface CartDetailsProps {
  subTotal: number;
}

const CartDetail: React.FC<CartDetailsProps> = ({ subTotal }) => {
  return (
    <>
      <div className='mb-2 flex justify-between'>
        <p className='text-gray-700'>Subtotal</p>
        <p className='text-gray-700'>&#8377;{subTotal}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-gray-700'>Shipping</p>
        <p className='text-gray-700'>&#8377;{subTotal > 499 ? 0 : 99}</p>
      </div>
      <hr className='my-4' />
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>Total</p>

        <p className='mb-1 text-lg font-bold'>&#8377;{subTotal > 499 ? subTotal : subTotal + 99}</p>
      </div>
      <PaymentBtn>Check out</PaymentBtn>
    </>
  );
};

export default CartDetail;

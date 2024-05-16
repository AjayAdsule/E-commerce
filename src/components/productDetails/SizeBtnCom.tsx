'use client';

import React from 'react';
import { SizeProps } from '~/app/product-detail/hooks/useProductDetail';

interface SizeBtnProps {
  selectedSize: string;
  sizes: SizeProps;
  handleSizeChange: (value: string) => void;
}

const SizeBtnCom = ({ selectedSize, sizes, handleSizeChange }: SizeBtnProps) => {
  return (
    <>
      <p className='text-gray-500'>Choose Size</p>
      <div className='my-2 flex gap-x-4'>
        {sizes &&
          Object.keys(sizes).map((productSize, indx) => (
            <button
              key={indx}
              className={`h-[40px] w-[80px] rounded-full bg-gray-200 p-2 text-center text-gray-500  ${productSize === selectedSize && 'border-2 border-primary'}`}
              onClick={() => handleSizeChange(productSize)}
            >
              {productSize}
            </button>
          ))}
      </div>
    </>
  );
};

export default SizeBtnCom;

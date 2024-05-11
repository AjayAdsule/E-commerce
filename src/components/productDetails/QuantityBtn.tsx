'use client';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import useProductDetails from '~/app/product-detail/hooks/useProductDetail';

const QuantityBtn = () => {
  const { handleIncrementQuantity, handleDecrementQuantity, quantity } = useProductDetails();
  return (
    <div className='flex w-[150px] justify-between rounded-md bg-[#e5e7eb]'>
      <Button
        className='rounded-xl bg-[#e5e7eb]'
        size='icon'
        variant='outline'
        onClick={handleDecrementQuantity}
      >
        <Minus size={16} strokeWidth={1} />
      </Button>
      <Input className='w-[50px] bg-[#e5e7eb] focus:outline-none' value={quantity} />
      <Button
        className='bg-[#e5e7eb]'
        size='icon'
        onClick={handleIncrementQuantity}
        variant='outline'
      >
        <Plus size={16} strokeWidth={1} />
      </Button>
    </div>
  );
};

export default QuantityBtn;

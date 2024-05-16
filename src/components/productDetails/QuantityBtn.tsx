'use client';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/Input';
import { clientApi } from '~/trpc/react';

interface QuantityBtnProps {
  handleAddToCart: () => void;
  handleIncrementQuantity: () => void;
  handleDecrementQuantity: () => void;
  quantity: number;
}

const QuantityBtn = ({
  handleAddToCart,
  handleIncrementQuantity,
  handleDecrementQuantity,
  quantity,
}: QuantityBtnProps) => {
  const { mutate } = clientApi.seller.addImages.useMutation();

  const handleMutate = () => {
    mutate({ productId: 'cluyqd1nf0004o21z0gg6vkzj', image: ['dummy0', 'dummy1', 'dummy2'] });
  };

  return (
    <div className='flex gap-x-6'>
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
      <Button className='rounded-lg text-white' size='lg' onClick={handleMutate}>
        Add To Cart
      </Button>
    </div>
  );
};

export default QuantityBtn;

import usePayment from '~/app/product-detail/hooks/usePayment';
import { Separator } from '../ui/separator';
import ColorBtn from './ColorBtn';
import QuantityBtn from './QuantityBtn';
import SizeBtnCom from './SizeBtnCom';

export default async function ProductDescription() {
  return (
    <div className='h-full w-full '>
      <div>
        <h1 className='text-3xl font-bold'>One Life Graphic T-shirt</h1>
        <article className='mt-4'>
          <div className='product_price'>
            <span className='text-1xl font-semibold'>RS 999</span>
            <span className='text-1xl ml-2 text-gray-500'>
              <del>Rs 1499</del>
            </span>
          </div>
          <div className='product_description text-gray-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, facere?
          </div>
        </article>
        <Separator className='my-2 bg-gray-500' />
        <div className='color_section mt-2'>
          <ColorBtn />
        </div>
        <Separator className='my-4 bg-gray-500' />
        <div className='size'>
          <SizeBtnCom />
        </div>
        <Separator className='my-4 bg-gray-500' />
        <div className='actions '>
          <QuantityBtn />
        </div>
      </div>
    </div>
  );
}

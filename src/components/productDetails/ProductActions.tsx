'use client';
import useProductDetails from '~/app/product-detail/hooks/useProductDetail';
import { Separator } from '../ui/separator';
import ColorBtn from './ColorBtn';
import QuantityBtn from './QuantityBtn';
import SizeBtnCom from './SizeBtnCom';

export default function ProductActions() {
  const {
    colors,
    sizes,
    handelColorChange,
    handleAddToCart,
    handleDecrementQuantity,
    handleIncrementQuantity,
    handleSizeChange,
    quantity,
    selectedColor,
    selectedSize,
  } = useProductDetails();
  return (
    <>
      <Separator className='my-2 bg-gray-500' />
      <div className='color_section mt-2'>
        <ColorBtn
          colors={colors}
          selectedColor={selectedColor}
          handelColorChange={handelColorChange}
        />
      </div>
      <Separator className='my-4 bg-gray-500' />
      <div className='size'>
        <SizeBtnCom selectedSize={selectedSize} sizes={sizes} handleSizeChange={handleSizeChange} />
      </div>
      <Separator className='my-4 bg-gray-500' />
      <div className='actions '>
        <QuantityBtn
          handleAddToCart={handleAddToCart}
          handleDecrementQuantity={handleDecrementQuantity}
          handleIncrementQuantity={handleIncrementQuantity}
          quantity={quantity}
        />
      </div>
    </>
  );
}

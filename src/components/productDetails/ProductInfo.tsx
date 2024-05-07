import ProductDescription from './ProductDes';
import ShowProductImage from './ProductImage';

export default function ProductInfo() {
  return (
    <div className='flex h-[80vh]'>
      <div className='product_images w-5/12'>
        <ShowProductImage />
      </div>
      <div className='product_description w-7/12'>
        <ProductDescription />
      </div>
    </div>
  );
}

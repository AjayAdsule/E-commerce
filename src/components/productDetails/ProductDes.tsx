import ProductActions from './ProductActions';

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
        <ProductActions />
      </div>
    </div>
  );
}

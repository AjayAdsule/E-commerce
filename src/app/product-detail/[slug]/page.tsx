import ProductInfo from '~/components/productDetails/ProductInfo';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className='container h-[92vh] p-4'>
      <div className='product_detail_main_banner'>
        <ProductInfo />
      </div>
    </div>
  );
}

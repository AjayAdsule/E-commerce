import { trendingData } from '~/lib/commonUtils';
import { type ProductData } from '~/lib/commonUtils';
const SubBanner = () => {
  return (
    <div className='container'>
      <h4 className='header mb-8 mt-2 text-center text-2xl font-medium'>Trending</h4>
      <div className='flex w-full justify-evenly gap-8'>
        {trendingData.map((product, indx) => (
          <BannerCard {...product} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default SubBanner;

const BannerCard = ({ ...product }: ProductData) => {
  return (
    <div className='h-[22rem] w-52 rounded-md border-2 cursor-pointer'>
      <div className='card_media'>
        <img src={product.src} alt='tees' className='h-fit' />
      </div>
      <div className='card_content p-2'>
        <h5 className='brand_name'>{product.name}</h5>
        <p>{product.detail}</p>
        <div>
          <span>
            <strong>Rs {product.discountPrice}</strong>
          </span>
          <span className='ml-2'>
            <del>RS {product.price}</del>
          </span>
        </div>
      </div>
    </div>
  );
};

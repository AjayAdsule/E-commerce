import FilerSideBar from '~/components/common/FilterSideBar';
import { BannerCard } from '~/components/home/SubBanner';
import { trendingData } from '~/lib/commonUtils';

export default function DynamicProduct({ params }: { params: { slug: string } }) {
  return (
    <div className='container flex gap-4 border-2 p-1'>
      <div className='w-1/5  pl-2'>
        <FilerSideBar slug={params.slug} />
      </div>
      <div className='grid w-4/5 grid-cols-4 justify-items-center gap-y-4'>
        {trendingData.map((product, indx) => (
          <BannerCard {...product} key={indx} />
        ))}
      </div>
    </div>
  );
}

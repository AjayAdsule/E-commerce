import { DesktopCarouselData } from '~/lib/commonUtils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='mt-4  h-[500px] px-2'>
      <Carousel className='w-full '>
        <CarouselContent>
          {DesktopCarouselData?.map((data, indx) => (
            <CarouselItem key={indx}>
              <Link href={data.href}>
                <Image
                  src={data.src}
                  height={20}
                  width={1000}
                  alt='image'
                  className='h-[500px] w-full rounded-lg'
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </div>
  );
};

export default Banner;

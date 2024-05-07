'use client';
import Image from 'next/image';
import { useState } from 'react';

type Image = {
  id: number;
  src: string;
};

const images: Image[] = [
  { id: 1, src: '/assets/men_display.png' },
  { id: 2, src: '/assets/men_2_display.png' },
  { id: 3, src: '/assets/men_3_display.png' },
];

export default function ShowProductImage() {
  const defaultImage: Image = { id: 0, src: '' };
  const [activeImage, setActiveImage] = useState<Image>(images[0] ?? defaultImage);
  const handleImageClick = (id: number, src: string) => {
    setActiveImage({ id, src });
  };
  return (
    <div className='flex h-full gap-3'>
      <div className='flex flex-col gap-y-4'>
        {images.map(({ src, id }) => (
          <Image
            src={src}
            height={100}
            width={110}
            alt='men_display'
            key={id}
            onClick={() => handleImageClick(id, src)}
            className={`${activeImage.id === id && 'border-2 border-blue-600'} cursor-pointer rounded-md`}
          />
        ))}
      </div>
      <div className=''>
        <Image
          src={activeImage.src}
          alt='active_image'
          width={350}
          height={200}
          className='rounded-md'
        />
      </div>
    </div>
  );
}

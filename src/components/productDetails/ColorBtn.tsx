'use client';
import { type ColorProps } from '~/app/product-detail/hooks/useProductDetail';
import { Button } from '../ui/button';

export default function ColorBtn({
  colors,
  handelColorChange,
  selectedColor,
}: {
  colors: ColorProps;
  handelColorChange: (value: string) => void;
  selectedColor: string;
}) {
  return (
    <>
      <p className='text-gray-500'>Select colors</p>
      <div className='mt-1 flex gap-x-2'>
        {colors &&
          Object.keys(colors).map((colorsKey, indx) => {
            const color = colors[colorsKey];
            return (
              <Button
                key={indx}
                className={`h-[30px] w-[30px] cursor-pointer rounded-full ${selectedColor === colorsKey && 'border-2 border-primary'} `}
                style={{ backgroundColor: color }}
                onClick={() => handelColorChange(colorsKey)}
              ></Button>
            );
          })}
      </div>
    </>
  );
}

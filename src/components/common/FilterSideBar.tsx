'use client';
import { Checkbox } from '../ui/checkbox';
import useFilters from '~/app/products/hook/useFilter';

interface FilterLabel {
  name: string;
  value: string;
}

type FilterData = Record<string, FilterLabel[]>;

export const obj: FilterData = {
  Brand: [
    { name: 'Highlander', value: 'highlander' },
    { name: 'roadster', value: 'roadster' },
    { name: 'nike', value: 'nike' },
    { name: 'puma', value: 'puma' },
    { name: 'Highlander', value: 'highlander' },
    { name: 'Highlander', value: 'highlander' },
  ],
  Price: [
    { name: 'Rs. 641 to Rs. 1400', value: 'Rs. 641 to Rs. 1400' },
    { name: 'Rs. 645 to Rs. 1409', value: 'Rs. 645 to Rs. 1409' },
    { name: 'Rs. 645 to Rs. 1500', value: 'Rs. 645 to Rs. 1500' },
    { name: 'Rs. 645 to Rs. 1409', value: 'Rs. 645 to Rs. 1409' },
  ],
};

export default function FilerSideBar({ slug }: { slug: string }) {
  const { handleCheckboxChange } = useFilters();

  return (
    <div>
      {Object.keys(obj).map((keys, indx) => (
        <div key={indx}>
          <h1 className='m-2 text-xl font-medium'>{keys}</h1>
          {obj[keys]?.map((item, indx) => (
            <div key={indx} className='mt-1'>
              <Checkbox
                id={item.value}
                onClick={() => handleCheckboxChange(item.value, keys)}
                value={item.value}
              />
              <label htmlFor={item.value} className='ml-2'>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

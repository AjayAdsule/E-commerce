'use client';

import { useState } from 'react';
import { Checkbox } from '../ui/checkbox';

interface FilterLabel {
  name: string;
  value: string;
}

type FilterData = Record<string, FilterLabel[]>;

export const obj: FilterData = {
  Brand: [{ name: 'Highlander', value: 'highlander' }],
  Price: [{ name: 'Rs. 645 to Rs. 1409', value: 'Rs. 645 to Rs. 1409' }],
};

export default function FilerSideBar({ slug }: { slug: string }) {
  type CheckedState = Record<string, string[]>;

  // Assuming checked state is defined like this:
  const [checked, setChecked] = useState<CheckedState>({ Price: [], Brand: [] });

  const handleCheckboxChange = (itemValue: string, keys: string) => {
    const isChecked = checked[keys]?.includes(itemValue);
    console.log(isChecked);
  };
  console.log(checked);
  return (
    <div>
      {Object.keys(obj).map((keys, indx) => (
        <div key={indx}>
          <h1>{keys}</h1>
          {obj[keys]?.map((item, indx) => (
            <div key={indx} className='flex'>
              <Checkbox
                id={item.value}
                onClick={() => handleCheckboxChange(item.value, keys)}
                value={item.value}
              />
              <label htmlFor={item.value}>{item.name}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

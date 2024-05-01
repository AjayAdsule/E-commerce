import { useState } from 'react';

export default function useFilters() {
  type CheckedState = Record<string, string[]>;
  const [filterSelect, setFilterSelect] = useState<CheckedState>({ Price: [], Brand: [] });

  //* change handle for checked btn
  const handleCheckboxChange = (itemValue: string, keys: string) => {
    const isChecked = filterSelect[keys]?.includes(itemValue);
    if (!isChecked) {
      setFilterSelect((prevValue) => ({
        ...prevValue,
        [keys]: [...(prevValue[keys] ?? []), itemValue],
      }));
    } else {
      //! remove and update value
      setFilterSelect((prevValue) => ({
        ...prevValue,
        [keys]: (prevValue[keys] ?? [])?.filter((checkedValue) => checkedValue !== itemValue),
      }));
    }
  };
  return {
    filterSelect,
    setFilterSelect,
    handleCheckboxChange,
  };
}

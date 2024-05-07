import { useState } from 'react';
type SizeProps = Record<string, number | undefined>;
type ColorProps = Record<string, string | undefined>;
const sizes: SizeProps = { small: 2, medium: 2, large: 3, X_large: 7 };
const colors: ColorProps = { orange: '#ea580c', pink: '#9d174d', violet: '#4c1d95' };
export default function useProductDetails() {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('');
  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };
  const handelColorChange = (value: string) => setSelectedColor(value);
  return {
    selectedSize,
    setSelectedSize,
    sizes,
    handleSizeChange,
    colors,
    selectedColor,
    setSelectedColor,
    handelColorChange,
  };
}

import { useState } from 'react';
import { clientApi } from '~/trpc/react';

export type SizeProps = Record<string, number | undefined>;
export type ColorProps = Record<string, string | undefined>;

const sizes: SizeProps = { small: 2, medium: 2, large: 3, X_large: 7 };
const colors: ColorProps = { orange: '#ea580c', pink: '#9d174d', violet: '#4c1d95' };

export default function useProductDetails() {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { mutate: cartMutate } = clientApi.buyer.addToCart.useMutation();
  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };
  const handelColorChange = (value: string) => setSelectedColor(value);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQuantity = () => {
    setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    cartMutate({ productId: 'cluyqfqek0006o21ztszpw290', quantity: 2 });
  };
  return {
    selectedSize,
    setSelectedSize,
    sizes,
    handleSizeChange,
    colors,
    selectedColor,
    setSelectedColor,
    handelColorChange,
    handleIncrementQuantity,
    handleDecrementQuantity,
    quantity,
    handleAddToCart,
  };
}

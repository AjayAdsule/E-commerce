/**
 * logic for this hooks are :--
 * get the current cart data
 * make a function that will update the cart quantity
 */

import { useState } from 'react';
import { clientApi } from '~/trpc/react';

export default function useCart() {
  const { data } = clientApi.buyer.getCartProduct.useQuery();

  const [quantity, setQuantity] = useState(0);

  return {
    data,
  };
}

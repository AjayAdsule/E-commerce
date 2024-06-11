/**
 * logic for this hooks are :--
 * get the current cart data
 * make a function that will update the cart quantity
 */

import { clientApi } from '~/trpc/react';

export default function useCart() {
  const utils = clientApi.useUtils();
  const { data } = clientApi.buyer.getCartProduct.useQuery();
  const { mutate } = clientApi.buyer.updateQuantity.useMutation({
    onSuccess: async () => await utils.buyer.getCartProduct.invalidate(),
  });
  const handleQuantityChange = async (quantity: number, cartId: string) => {
    mutate({ updatedQuantity: quantity, cartId: cartId });
  };

  return {
    data,
    handleQuantityChange,
  };
}

/**
 * logic for this hooks are :--
 * get the current cart data
 * make a function that will update the cart quantity
 */

import { useEffect, useState } from 'react';
import { clientApi } from '~/trpc/react';

export default function useCart() {
  const [subTotal, setSubTotalPrice] = useState(0);
  const utils = clientApi.useUtils();
  const { data } = clientApi.buyer.getCartProduct.useQuery();
  clientApi.buyer.getOrder.useQuery();
  clientApi.buyer.getOrderProduct.useQuery();
  const { mutate } = clientApi.buyer.updateQuantity.useMutation({
    onSuccess: async () => await utils.buyer.getCartProduct.invalidate(),
  });
  const handleQuantityChange = async (quantity: number, cartId: string) => {
    mutate({ updatedQuantity: quantity, cartId: cartId });
  };

  useEffect(() => {
    let price = 0;
    data?.forEach((cartProduct) => {
      if (cartProduct.product && typeof cartProduct.product.price === 'number') {
        price += cartProduct.quantity * cartProduct.product?.price;
      }
    });
    setSubTotalPrice(price);
  }, [data]);

  return {
    subTotal,
    data,
    handleQuantityChange,
  };
}

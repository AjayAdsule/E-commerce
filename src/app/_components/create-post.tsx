'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';
import { env } from '~/env';
import { clientApi } from '~/trpc/react';

type ProccedToBuy = {
  price: number;
  productId: string;
  quantity: number;
  sellerId: string;
};

const DummyComp = () => {
  // const mutation = clientApi.seller.listProduct.useMutation();
  // const createUser = clientApi.user.createUser.useMutation();
  // const listProduct = clientApi.seller.listProduct.useMutation();
  // const addToCart = clientApi.buyer.addToCart.useMutation();
  // const user = clientApi.user.getUsers.useQuery();
  const checkout = clientApi.buyer.checkout.useMutation();
  // const proceedToBuyMutation = clientApi.buyer.proceedToBuy.useMutation();
  // const { data: userCartProduct } = clientApi.buyer.getCartProduct.useQuery();
  // const { data: orderProduct } = clientApi.user.getUserOrderedProducts.useQuery();

  // let proceedToBuy: ProccedToBuy[] = [];
  // if (userCartProduct) {
  //   proceedToBuy = userCartProduct?.map((cartItems) => ({
  //     price: cartItems?.product?.price ?? 0,
  //     productId: cartItems?.product?.id ?? '',
  //     quantity: cartItems?.quantity ?? 0,
  //     sellerId: cartItems?.product?.sellerId ?? '',
  //   }));
  // }

  const stripePromise = loadStripe(
    'pk_test_51O9m6ySJDbl4dha4XVFIOcpCsf6ox3iJp5IswxuxnZbHLOM6huZOxhMn61GAGkFRrDvauMzXx5FXcLipuEUn0ReX00zlqKIE7K',
  );
  const handleAdd = async () => {
    // mutation.mutate({
    //   price: 300,
    //   productName: 'Puma shoes',
    //   productDescription: 'Puma seaker for steady go',
    //   stock: 20,
    //   coverImage: 'htts://image.com/',
    // });
    // createUser.mutate({
    //   email: 'seller@gmail.com',
    //   password: 'seller',
    //   role: 'Seller',
    //   name: 'seller',
    // });
    // listProducts
    // listProduct.mutate({
    //   productName: 'Nike',
    //   coverImage: 'http://dummy.img',
    //   productDescription: 'nike shoes with lace',
    //   price: 1999,
    //   stock: 12,
    // });
    // addToCart cluyqd1nf0004o21z0gg6vkzj
    // addToCart.mutate({ quantity: 1, productId: 'cluyqd1nf0004o21z0gg6vkzj' });
    // proceedToBuyMutation.mutate(proceedToBuy);
    // payment method
    const stripe = await stripePromise;
    const checkoutSession = await checkout.mutateAsync({
      name: 'puma',
      amount: 299,
      currency: 'inr',
      quantity: 1,
    });

    console.log({ checkoutSession });
    const result = await stripe?.redirectToCheckout({ sessionId: checkoutSession.id });
    console.log({ result });
  };
  return (
    <>
      <div>Dummy component</div>
      <button
        onClick={handleAdd}
        className='group relative mb-2 me-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800'
      >
        <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          Api Testing
        </span>
      </button>
    </>
  );
};

export default DummyComp;

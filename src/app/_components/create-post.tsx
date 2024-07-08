'use client';

import { clientApi } from '~/trpc/react';

const DummyComp = () => {
  // const mutation = clientApi.seller.listProduct.useMutation();
  // const createUser = clientApi.user.createUser.useMutation();
  // const listProduct = clientApi.seller.listProduct.useMutation();
  const addToCart = clientApi.buyer.addToCart.useMutation();
  // const user = clientApi.user.getUsers.useQuery();
  // const checkout = clientApi.buyer.checkout.useMutation();
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

  const handleAdd = async () => {
    // mutation.mutate({
    //   price: 300,
    //   productName: 'Puma shoes',
    //   productDescription: 'Puma seaker for steady go',
    //   stock: 20,
    //   coverImage: 'htts://image.com/',
    // });
    // createUser.mutate({
    //   email: 'dummy@gmail.com',
    //   password: 'dummy',
    //   role: 'Seller',
    //   name: 'dummy',
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
    // addToCart.mutate({ quantity: 1, productId: 'clycvvluu000d7tw3qxtnl0t0' });
    // proceedToBuyMutation.mutate(proceedToBuy);
    // payment method
  };
  return (
    <div className='flex h-full w-full justify-center border-2'>
      <button
        onClick={handleAdd}
        className='group relative mb-2 me-2 mt-4 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800'
      >
        <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          Api Testing
        </span>
      </button>
    </div>
  );
};

export default DummyComp;

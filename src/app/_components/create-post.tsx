'use client';

import { clientApi } from '~/trpc/react';

const DummyComp = () => {
  const mutation = clientApi.seller.listProduct.useMutation();
  const createUser = clientApi.user.createUser.useMutation();
  const user = clientApi.user.getUsers.useQuery();
  console.log({ user: user.data });
  const handleAdd = async () => {
    mutation.mutate({
      price: 300,
      productName: 'Puma shoes',
      productDescription: 'Puma seaker for steady go',
      stock: 20,
      coverImage: 'htts://image.com/',
    });
    // createUser.mutate({
    //   email: 'seller1@gmail.com',
    //   password: 'seller',
    //   role: 'Seller',
    //   name: 'cloud seller',
    // });
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

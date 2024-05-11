import { serverApi } from '~/trpc/server';

export const handleAddToCart = async () => {
  const data = await serverApi.buyer.addToCart([
    { quantity: 2, productId: 'cluyqd1nf0004o21z0gg6vkzj' },
    { quantity: 5, productId: 'cluyqd1nf0004o21z0gg6vkzj' },
  ]);
  console.log({ data });
};

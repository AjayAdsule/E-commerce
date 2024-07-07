'use client';

import { clientApi } from '~/trpc/react';

const Page = ({ params }: { params: { slug: string } }) => {
  const { data } = clientApi.buyer.orderStatus.useQuery(
    'cs_test_a1tBBRbjJBaWR4D5p8hlxu5HuiLi9zCuuzhntW6YHoTTjgdtIajsrXzxtY',
  );

  return <div>page {params.slug}</div>;
};

export default Page;

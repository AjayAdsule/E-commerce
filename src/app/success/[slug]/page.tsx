'use client';

import { clientApi } from '~/trpc/react';

const Page = ({ params }: { params: { slug: string } }) => {
  const { data } = clientApi.buyer.orderStatus.useQuery(
    'cs_test_a13E9sQmRrqd5urnCTWKDGepeEORg5neErlzB85unEmJMzqbk9iWuxUoIi',
  );

  return <div>page {params.slug}</div>;
};

export default Page;

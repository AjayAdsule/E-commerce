'use client';

import { clientApi } from '~/trpc/react';

const Page = ({ params }: { params: { slug: string } }) => {
  const { search } = window.location;
  const index = search.indexOf('=');

  const { data } = clientApi.buyer.orderStatus.useQuery(search.slice(index + 1));

  return <div>page {params.slug}</div>;
};

export default Page;

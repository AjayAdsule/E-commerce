import Link from 'next/link';

import DummyComp from '~/app/_components/create-post';

import { serverApi } from '~/trpc/server';

export default async function Home() {
  const hello = await serverApi.post.hello({ text: 'from tRPC' });

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
      {hello.greeting}
      <DummyComp />
    </main>
  );
}

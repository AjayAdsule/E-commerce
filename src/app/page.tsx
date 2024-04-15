import DummyComp from '~/app/_components/create-post';
import { Button } from '~/components/ui/button';

export default async function Home() {
  return (
    <main className=' flex h-[600px] w-full justify-center border-2 bg-background text-primary'>
      <h2>Frontend Part started</h2>
      <Button variant={'secondary'}>Submit</Button>
      <Button variant={'default'}>Submit</Button>
    </main>
  );
}

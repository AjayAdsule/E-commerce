import Banner from '~/components/home/Banner';
import SubBanner from '~/components/home/SubBanner';

export default async function Home() {
  return (
    <main className=' '>
      <section>
        <Banner />
      </section>
      <section className='new_arrival mt-4'>
        <SubBanner />
      </section>
      <div className='h-[200px]'></div>
    </main>
  );
}

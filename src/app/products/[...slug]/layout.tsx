import FilerSideBar from '~/components/common/FilterSideBar';

export default function DynamicProductLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return (
    <div className='container mt-3 flex h-[90vh]'>
      <aside className='side_bar h- w-1/6 border-2 p-4'>
        <FilerSideBar slug={params.slug} />
      </aside>
      <div className='w-5/6 border-2'>{children}</div>
    </div>
  );
}

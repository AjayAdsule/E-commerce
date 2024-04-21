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
      <aside className='side_bar h- w-1/4 border-2'>
        <FilerSideBar slug={params.slug} />
      </aside>
      <div className='w-3/4 border-2'>{children}</div>
    </div>
  );
}

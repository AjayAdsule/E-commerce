export default function DynamicProduct({ params }: { params: { slug: string } }) {
  return <h2>You are on {params.slug}</h2>;
}

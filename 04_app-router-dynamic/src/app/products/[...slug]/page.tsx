interface ProductCategoryPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  // { params: Promise<{slug: []}> }
  const { slug } = await params; // slug= ['','','',]
  return (
    <div>
      <h2 className="text-2xl font-bold">상품 카테고리 페이지</h2>
      <p>경로 세그먼트: {slug.join(" > ")}</p>
    </div>
  );
}

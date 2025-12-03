import Product from "@/types";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

async function getProducts(id: string): Promise<Product> {
  const response = await fetch(`http://localhost:4000/products/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("데이터 불러오기 실패!");

  const json = await response.json();

  return json;
}

export default async function Page({ params }: DetailPageProps) {
  const { id } = await params;
  const datas = await getProducts(id);

  return (
    <div>
      {datas ? (
        <>
          <h2 className="text-2xl font-bold"> 상품 상세</h2>
          <p>{datas.name}</p>
          <p>{datas.price.toLocaleString()}원</p>
          <p>재고: {datas.stock}개</p>
        </>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

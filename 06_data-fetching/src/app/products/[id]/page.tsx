import Product from "@/types";

interface DetailPageProps {
  params: Promise<{ id: number }>; // ❌ Promise 제거
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("데이터 불러오기 실패!");

  const json = await response.json();

  return json;
}

export default async function Page({ params }: DetailPageProps) {
  const { id } = await params; // await 제거
  const datas = await getProducts();
  const findData = datas.find((data) => data.id === id);

  return (
    <div>
      {findData ? (
        <>
          <h1>{findData.name}</h1>
          <p>{findData.price}원</p>
          <p>재고: {findData.stock}개</p>
        </>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

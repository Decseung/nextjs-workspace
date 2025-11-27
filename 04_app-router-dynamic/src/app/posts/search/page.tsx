interface PosrSearchPageProps {
  searchParams: Promise<{
    condition: string;
    keyword: string;
  }>;
}

export default async function PostSearchPage({
  searchParams,
}: PosrSearchPageProps) {
  // {searchParams: Promise<{condition:"xx", keyword:"xx"}>}
  // 리액트 쿼리스트링 꺼내기
  // const [searchParams] = useSearchParams(); // [URLSearchParmas객체, 쿼리수정하는함수]
  // const condition = SearchParamsContext.get("condition") // title
  // const keyword = SearchParamsContext.get('keyword') // 안녕
  //데이터 페칭(condition, keyword)

  // * Next.js 방식 - props의 searchParams 꺼내서 await로 풀기

  const { condition, keyword } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 검색페이지</h1>
      <p>검색조건:{condition}</p>
      <p>검색키워드:{keyword}</p>
    </div>
  );
}

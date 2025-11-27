import Link from "next/link";

interface PostDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  // props === { params: {id: xx}}
  // 게시글 식별자(id 세그먼트) => 데이터 패칭
  // const {id} = useParams() // { id: xx } => React 방법

  // params == Promise<{id:xx}>
  const { id } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 상세</h1>
      <p>게시글 ID: {id}</p>
      <hr />
      {/* URL: /posts/xx/edit => 수정페이지("xx번 게시글 수정페이지") */}
      <Link href={`/posts/${id}/edit`}>수정 페이지로 이동</Link>
    </div>
  );
}

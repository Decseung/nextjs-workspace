import Link from "next/link";
import { getPostById } from "../service";

interface PostDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">게시글 상세</h2>
      <p>제목: {post.title} </p>
      <p>내용: {post.content} </p>
      <p>작성자: {post.author} </p>
      <br />
      <hr className="py-4" />

      <Link href={`/posts/${id}/edit`}> 수정페이지로 이동 &gt; </Link>
    </div>
  );
}

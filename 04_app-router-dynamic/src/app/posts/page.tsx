import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 목록</h1>
      {/* 게시글 작성 페이지 이동 링크 => /posts/new URL요청시 게시글작성페이지 출력 */}
      <Link href="/posts/new">게시글 등록</Link>
    </div>
  );
}

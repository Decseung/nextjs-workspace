import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 목록</h1>
      {/* 게시글 작성 페이지 이동 링크 => /posts/new URL요청시 게시글작성페이지 출력 */}
      <Link href="/posts/new">게시글 등록</Link>

      <hr />

      <ul>
        <li>
          <Link href="/posts/1">게시글1</Link>
        </li>
        <li>
          <Link href="posts/2">게시글2</Link>
        </li>
        <li>
          <Link href="posts/3">게시글3</Link>
        </li>
      </ul>

      <hr />

      <Link href="/posts/search?condition=title&keyword=안녕">
        검색조건(제목), 키워드(안녕) - 검색요청!
      </Link>
    </div>
  );
}

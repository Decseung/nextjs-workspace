import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPostById } from "@/services/post.service";

export default async function PostDetailPage({ params }: {params: Promise<{id: string}>}) {
  const { id } = await params;
  const post = await getPostById(id);

  // 실제 데이터 페칭으로 교체될 더미 데이터
  /*
  const mockPost = {
    id,
    title: "Next.js CRUD 데모 게시글 제목",
    userId: 1,
    author: "홍길동",
    content: "이 페이지는 게시글 상세 페이지 UI 예시입니다. 나중에 서버에서 게시글 데이터를 가져와 렌더링하도록 교체하면 됩니다.",
    createdAt: "2025-12-01 10:00",
  };
  */

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 py-8">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="text-sm text-muted-foreground">
            <span>작성자 {post.author}</span>
            <span className="mx-2">·</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
      </header>

      <section className="rounded-lg border bg-card px-6 py-6 text-sm leading-relaxed md:text-base">
        <p className="mt-3">
          {post.content}
        </p>
      </section>

      <div className="flex justify-between">
        <div>
          <Link href="/posts">
            <Button variant="outline" size="sm">
              목록으로
            </Button>
          </Link>
        </div>

        {/* 로그인한 회원이 작성자일 경우 보여질 ui */}
        <div className="space-x-2">
          <Link href={`/posts/${post.id}/edit`}>
            <Button size="sm">수정하기</Button>
          </Link>
          <Button variant="destructive" size="sm">
            삭제하기
          </Button>
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/services/post.service";

export default async function PostsPage() {

  const posts = await getPosts();

  // 실제 데이터 페칭으로 교체될 더미 데이터
  /*
  const mockPosts = [
    {
      id: 1,
      title: "Next.js CRUD 예제 게시글",
      author: "홍길동",
      createdAt: "2025-12-01",
    },
    {
      id: 2,
      title: "두 번째 게시글입니다",
      author: "이몽룡",
      createdAt: "2025-12-02",
    },
  ];
  */

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 py-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">게시글 목록</h1>
          <p className="text-sm text-muted-foreground">
            작성된 게시글을 확인해보세요
          </p>
        </div>

        {/* 로그인이 되어있는 회원만 보여질 ui */}
        <Link href="/posts/new">
          <Button size="sm">새 글 쓰기</Button>
        </Link>

      </header>

      <section className="overflow-hidden rounded-lg border bg-card">
        <div className="hidden border-b bg-muted/40 px-6 py-3 text-sm font-medium text-muted-foreground md:block">
          게시글 목록
        </div>

        <div className="divide-y">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="flex flex-col gap-2 px-4 py-4 transition-colors hover:bg-muted/40 md:flex-row md:items-center md:justify-between md:px-6"
            >
              <div className="space-y-1">
                <h2 className="text-base font-semibold md:text-lg">{post.title}</h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {post.author} · {post.createdAt}
                </p>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="px-6 py-10 text-center text-sm text-muted-foreground">
              아직 작성된 게시글이 없습니다.{" "}
              <Link href="/posts/new" className="text-primary underline-offset-2 hover:underline">
                첫 게시글을 작성해 보세요.
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
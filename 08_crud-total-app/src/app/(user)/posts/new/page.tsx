import PostForm from "@/features/posts/components/PostForm";

export default function PostCreatePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="w-full max-w-2xl space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold md:text-3xl">새 게시글 작성</h1>
            <p className="text-sm text-muted-foreground">
              제목과 내용을 입력해 새 게시글을 등록하세요.
            </p>
          </div>
        </div>

        <PostForm />
      </div>
    </div>
  );
}
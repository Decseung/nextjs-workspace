import Link from "next/link";
import { getPosts } from "./service";

export default async function PostListPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title} - {post.author}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Link href="/posts/new">등록 페이지로 이동</Link>
    </div>
  );
}

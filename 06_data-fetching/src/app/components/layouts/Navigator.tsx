import Link from "next/link";

export default function Page() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex gap-6 py-3">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/posts">게시글</Link>
          </li>
          <li>
            <Link href="/products">상품</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

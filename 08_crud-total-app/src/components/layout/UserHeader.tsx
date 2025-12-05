import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/features/auth/components/LogoutButton";

export default function UserHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost">홈</Button>
          </Link>
          <Link href="/posts">
            <Button variant="ghost">게시글</Button>
          </Link>
          {/* 로그인 전 ui */}
          <Link href="/auth/login">
            <Button variant="ghost">로그인</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="ghost">회원가입</Button>
          </Link>
          {/* 로그인 후 ui */}
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
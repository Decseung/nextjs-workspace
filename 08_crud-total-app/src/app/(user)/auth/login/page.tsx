import LoginForm from "@/features/auth/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground">
            이메일과 비밀번호를 입력해주세요
          </p>
        </div>

        {/* 로그인 폼 */}
        <LoginForm />

        <div className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
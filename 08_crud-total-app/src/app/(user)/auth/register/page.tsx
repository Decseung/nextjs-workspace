import RegisterForm from "@/features/auth/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-8 shadow-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-muted-foreground">
            새 계정을 만들어 시작하세요
          </p>
        </div>

        <RegisterForm />

        <div className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
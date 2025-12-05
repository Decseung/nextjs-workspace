'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { loginAction } from "../actions";

export default function LoginForm() {

  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: '',
    errors: {}
  })

  return (
    <form 
      action={formAction}
      className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>

      {!state.success && state.message && (
        <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
          {state.message}
        </div> 
      )}

      <Button 
        type="submit" 
        className="w-full"
        disabled={isPending}
      >
        {isPending ? '로그인 중..' : '로그인'}
      </Button>
    </form>
  );
}
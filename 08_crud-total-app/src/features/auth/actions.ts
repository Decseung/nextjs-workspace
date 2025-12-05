'use server';

import { login } from "@/services/auth.service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export const loginAction = async(prevState: ActionState, formData: FormData): Promise<ActionState> => {

  // 사용자 입력값 formData 뽑기
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 데이터 가공
  const payload = {email, password};

  // API 요청 (service)
  let data;
  try {
    data = await login(payload)
  }catch(error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }

  // 로그인 성공시 data == {accessToken: 출입증, user: User객체}
  // accessToken => 쿠키에 저장
  const cookieStore = await cookies();

  cookieStore.set('accessToken', data.accessToken, {
    httpOnly: true,  // 자바스크립트 접근 불가(XSS 방지)
    maxAge: 60 * 60, // 1시간
    path: '/'
  })

  if(data.user.role === 'ADMIN') {
    redirect('/admin');
  }else {
    redirect('/');
  }

}

export const logoutAction = async () => {
  // 쿠키에 저장된 accessToken 제거 
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
  redirect('/auth/login');
}
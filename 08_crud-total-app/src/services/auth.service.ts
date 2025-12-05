// Service Layer - Spring Boot Rest API 1:1 통신 함수 (순수 통신)

import { LoginRequest, LoginResponse } from "@/features/auth/types";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 로그인 요청을 위한 값 전달받기 => 응답 반환 
export const login = async (user: LoginRequest): Promise<LoginResponse> => {

  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if(!response.ok) { // 401 에러
    const errorData = await response.json(); // {message: 'xxxxx'}
    throw new Error(errorData?.message || '로그인 실패');
  }

  return response.json();
}
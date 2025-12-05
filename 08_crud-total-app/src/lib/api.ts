// fetch => 인증처리를위한 fetch 개조

import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}): Promise<Response> {

  // 쿠키 accessToken 꺼내고
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  // Header 설정
  const headers = {
    'Content-Type': 'application/json',
    ...(accessToken && {'Authorization': `Bearer ${accessToken}`}),
    ...options.headers
  }

  // api 통신 
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: headers,
    ...options
  });

  /*
  if(response.status === 401){
    // refreshToken을 활용해서 재발급하는 로직 
  }
  */

  return response;

}
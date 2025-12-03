"use server";

import { createPost, deletePost, updatePost } from "./service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  message?: string; // 전체 메시지용
  errors?: Record<string, string>;
};

// 서버 액션용 함수

export async function createPostAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 딜레이 임의로 주기
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const title = formData.get("title") as string;
  // formData의 데이터를 가져올 때 as string 사용해 문자열로 변환 후 할당
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;

  const errors: Record<string, string> = {};
  // 유효성 검사
  if (title.length > 10) {
    errors.title = "제목은 10자 이하여야합니다.";
  }
  if (content.length > 100) {
    errors.content = "내용은 100글자 이하여야합니다.";
  }
  if (!author) {
    errors.author = "작성자는 필수 입력요소입니다.";
  }

  // 유효성 검사시 에러가 하나라도 존재하면 리턴

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "유효성 검사 실패",
      errors,
    };
  }

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // API 요청 => db 저장
  try {
    await createPost(payload);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "데이터 저장중 오류 발생",
    };
  }

  // 게시글 목록 캐시 갱신(revalidatePath) =>  URL 재요청(redirect)
  revalidatePath("/posts");
  redirect("/posts");

  return {
    success: true,
  };
}

// id 전달받는 방법 - input type="hidden"
/*
export async function updatePostAction(formData: FormData) {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 검증

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // 백엔드 API 요청 - 수정
  await updatePost(id, payload); // 수정할 게시글의 id, payload 전달 필요

  // 후속 작업 : 페이지 이동
  revalidatePath('/posts'); // 목록 페이지 캐시 갱신
  revalidatePath(`/posts/${id}`); // 해당 게시글 상세 페이지 캐시 갱신
  redirect(`/posts/${id}`); // 상세 페이지로 이동
}
  */

//  id 전달받는 방법2 - 바인딩(고정)된 id값
export async function updatePostAction(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;

  // 검증

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // 백엔드 API 요청 - 수정
  await updatePost(id, payload); // 수정할 게시글의 id, payload 전달 필요

  // 후속 작업 : 페이지 이동
  revalidatePath("/posts"); // 목록 페이지 캐시 갱신
  revalidatePath(`/posts/${id}`); // 해당 게시글 상세 페이지 캐시 갱신
  redirect(`/posts/${id}`); // 상세 페이지로 이동
}

//  삭제 액션 함수
export async function deletePostAction(id: string) {
  await deletePost(id);

  revalidatePath("/posts"); // 목록 데이터 갱신
}

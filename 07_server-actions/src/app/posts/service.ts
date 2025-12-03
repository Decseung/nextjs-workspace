import { createPostDto, Post, updatePostDto } from "./types";

// 백엔드 API와의 통신 (1:1)

// 목록 조회
export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("http://localhost:4000/posts");
  if (!response.ok) {
    throw new Error("게시글 목록을 불러오는데 실패했습니다.");
  }
  const data: Post[] = await response.json();
  return data;
};

// 상세 조회용
export const getPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`http://localhost:4000/posts/${id}`);
  if (!response.ok) {
    throw new Error("게시글을 불러오는데 실패했습니다.");
  }
  const data: Post = await response.json();
  return data;
};

// 게시글 등록용 - 요청 전송 방식: POST, Body: 등록객체 => JSON 문자열
export const createPost = async (post: createPostDto): Promise<Post> => {
  const response = await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) throw new Error("게시글 등록에 실패했습니다.");
  const data = await response.json();
  return data;
};

// 게시글 수정용 - 방식: PUT, Body: 수정객체 => JSON 문자열
export const updatePost = async (
  id: string,
  post: updatePostDto
): Promise<Post> => {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post), // (수정할 데이터가 담겨있는 객체)
  });
  if (!response.ok) throw new Error("게시글 수정에 실패했습니다.");
  const data = await response.json();
  return data;
};

// 게시글 삭제용 - 방식: DELETE
export const deletePost = async (id: string): Promise<Post> => {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("게시글 삭제에 실패했습니다.");
  const data = await response.json();
  return data;
};

// 게시글(post)와 관련된 타입 정의 문서

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

// 요청 데이터 관련 타입 정의
export interface createPostDto {
  title: string;
  content: string;
  author: string;
}

export interface updatePostDto {
  title: string;
  content: string;
  author: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  userId?: number;
  author?: string;
}

export interface CreatePostRequest {
  title: string;
  content: string;
}
export interface UpdatePostRequest {
  title: string;
  content: string;
}
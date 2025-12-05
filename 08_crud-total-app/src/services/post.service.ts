import { CreatePostRequest, Post, UpdatePostRequest } from "@/features/posts/types";
import { fetchWithAuth } from "@/lib/api"

export const getPosts = async (): Promise<Post[]> => {
  
  const response = await fetchWithAuth('/api/posts');
  if(!response.ok) throw new Error('데이터를 가져오는데 실패하였습니다.');
  return response.json();

}

export const getPostById = async (id: string): Promise<Post> => {
  const response = await fetchWithAuth(`/api/posts/${id}`);
  if(!response.ok) throw new Error('데이터를 가져오는데 실패하였습니다.');
  return response.json();
}

export const createPost = async (post: CreatePostRequest): Promise<Post> => {
  const response = await fetchWithAuth('/api/posts', {
    method: 'POST',
    body: JSON.stringify(post)
  });
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || '게시글 등록에 실패하였습니다.')
  }
  return response.json();
}

export const updatePost = async (id: number, post: UpdatePostRequest): Promise<Post> => {
  const response = await fetchWithAuth(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post)
  })
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || '게시글 수정에 실패하였습니다.')
  }
  return response.json();
}

export const deletePost = async (id: number): Promise<Post> => {
  const response = await fetchWithAuth(`/api/posts/${id}`, {
    method: 'DELETE'
  })
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || '게시글 삭제에 실패하였습니다.')
  }
  return response.json();
}
'use server'

import { createPost, updatePost } from "@/services/post.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export const createPostAction = async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  try{
    await createPost({title, content})
  }catch(error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown Error'
    }
  }

  revalidatePath('/posts')
  redirect('/posts');

}

export const updatePostAction = async (id: number, prevState: ActionState, formData: FormData): Promise<ActionState> => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  try {
    await updatePost(id, {title, content})
  }catch(error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown Error'
    }
  }

  revalidatePath('/posts')
  revalidatePath(`/posts/${id}`)
  redirect(`/posts/${id}`);


}
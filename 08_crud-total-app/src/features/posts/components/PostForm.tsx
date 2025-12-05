'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "../types";
import { createPostAction, updatePostAction } from "../actions";
import { useActionState } from "react";

type PostFormMode = "create" | "edit";

interface PostFormProps {
  mode?: PostFormMode;
  initialPost?: Post;
}

export default function PostForm({
  mode = "create",
  initialPost = {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
}: PostFormProps) {

  const {action, submitLabel, submitPendingLabel} = mode === "create" ? {
    action: createPostAction,
    submitLabel: '등록하기',
    submitPendingLabel: '등록 중...'
  } : {
    action: updatePostAction.bind(null, initialPost.id),
    submitLabel: '수정하기',
    submitPendingLabel: '수정 중...'
  }

  const [state, formAction, isPending] = useActionState(action, {
    success: false, 
    message: '',
    errors: {}
  })

  return (
    <form 
      action={formAction}
      className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          name="title"
          placeholder="게시글 제목을 입력하세요"
          defaultValue={initialPost.title}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          name="content"
          className="min-h-[200px]"
          placeholder="게시글 내용을 입력하세요"
          defaultValue={initialPost.content}
        />
      </div>

      {!state.success && state.message && (
        <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
          {state.message}
        </div> 
      )}
      
      <div className="flex justify-end gap-2">
        <Button 
          type="submit" 
          className="min-w-24"
          disabled={isPending}
        >
          {isPending ? submitPendingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
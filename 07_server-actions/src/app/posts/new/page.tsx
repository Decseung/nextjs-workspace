"use client";

import { useActionState } from "react";
import { createPostAction } from "../actions";
import CreateButton from "./CreateButton";

export default function PostCreatePage() {
  // useActionState(액션함수, 초기상태)
  const [state, formAction] = useActionState(createPostAction, {
    success: false,
    message: "",
    errors: {},
  }); // [상태, 액션함수,]

  return (
    <form action={formAction} className="flex flex-col max-w-100 gap-4 m-4">
      {!state.success && state.message && (
        <div className="bg-red-100 text-red-600 rounded">{state.message}</div>
      )}
      <input
        type="text"
        name="title"
        placeholder="제목"
        className="border rounded border-gray-300 p-1 "
        required
      />
      {state.errors?.title && (
        <div className="text-red-500 text-xs">{state.errors.title}</div>
      )}
      <textarea
        name="content"
        placeholder="내용"
        className="border rounded border-gray-300 p-1"
        required
      />
      {state.errors?.content && (
        <div className="text-red-500 text-xs">{state.errors.content}</div>
      )}
      <input
        type="text"
        name="author"
        placeholder="작성자"
        className="border rounded border-gray-300 p-1"
      />
      {state.errors?.author && (
        <div className="text-red-500 text-xs">{state.errors.author}</div>
      )}
      <CreateButton />
    </form>
  );
}

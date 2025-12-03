"use client";
// 기존의 React 방식

import { useState } from "react";
import { CreatePostDto } from "../types";
import { createPost } from "../service";
import { useRouter } from "next/navigation";

export default function PostCreatePage() {
  const router = useRouter();

  const [formData, setFormData] = useState<CreatePostDto>({
    title: "",
    content: "",
    author: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(formData);
    alert("게시글 등록하기 성공");
    setFormData({
      title: "",
      content: "",
      author: "",
    });
    router.push("/posts");
  };
  return (
    <form className="flex flex-col max-w-100 gap-4 m-4">
      <input
        type="text"
        name="title"
        placeholder="제목"
        className="border rounded border-gray-300 p-1 "
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="내용"
        className="border rounded border-gray-300 p-1"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="작성자"
        className="border rounded border-gray-300 p-1"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 rounded text-white mt-2 px-8 py-2"
        onClick={handleSubmit}
      >
        등록
      </button>
    </form>
  );
}

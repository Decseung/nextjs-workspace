"use client";
import { useFormStatus } from "react-dom";

export default function CreateButton() {
  // pending: 액션함수 동작중이면 true, 아니면 false
  const { pending } = useFormStatus(); // {pending: boolean, ...}
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 rounded text-white mt-2 px-8 py-2"
    >
      {pending ? "등록중..." : "등록"}
    </button>
  );
}

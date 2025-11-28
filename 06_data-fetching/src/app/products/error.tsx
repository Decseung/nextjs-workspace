"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  // {error: Error 객체, reset: 함수}

  const router = useRouter();
  const [isPending, startTransuition] = useTransition();

  const handelReset = () => {
    startTransuition(() => {
      router.refresh(); // - 비동기로 동작
      reset(); // => 화면 다시 그리는 함수 - 동기
    });
  };
  return (
    <div className="p-8">
      <p className="text-center text-gray-500 mt-4">
        {error.message || "알 수 없는 오류가 발생했습니다."}
      </p>
      <div className="text-center">
        <button
          className="px-4 py-2 bg-red-500 rounded text-white mt-2 hover:bg-red-700 transition-all cursor-pointer"
          onClick={handelReset}
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}

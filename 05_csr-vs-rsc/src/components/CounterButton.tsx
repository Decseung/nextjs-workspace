"use client";

import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState<number>(0);
  const handleClcick = (): void => {
    setCount((prev) => prev + 1);
  };

  console.log("로그의 실행 위치는?");
  return (
    <button
      className="px-4 py-2 bg-blue-500 rounded text-white"
      onClick={handleClcick}
    >
      카운팅: {count}
    </button>
  );
}

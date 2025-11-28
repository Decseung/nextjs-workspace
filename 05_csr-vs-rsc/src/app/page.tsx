import CounterButton from "@/components/CounterButton";
import Image from "next/image";

// Home 페이지 컴포넌트 == 서버 컴포넌트

export default function Home() {
  console.log("로그의 실행 위치? - 서버");

  //서버에서 생성된 시간
  const time = new Date().toLocaleTimeString(); // 서버측에서 실행
  console.log(time);
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-gray-900">
        Server Component 와 vs Client Component
      </h1>
      <p className="mt-2 text-grey-600">
        현재 이 텍스트는 서버 컴포넌트에서 렌더링된 텍스트 입니다.
      </p>
      <div className="mt-4 p-2 bg-gray-100 rounded text-center font-bold text-purple-700">
        시간 : {time}
      </div>
      <div className="mt-4 text-center">
        <CounterButton />
      </div>
    </div>
  );
}

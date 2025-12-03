import { updatePostAction } from "../../actions";
import { getPostById } from "../../service";

export default async function PostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id); // 조회용 객체 반환 => 수정할 게시글 원글

  // const updatePostActionWithId = updatePostAction.bind(null, id);
  // (this 사용 시 첫번째 인자값으로 사용, 함수 동작 시 전달할 값)

  return (
    <form
      // id 전달하는 방법2. action 함수 bind 사용
      // updatePostAction 함수에 id값이 바인딩(고정)된 상태로 복사
      action={updatePostAction.bind(null, id)}
      className="flex flex-col max-w-160 gap-4 m-4"
    >
      {/* id 전달하는 방법1. 고전적 : input type="hidden" */}
      {/* <input type="hidden" name="id" defaultValue={post.id} /> */}

      <input
        className="border border-gray-400 p-2 mb-2"
        type="text"
        name="title"
        placeholder="제목"
        defaultValue={post.title}
        // 비제어 컴포넌트로 유지하기 위해 defaultValue 사용
        // value 사용 시 제어 컴포넌트가 되어 onChange/onClick 세트로 사용
        required
      />

      <textarea
        className="border border-gray-400 p-2 mb-2"
        name="content"
        placeholder="내용"
        defaultValue={post.content}
      />
      <input
        className="border border-gray-400 p-2 mb-2"
        type="text"
        name="author"
        placeholder="작성자"
        defaultValue={post.author}
        required
      />
      <button
        className="bg-green-800 text-white rounded py-2 px-8 cursor-pointer"
        type="submit"
      >
        수정
      </button>
    </form>
  );
}

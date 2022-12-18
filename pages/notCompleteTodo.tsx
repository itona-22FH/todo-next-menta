import Link from "next/link";

export default function notCompleteTask() {
  return (
    <>
      <h1>未完了タスク</h1>
      <button>
        <Link href="/">新規タスク追加画面へ</Link>
      </button>
    </>
  );
}

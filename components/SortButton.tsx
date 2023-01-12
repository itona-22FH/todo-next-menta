import Link from "next/link";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "./store/atoms/todoListState";
import { sortKeyState } from "./store/atoms/sortKeyState";

export const SortButton = ({
  sortKey,
  text,
  handleDisabled,
}: SortButtonProps) => {
  const todos = useRecoilValue(todoListState);
  const setSortKey = useSetRecoilState(sortKeyState);

  return (
    <button
      disabled={handleDisabled(todos)}
      onClick={() => {
        if (sortKey === "fix") {
          setSortKey("fix");
        } else if (sortKey === "notFix") {
          setSortKey("notFix");
        } else if (sortKey === "all") {
          setSortKey("all");
        }
      }}
    >
      {text}
    </button>
  );
};

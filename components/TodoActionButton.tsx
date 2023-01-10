/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./store/Auth/auth";

export const TodoActionButton = ({
  id,
  handleOnClick,
  handleDisabled,
  text,
}: TodoActionProps) => {
  const todos = useRecoilValue(todoListState);
  return (
    <button
      onClick={() => {
        handleOnClick(id);
      }}
      disabled={handleDisabled(todos)}
    >
      {text}
    </button>
  );
};

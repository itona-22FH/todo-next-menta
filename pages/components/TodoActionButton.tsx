/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState, todoState } from "./store/Auth/auth";

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

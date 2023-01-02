import React from "react";

type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type Props = {
  id: string;
  handleOnClick: (id: string) => void;
  handleDisabled: (todoArray: Todo[]) => boolean;
  text: string;
  todoArray: Todo[];
};

export const TodoActionButton = ({
  id,
  handleOnClick,
  handleDisabled,
  text,
  todoArray,
}: Props) => {
  return (
    <button
      onClick={() => {
        handleOnClick(id);
      }}
      disabled={handleDisabled(todoArray)}
    >
      {text}
    </button>
  );
};

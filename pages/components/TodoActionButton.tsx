import React from "react";

export const TodoActionButton = ({
  id,
  handleOnClick,
  handleDisabled,
  text,
  todoArray,
}: TodoActionProps) => {
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

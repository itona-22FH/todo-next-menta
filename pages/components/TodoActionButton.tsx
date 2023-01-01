import React from "react";

export const TodoActionButton = (props: {
  id: any;
  handleDeleteTodo: any;
  text: any;
}) => {
  const { id, handleDeleteTodo, text } = props;
  return (
    <button
      onClick={() => {
        handleDeleteTodo(id);
      }}
    >
      {text}
    </button>
  );
};

import React, { SetStateAction } from "react";

type Props = {
  todo: string;
  handleFormSubmit: (e: { preventDefault: () => void }) => void;
  handleInputTodo: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
};

export const TodoForm = ({
  todo,
  handleFormSubmit,
  handleInputTodo,
}: Props) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleInputTodo}
      ></input>
      <button type="submit">タスク追加</button>
    </form>
  );
};

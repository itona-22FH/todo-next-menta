import React, { SetStateAction } from "react";

type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type Props = {
  todo: string;
  todoArray: Todo[];
  handleFormSubmit: (e: { preventDefault: () => void }) => void;
  handleInputTodo: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  handleDisabled: (todoArray: Todo[]) => boolean;
};

export const TodoForm = ({
todo,
  todoArray,
  handleFormSubmit,
  handleInputTodo,
  handleDisabled,
}: Props) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleInputTodo}
        disabled={handleDisabled(todoArray)}
      ></input>
      <button type="submit"
      disabled={handleDisabled(todoArray)}>タスク追加</button>
    </form>
  );
};

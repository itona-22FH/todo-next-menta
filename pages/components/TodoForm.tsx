import React, { SetStateAction } from "react";



export const TodoForm = ({
todo,
  todoArray,
  handleFormSubmit,
  handleInputTodo,
  handleDisabled,
}: FormProps) => {
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

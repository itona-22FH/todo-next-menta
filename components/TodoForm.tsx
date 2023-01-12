import React, { SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./store/atoms/todoListState";
import { todoState } from "./store/atoms/todoState";
import { v4 as uuidv4 } from "uuid";

export const TodoForm = ({ handleButtonDisabled }: FormProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [todo, setTodo] = useRecoilState(todoState);

  const handleInputTodo = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTodos([
      { id: uuidv4(), inputText: todo.trim(), edit: false, checked: false },
      ...todos,
    ]);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleInputTodo}
        disabled={handleButtonDisabled(todos)}
      ></input>
      <button type="submit" disabled={handleButtonDisabled(todos)}>
        タスク追加
      </button>
    </form>
  );
};

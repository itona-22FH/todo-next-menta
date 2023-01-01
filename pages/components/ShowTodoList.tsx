import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoActionButton } from "./TodoActionButton";

type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type Props = {
  todoArray: Todo[];
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string, checked: boolean) => void;
  handleEditTodo: (id: string) => void;
  editTodoId: string;
  editTodoText: string;
  setEditTodoText: Dispatch<SetStateAction<string>>;
  setEditTodoId: Dispatch<SetStateAction<string>>;
};

export const ShowTodoList = ({
  todoArray,
  handleDeleteTodo,
  handleCheckTodo,
  handleEditTodo,
  editTodoId,
  editTodoText,
  setEditTodoId,
  setEditTodoText,
}: Props) => {
  return (
    <>
      {todoArray.map((todo) => (
        <li key={todo.id}>
          {todo.inputText}
          {todo.id === editTodoId ? (
            <>
              <input
                type="text"
                placeholder="編集内容を入力"
                value={editTodoText}
                onChange={(e) => setEditTodoText(e.target.value)}
              />
              <TodoActionButton
                id={todo.id}
                handleOnClick={handleEditTodo}
                text="再投稿"
              />
            </>
          ) : (
            <>
              <TodoActionButton
                id={todo.id}
                text="削除"
                handleOnClick={handleDeleteTodo}
              />
              <TodoActionButton
                id={todo.id}
                text="編集"
                handleOnClick={setEditTodoId}
              />
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  handleCheckTodo(todo.id, todo.checked);
                }}
              ></input>
            </>
          )}
        </li>
      ))}
    </>
  );
};

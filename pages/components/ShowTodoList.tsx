import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoActionButton } from "./TodoActionButton";

export const ShowTodoList = ({
  todoArray,
  handleDeleteTodo,
  handleCheckTodo,
  handleUpdateTodo,
  handleEditTodo,
  handleUpdateBtnDisabled,
  handleEditBtnDisabled,
  editTodoText,
  setEditTodoText,
}: ShowTodoListProps) => {
  return (
    <>
      {todoArray.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            disabled={handleEditBtnDisabled(todoArray)}
            onChange={() => {
              handleCheckTodo(todo.id, todo.checked);
            }}
          ></input>
          {todo.inputText}
          {todo.edit ? (
            <>
              <input
                type="text"
                placeholder="編集内容を入力"
                value={editTodoText}
                onChange={(e) => setEditTodoText(e.target.value)}
              />
              <TodoActionButton
                id={todo.id}
                handleOnClick={handleUpdateTodo}
                text="再投稿"
                todoArray={todoArray}
                handleDisabled={handleUpdateBtnDisabled}
              />
            </>
          ) : (
            <>
              <TodoActionButton
                id={todo.id}
                text="削除"
                handleOnClick={handleDeleteTodo}
                todoArray={todoArray}
                handleDisabled={handleEditBtnDisabled}
              />
              <TodoActionButton
                id={todo.id}
                text="編集"
                handleOnClick={handleEditTodo}
                todoArray={todoArray}
                handleDisabled={handleEditBtnDisabled}
              />
            </>
          )}
        </li>
      ))}
    </>
  );
};

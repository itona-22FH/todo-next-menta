/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sortedTodoState,
  todoEditState,
  todoListState,
  sortKeyState,
} from "./store/Auth/auth";
import { TodoActionButton } from "./TodoActionButton";

export const ShowTodoList = ({ handleButtonDisabled }: ShowTodoListProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [sortedTodos, setSortedTodos] = useRecoilState(sortedTodoState);
  const [editTodoText, setEditTodoText] = useRecoilState(todoEditState);
  const sortKey = useRecoilValue(sortKeyState);

  useEffect(() => {
    setSortedTodos(
      todos.filter((todo) => {
        if (sortKey === "all") return todo;
        else if (sortKey === "fix") {
          if (todo.checked) return todo;
        } else if (sortKey === "notFix") {
          if (!todo.checked) return todo;
        }
      })
    );
  }, [todos, sortKey]);

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleCheckTodo = (id: string, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          inputText: todo.inputText,
          checked: !checked,
          edit: todo.edit,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleUpdateTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          inputText: editTodoText,
          edit: false,
          checked: todo.checked,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    setEditTodoText("");
  };

  const handleEditTodo = (id: string) => {
    setTodos((prevState) =>
      prevState.map((prevTodo) =>
        prevTodo.id === id
          ? {
              id: prevTodo.id,
              inputText: prevTodo.inputText,
              edit: true,
              checked: prevTodo.checked,
            }
          : prevTodo
      )
    );
  };

  const handleUpdateBtnDisabled = () => {
    return editTodoText === "";
  };

  return (
    <>
      {sortedTodos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            disabled={handleButtonDisabled(sortedTodos)}
            onChange={() => {
              handleCheckTodo(todo.id, todo.checked);
            }}
          />
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
                todoArray={sortedTodos}
                handleDisabled={handleUpdateBtnDisabled}
              />
            </>
          ) : (
            <>
              <TodoActionButton
                id={todo.id}
                text="削除"
                handleOnClick={handleDeleteTodo}
                todoArray={sortedTodos}
                handleDisabled={handleButtonDisabled}
              />
              <TodoActionButton
                id={todo.id}
                text="編集"
                handleOnClick={handleEditTodo}
                todoArray={sortedTodos}
                handleDisabled={handleButtonDisabled}
              />
            </>
          )}
        </li>
      ))}
    </>
  );
};

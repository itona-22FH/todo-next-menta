import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./store/Auth/auth";
import { TodoActionButton } from "./TodoActionButton";

export const ShowTodoList = ({ handleButtonDisabled }: ShowTodoListProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editTodoText, setEditTodoText] = useState("");

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
        todo.checked = !checked;
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
    console.log(todos);
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
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            disabled={handleButtonDisabled(todos)}
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
                todoArray={todos}
                handleDisabled={handleUpdateBtnDisabled}
              />
            </>
          ) : (
            <>
              <TodoActionButton
                id={todo.id}
                text="削除"
                handleOnClick={handleDeleteTodo}
                todoArray={todos}
                handleDisabled={handleButtonDisabled}
              />
              <TodoActionButton
                id={todo.id}
                text="編集"
                handleOnClick={handleEditTodo}
                todoArray={todos}
                handleDisabled={handleButtonDisabled}
              />
            </>
          )}
        </li>
      ))}
    </>
  );
};

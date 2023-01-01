import React from "react";
import { TodoActionButton } from "./TodoActionButton";

export const ShowTodoList = (props: {
  todoArray: any;
  handleDeleteTodo: any;
  handleOnCheck: any;
  setEditId: any;
}) => {
  const { todoArray, handleDeleteTodo, handleOnCheck, setEditId } = props;
  return (
    <>
      {todoArray.map(
        (todo: {
          id: React.Key | null | undefined;
          inputText:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          checked: boolean | undefined;
        }) => {
          return (
            <li key={todo.id}>
              {todo.inputText}
              <TodoActionButton
                id={todo.id}
                text="削除"
                handle={handleDeleteTodo}
              />
              <TodoActionButton id={todo.id} text="編集" handle={setEditId} />
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  handleOnCheck(todo.id, todo.checked);
                }}
              ></input>
            </li>
          );
        }
      )}
    </>
  );
};

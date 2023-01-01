import React from "react";

export const ShowTodoList = (props: {
  todoList: any;
  handleDeleteTodo: any;
  handleOnCheck: any;
}) => {
  const { todoList, handleDeleteTodo, handleOnCheck } = props;
  return (
    <>
      {todoList.map(
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
              <button
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              >
                削除
              </button>
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

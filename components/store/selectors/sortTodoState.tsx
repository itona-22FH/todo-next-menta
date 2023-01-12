/* eslint-disable react-hooks/rules-of-hooks */
import { errorSelector, selector, useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";
import { sortKeyState } from "../atoms/sortKeyState";

export const sortTodoState = selector({
  key: "sortTodoState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const sortKey = get(sortKeyState);

    if (typeof todoList === "undefined") {
      return errorSelector("todoListが未定義です");
    } else {
      if (sortKey === "all") {
        return todoList;
      } else if (sortKey === "fix") {
        return todoList.filter((todo) => {
          if (todo.checked) return todo;
        });
      } else if (sortKey === "notFix")
        return todoList.filter((todo) => {
          if (!todo.checked) return todo;
        });
    }
  },
});

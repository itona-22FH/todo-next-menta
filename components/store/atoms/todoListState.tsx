import { atom } from "recoil";

export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: [],
  });
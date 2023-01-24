/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoEditState } from "./store/atoms/todoEditState";
import { todoListState } from "./store/atoms/todoListState";
import { sortTodoState } from "./store/selectors/sortTodoState";
import { TodoActionButton } from "./TodoActionButton";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { ListItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  collection,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const ShowTodoList = ({ handleButtonDisabled }: ShowTodoListProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editTodoText, setEditTodoText] = useRecoilState(todoEditState);
  const todoList = useRecoilValue(sortTodoState);

  useEffect(() => {
    const q = query(
      collection(db, "next-todo-menta"),
      orderBy("createData", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docTodos: Todo[] = [];
      querySnapshot.forEach((doc) => {
        docTodos.push({ ...(doc.data() as Todo), id: doc.id });
      });
      setTodos(docTodos);
    });
    return () => unsubscribe();
  }, []);

  const handleDeleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "next-todo-menta", id));
  };

  const handleCheckTodo = async (id: string, checked: boolean) => {
    const docTodo = doc(db, "next-todo-menta", id);
    await updateDoc(docTodo, {
      checked: !checked,
    });
  };

  const handleUpdateTodo = async (id: string, edit: boolean) => {
    const docTodo = doc(db, "next-todo-menta", id);
    await updateDoc(docTodo, {
      edit: !edit,
      text: editTodoText,
    });
  };

  const handleEditTodo = async (id: string, edit: boolean) => {
    const docTodo = doc(db, "next-todo-menta", id);
    await updateDoc(docTodo, {
      edit: !edit,
    });
  };

  const handleUpdateBtnDisabled = () => {
    return editTodoText === "";
  };

  return (
    <>
      {todoList?.map((todo: Todo) => (
        <ListItem key={todo.id} mb={1}>
          <Checkbox
            colorScheme="cyan"
            mt={2}
            mr={2}
            isChecked={todo.checked}
            isDisabled={handleButtonDisabled(todos)}
            onChange={() => {
              handleCheckTodo(todo.id, todo.checked);
            }}
          />
          {todo.text}
          {todo.edit ? (
            <>
              <form style={{ display: "inline-flex" }}>
                <Input
                  type="text"
                  placeholder="編集内容を入力"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                  size="cs"
                  focusBorderColor="Green"
                  ml={2}
                />
                <TodoActionButton
                  id={todo.id}
                  edit={todo.edit}
                  handleOnClick={handleUpdateTodo}
                  text={<CheckIcon />}
                  todoArray={todos}
                  handleDisabled={handleUpdateBtnDisabled}
                  btnBgColor={"Green"}
                />
              </form>
            </>
          ) : (
            <>
              <TodoActionButton
                id={todo.id}
                edit={todo.edit}
                text={<DeleteIcon />}
                btnBgColor={"red"}
                handleOnClick={handleDeleteTodo}
                todoArray={todos}
                handleDisabled={handleButtonDisabled}
              />
              <TodoActionButton
                id={todo.id}
                edit={todo.edit}
                text={<EditIcon />}
                btnBgColor={"Green"}
                handleOnClick={handleEditTodo}
                todoArray={todos}
                handleDisabled={handleButtonDisabled}
              />
            </>
          )}
        </ListItem>
      ))}
    </>
  );
};

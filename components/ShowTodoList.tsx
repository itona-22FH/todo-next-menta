import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoEditState } from "./store/atoms/todoEditState";
import { todoListState } from "./store/atoms/todoListState";
import { sortTodoState } from "./store/selectors/sortTodoState";
import { TodoActionButton } from "./TodoActionButton";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { ListItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "next-todo-menta"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error(e);
  }
})();

export const ShowTodoList = ({ handleButtonDisabled }: ShowTodoListProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editTodoText, setEditTodoText] = useRecoilState(todoEditState);
  const todoList = useRecoilValue(sortTodoState);

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
          {todo.inputText}
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
                text={<DeleteIcon />}
                btnBgColor={"red"}
                handleOnClick={handleDeleteTodo}
                todoArray={todos}
                handleDisabled={handleButtonDisabled}
              />
              <TodoActionButton
                id={todo.id}
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

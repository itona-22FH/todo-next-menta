import React, { SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./store/atoms/todoListState";
import { todoState } from "./store/atoms/todoState";
import { v4 as uuidv4 } from "uuid";
import { Box, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const TodoForm = ({ handleButtonDisabled }: FormProps) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [todo, setTodo] = useRecoilState(todoState);

  const handleInputTodo = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    (async () => {
      try {
        const docRef = await addDoc(collection(db, "next-todo-menta"), {
          text: todo,
          checked: false,
          edit: false,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })();
    setTodos([
      { id: uuidv4(), inputText: todo.trim(), edit: false, checked: false },
      ...todos,
    ]);
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "inline-flex", marginBottom: 20 }}
      >
        <Input
          type="text"
          value={todo}
          name="todo"
          onChange={handleInputTodo}
          disabled={handleButtonDisabled(todos)}
          size="ms"
          focusBorderColor="Blue"
          mr={2}
        ></Input>
        <Box
          as="button"
          type="submit"
          disabled={handleButtonDisabled(todos)}
          borderRadius="md"
          bg="Blue"
          color="White"
          fontSize={10}
          px={4}
          h={8}
        >
          <AddIcon />
        </Box>
      </form>
    </div>
  );
};

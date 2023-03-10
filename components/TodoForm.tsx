import React, { SetStateAction } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "./store/atoms/todoListState";
import { todoState } from "./store/atoms/todoState";
import { Box, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import db from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const TodoForm = ({ handleButtonDisabled }: FormProps) => {
  const todos = useRecoilValue(todoListState);
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
          createData: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })();
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
          bg={handleButtonDisabled(todos) ? "Gray" : "Blue"}
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

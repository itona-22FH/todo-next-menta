/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./store/atoms/todoListState";
import { Box } from "@chakra-ui/react";

export const TodoActionButton = ({
  id,
  handleOnClick,
  handleDisabled,
  text,
  btnBgColor,
  edit,
}: TodoActionProps) => {
  const todos = useRecoilValue(todoListState);

  const changeColor = () => {
    todos.some((todo) => {
      todo.edit
    });
  };

  return (
    <Box
      as="button"
      borderRadius="md"
      bg={handleDisabled(todos)?"Gray":btnBgColor}
      color="white"
      px={2}
      h={8}
      ml={3}
      onClick={() => {
        handleOnClick(id, edit);
      }}
      disabled={handleDisabled(todos)}
    >
      {text}
    </Box>
  );
};

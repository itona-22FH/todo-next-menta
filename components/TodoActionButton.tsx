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
}: TodoActionProps) => {
  const todos = useRecoilValue(todoListState);
  return (
    <Box
      as="button"
      borderRadius="md"
      bg={btnBgColor}
      color="white"
      px={2}
      h={8}
      ml={3}
      onClick={() => {
        handleOnClick(id);
      }}
      disabled={handleDisabled(todos)}
    >
      {text}
    </Box>
  );
};

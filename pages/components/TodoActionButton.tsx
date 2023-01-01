import React from "react";

type Props = {
  id: string;
  handleOnClick: (id: string) => void;
  text: string;
};

export const TodoActionButton = ({ id, handleOnClick, text }: Props) => {
  return (
    <button
      onClick={() => {
        handleOnClick(id);
      }}
    >
      {text}
    </button>
  );
};

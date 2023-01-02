import Link from "next/link";
import React from "react";

type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type Props = {
  url: string;
  text: string;
  todoArray: Todo[];
  handleDisabled: (todoArray: Todo[]) => boolean;
};
export const LinkButton = ({ url, text, todoArray, handleDisabled }: Props) => {
  return (
    <button disabled={handleDisabled(todoArray)}>
      <Link href={url}>{text}</Link>
    </button>
  );
};

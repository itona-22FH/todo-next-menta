import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./store/Auth/auth";

export const LinkButton = ({ url, text, handleDisabled }: LinkButtonProps) => {
  const todos = useRecoilValue(todoListState);
  return (
    <button disabled={handleDisabled(todos)}>
      <Link href={url}>{text}</Link>
    </button>
  );
};

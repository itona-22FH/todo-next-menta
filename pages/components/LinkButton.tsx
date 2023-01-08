import Link from "next/link";
import React from "react";

export const LinkButton = ({ url, text, todoArray, handleDisabled }: LinkButtonProps) => {
  return (
    <button disabled={handleDisabled(todoArray)}>
      <Link href={url}>{text}</Link>
    </button>
  );
};

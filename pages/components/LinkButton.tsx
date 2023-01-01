import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  text: string;
};
export const LinkButton = ({ url, text }: Props) => {
  return (
    <button>
      <Link href={url}>{text}</Link>
    </button>
  );
};

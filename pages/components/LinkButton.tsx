import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

export const LinkButton = (props: { url: string; text: string }) => {
  const { url, text } = props;
  return (
    <button>
      <Link href={url}>{text}</Link>
    </button>
  );
};

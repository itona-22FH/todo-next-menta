import React from "react";

export const TodoActionButton = (props: {
  id: any;
  handle: any;
  text: any;
}) => {
  const { id, handle, text} = props;
  return (
    <button
      onClick={() => {
        handle(id);
      }}
    >
      {text}
    </button>
  );
};

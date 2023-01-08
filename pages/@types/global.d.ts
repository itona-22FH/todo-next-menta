type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type FormProps = {
  todo: string;
  todoArray: Todo[];
  handleFormSubmit: (e: { preventDefault: () => void }) => void;
  handleInputTodo: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  handleDisabled: (todoArray: Todo[]) => boolean;
};

type ShowTodoListProps = {
  todoArray: Todo[];
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string, checked: boolean) => void;
  handleUpdateTodo: (id: string) => void;
  handleEditTodo: (id: string) => void;
  handleUpdateBtnDisabled: (todoArray: Todo[]) => boolean;
  handleEditBtnDisabled: (todoArray: Todo[]) => boolean;
  editTodoText: string;
  setEditTodoText: Dispatch<SetStateAction<string>>;
};

type LinkButtonProps = {
  url: string;
  text: string;
  todoArray: Todo[];
  handleDisabled: (todoArray: Todo[]) => boolean;
};

type TodoActionProps = {
  id: string;
  handleOnClick: (id: string) => void;
  handleDisabled: (todoArray: Todo[]) => boolean;
  text: string;
  todoArray: Todo[];
};

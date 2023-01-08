type Todo = {
  inputText: string;
  id: string;
  checked: boolean;
  edit: boolean;
};

type FormProps = {
  handleButtonDisabled: (todoArray: Todo[]) => boolean;
};

type ShowTodoListProps = {
  handleButtonDisabled: (todoArray: Todo[]) => boolean;
};

type LinkButtonProps = {
  url: string;
  text: string;
  handleDisabled: (todoArray: Todo[]) => boolean;
};

type TodoActionProps = {
  id: string;
  handleOnClick: (id: string) => void;
  handleDisabled: (todoArray: Todo[]) => boolean;
  text: string;
  todoArray: Todo[];
};

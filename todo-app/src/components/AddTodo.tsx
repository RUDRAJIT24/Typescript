import { useState, type ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [text, setText] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAddTodo(text);
    setText("")
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex items-center gap-5">
        <Input
          onChange={changeHandler}
          type="text"
          value={text}
          placeholder="Write a new todo"
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </>
  );
};

export default AddTodo;

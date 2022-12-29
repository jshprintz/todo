import TodoStore from "../../stores/TodoStore";
import { ChangeEvent, useState } from "react";

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
    </>
  );
};

export default TodoInput;

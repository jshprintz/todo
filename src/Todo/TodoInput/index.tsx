import TodoStore from "../../stores/TodoStore";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

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
    <InputWrapper>
      <input value={newTodo} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>ADD</Button>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 5px;
  margin-top: 10vh;
`;

const Button = styled.button`
  height: 5vh;
  width: 8vw;

  background-color: pink;
`;

export default TodoInput;

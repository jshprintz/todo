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
      <Input value={newTodo} onChange={handleInputChange} />
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

const Input = styled.input `
  border: 2px solid limegreen;
  box-shadow: 0 0 10px grey;
  border-radius: 5px;

  margin: 5px;
`

const Button = styled.button`
  height: 5vh;
  width: 8vw;

  background-color: pink;
  margin: 5px;
  cursor: pointer;

  &:hover{
    background-color: limegreen;
    animation: shadow .5s linear infinite;
    box-shadow: 0 0 10px grey;

    @keyframes shadow {
      0% {box-shadow: 0 0 0px green}
      100% {box-shadow: 0 0 50px green}
    }
  }
`;

export default TodoInput;

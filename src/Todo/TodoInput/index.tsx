import { FormEvent } from "react";
import styled from "styled-components";
import { useStore } from "../../stores";

const TodoInput = () => {
  const {todos} = useStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    const value = String(formData.get("todo-input") || "");
    todos.add(value);
    formElement.reset();
  };

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <Input name="todo-input" placeholder="Add todo..."/>
      <Button type="submit">ADD</Button>
    </InputWrapper>
  );
};

const InputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 5px;
  margin-top: 10vh;
`;

const Input = styled.input`
  border: 2px solid limegreen;
  box-shadow: 0 0 10px grey;
  border-radius: 5px;

  margin: 5px;
`;

const Button = styled.button`
  height: 5vh;
  width: 8vw;

  background-color: pink;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: limegreen;
    animation: shadow 0.5s linear infinite;
    box-shadow: 0 0 10px grey;

    @keyframes shadow {
      0% {
        box-shadow: 0 0 0px green;
      }
      100% {
        box-shadow: 0 0 50px green;
      }
    }
  }
`;

export default TodoInput;

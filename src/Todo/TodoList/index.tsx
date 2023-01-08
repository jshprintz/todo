import { Todo } from "../../stores/TodoStore";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStore } from "../../stores";

const TodoList = () => {
const {todos} = useStore();

  const handleToggleTodo = (t: Todo) => () => {
    todos.toggle(t);
  };

  const removeToggleTodo = (t: Todo) => () => {
    todos.toggle(t);
  };

  return (
    <UnList>
      {todos.list.map((t) => (
        <LiItems key={t.id}>
          <Label htmlFor={String(t.id)}>{t.title}</Label>

          <Button onClick={removeToggleTodo(t)}>REMOVE</Button>

          <Button onClick={handleToggleTodo(t)}>
            <input type="checkbox" id={String(t.id)} readOnly tabIndex={-1} />
          </Button>
        </LiItems>
      ))}
    </UnList>
  );
};

const UnList = styled.ul`
  display: grid;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  margin-top: 5rem;
`;

const LiItems = styled.li`
  box-shadow: 0 0 10px brown;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Label = styled.label`
  flex-grow: 1;
`;

const Button = styled.button`
  border: noen;
  background-color: transparent;
`;

export default observer(TodoList);

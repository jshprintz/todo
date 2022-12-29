import TodoStore from "../../stores/TodoStore";
import { observer } from "mobx-react-lite"

const TodoList = ({ todos }: { todos: TodoStore }) => {
  return (
    <ul>
      {todos.list.map((t) => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
};

export default observer(TodoList);

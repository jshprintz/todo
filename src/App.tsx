import TodoInput from "./Todo/TodoInput";
import TodoList from "./Todo/TodoList";
import TodoStore from "./stores/TodoStore";

const todos = new TodoStore();

const App = () => {
  return <div>
    <TodoInput todos={todos}/>
    <TodoList todos={todos}/>
  </div>;
}

export default App;

import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosProvider from "./TodosContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-header">
          <h1>What is your plan for today?</h1>
        </div>
        <div className="container-body">
          <TodosProvider>
            <NewTodo />
            <Todos />
          </TodosProvider>
        </div>
        <p className="made-by">Made by React.js</p>
      </div>
    </div>
  );
}

export default App;

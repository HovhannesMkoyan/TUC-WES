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
        <div class="made-by-container">
          <p>Created using React.js</p>
          <a href="http://localhost:8080">Switch to Svelte app</a>
        </div>
      </div>
    </div>
  );
}

export default App;

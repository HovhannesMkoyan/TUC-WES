import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import Context from "./Context";
import "./App.css";

function App() {
  return (
    <Context>
      <div className="App">
        <div className="container">
          <div className="container-header">
            <h1>What is your plan for today?</h1>
          </div>
          <div className="container-body">
            <NewTodo />
            <Todos />
          </div>
        </div>
      </div>
    </Context>
  );
}

export default App;

import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { StateContext } from "../../Context";
import { addTodo } from "../../services/storage";
import "./NewTodo.css";

export default function NewTodo() {
  const [todo, setTodo] = useState("");
  const { state, setState } = useContext(StateContext);

  const add = (todo) => {
    if (todo) {
      const todoObj = {
        id: Date.now(),
        text: todo,
        completed: false,
      };

      setState({
        ...state,
        todos: state.todos.push(todoObj),
      });

      return addTodo(todoObj);
    }
  };

  console.log(state.todos);

  return (
    <div className="newtodo-container">
      <input
        type="text"
        placeholder="I will buy groceries today"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="add-btn" onClick={() => add(todo)}>
        <FontAwesomeIcon icon={faSquarePlus} />
        <span>Add</span>
      </div>
    </div>
  );
}

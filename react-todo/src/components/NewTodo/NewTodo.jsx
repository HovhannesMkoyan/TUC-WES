import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { TodosContext } from "../../TodosContext";
import "./NewTodo.css";

export default function NewTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodosContext);

  return (
    <div className="newtodo-container">
      <input
        type="text"
        placeholder="I will buy groceries today"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="add-btn" onClick={() => addTodo(todo)}>
        <FontAwesomeIcon icon={faSquarePlus} />
        <span>Add</span>
      </div>
    </div>
  );
}

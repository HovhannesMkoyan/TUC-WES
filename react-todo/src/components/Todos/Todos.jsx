import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFull,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { TodosContext } from "../../TodosContext";
import "./Todos.css";

export default function Todos() {
  const { todos, markTodoAsCompleted, deleteTodo } = useContext(TodosContext);

  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <div key={index} className="todo-container">
          <div>
            <FontAwesomeIcon icon={faSquareFull} size="xs" />
            <span className={`${todo.completed && "todo-completed"}`}>
              {todo.text}
            </span>
          </div>
          <div className="todo-actions-container">
            {!todo.completed && (
              <FontAwesomeIcon
                icon={faCheck}
                size="xs"
                onClick={() => markTodoAsCompleted(todo.id)}
                style={{ marginRight: "6px" }}
              />
            )}
            <FontAwesomeIcon
              icon={faTrash}
              size="xs"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

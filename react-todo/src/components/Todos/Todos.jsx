import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import { StateContext } from "../../Context";
import "./Todos.css";

export default function Todos() {
  const [items, setItems] = useState([])
  const { state } = useContext(StateContext);
  const todos = state.todos;
  console.log(todos);

  useEffect(() => {
    setItems(todos);
  }, [state])
  
  return (
    <div className="todos-container">
      {
        items.map((todo) => (
          <div className="todo-container">
            <div>
              <FontAwesomeIcon icon={faSquareFull} size="xs" />
              <span>{todo.text}</span>
            </div>
            <div className="todo-actions-container">
              <FontAwesomeIcon icon={faCheck} size="xs" />
              <FontAwesomeIcon icon={faTrash} size="xs" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

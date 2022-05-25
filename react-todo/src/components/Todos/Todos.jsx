import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

import "./Todos.css";

export default function Todos() {
  return (
    <div className="todos-container">
      <div className="todo-container">
        <div>
          <FontAwesomeIcon icon={faSquareFull} size="xs" />
          <span>Make a cup of cofee</span>
        </div>
        <div className="todo-actions-container">
          <FontAwesomeIcon icon={faCheck} size="xs" />
          <FontAwesomeIcon icon={faTrash} size="xs" />
        </div>
      </div>
      <div className="todo-container">
        <div>
          <FontAwesomeIcon icon={faSquareFull} size="xs" />
          <span>Make a cup of cofee</span>
        </div>
        <div className="todo-actions-container">
          <FontAwesomeIcon icon={faCheck} size="xs" />
          <FontAwesomeIcon icon={faTrash} size="xs" />
        </div>
      </div>
    </div>
  )
}

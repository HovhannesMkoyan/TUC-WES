import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

import "./NewTodo.css";

export default function NewTodo() {
  return (
    <div className="newtodo-container">
        <input type="text" placeholder="I will buy groceries today" />
        <div className="add-btn">
            <FontAwesomeIcon icon={faSquarePlus} />
            <span>Add</span>
        </div>
    </div>
  )
}

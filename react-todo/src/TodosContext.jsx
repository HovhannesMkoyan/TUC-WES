import { useState, createContext, useEffect, useMemo } from "react";

export const TodosContext = createContext();

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([]);
  const todosInLS = localStorage.getItem("todos");

  useEffect(() => {
    if (todosInLS) {
      setTodos(JSON.parse(todosInLS));
    }
  }, []);

  const addTodo = (todo) => {
    if (todo) {
      const todoObj = {
        id: Date.now(),
        text: todo,
        completed: false,
      };
      setTodos((prevState) => [...prevState, todoObj]);

      if (todosInLS) {
        const todosArr = JSON.parse(todosInLS);
        todosArr.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todosArr));
      } else {
        localStorage.setItem("todos", JSON.stringify([todoObj]));
      }
    }
  }

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}

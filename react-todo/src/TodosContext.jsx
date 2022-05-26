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

      // Update state
      setTodos((prevState) => [...prevState, todoObj]);

      // Update LS
      if (todosInLS) {
        const todosArr = JSON.parse(todosInLS);
        todosArr.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todosArr));
      } else {
        localStorage.setItem("todos", JSON.stringify([todoObj]));
      }
    }
  };

  const deleteTodo = (id) => {
    const todosArr = JSON.parse(todosInLS);
    const indexOfTodo = todosArr.findIndex((todo) => {
      return todo.id === id;
    });
    todosArr.splice(indexOfTodo, 1);

    // Update state
    setTodos(todosArr);

    // Update LS
    localStorage.setItem("todos", JSON.stringify(todosArr));
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodo, deleteTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}

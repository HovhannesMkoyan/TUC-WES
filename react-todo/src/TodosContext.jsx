import { useState, createContext, useEffect } from "react";

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
    if (todo.length !== 0) {
      const todoObj = {
        id: Date.now() + Math.floor(Math.random() * 100),
        text: todo,
        completed: false,
      };

      // Update state
      setTodos((prevState) => [...prevState, todoObj]);

      // Update LS
      if (todos.length === 0) {
        localStorage.setItem("todos", JSON.stringify([todoObj]));
      } else {
        const todosArr = JSON.parse(todosInLS);
        todosArr.push(todoObj);
        localStorage.setItem("todos", JSON.stringify(todosArr));
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

  const markTodoAsCompleted = (id) => {
    const todosArr = JSON.parse(todosInLS);
    const indexOfTodo = todosArr.findIndex((todo) => {
      return todo.id === id;
    });
    todosArr[indexOfTodo].completed = true;

    // Update state
    setTodos(todosArr);

    // Update LS
    localStorage.setItem("todos", JSON.stringify(todosArr));
  };

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, addTodo, markTodoAsCompleted, deleteTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

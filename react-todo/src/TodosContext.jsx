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

  const addTest = async () => {
    return new Promise((resolve, _) => {
      let arr = [];
      for (let run = 1; run <= 10000; run++) {
        const todoObj = {
          id: Date.now() + Math.floor(Math.random() * 100),
          text: `Todo # ${run}`,
          completed: false,
        };

        arr.push(todoObj);
      }
      setTodos(arr);

      resolve();
    });
  };

  const updateTest = async (todos) => {
    return new Promise((resolve, _) => {
      const updated = todos.map((todo) =>
        Object.assign(todo, { text: `Updated ${todo.text}` })
      );
      setTodos(updated);

      resolve();
    });
  };

  const removeTest = async (todos) => {
    return new Promise((resolve, _) => {
      const emptyArr = todos.filter((todo) => !todo);

      setTodos(emptyArr);
      resolve();
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        markTodoAsCompleted,
        deleteTodo,
        addTest,
        updateTest,
        removeTest,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

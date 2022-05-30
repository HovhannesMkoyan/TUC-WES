import { writable } from "svelte/store";

let todosArr = [];
const todosInLS = localStorage.getItem("todos");
if (todosInLS) {
  todosArr = JSON.parse(todosInLS);
}

export const TodosStore = writable(todosArr);

export const addTodo = (todo) => {
  if (todo.length !== 0) {
    const todoObj = {
      id: Date.now() + Math.floor(Math.random() * 100),
      text: todo,
      completed: false,
    };

    // Update state
    TodosStore.update((prevArr) => [...prevArr, todoObj]);

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

export const deleteTodo = (id) => {
  const todosArr = JSON.parse(todosInLS);
  const indexOfTodo = todosArr.findIndex((todo) => {
    return todo.id === id;
  });
  todosArr.splice(indexOfTodo, 1);

  // Update state
  TodosStore.set(todosArr);

  // Update LS
  localStorage.setItem("todos", JSON.stringify(todosArr));
};

export const markTodoAsCompleted = (id) => {
  const todosArr = JSON.parse(todosInLS);
  const indexOfTodo = todosArr.findIndex((todo) => {
    return todo.id === id;
  });
  todosArr[indexOfTodo].completed = true;

  // Update state
  TodosStore.set(todosArr);

  // Update LS
  localStorage.setItem("todos", JSON.stringify(todosArr));
};

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

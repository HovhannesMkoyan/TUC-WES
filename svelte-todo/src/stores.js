import { writable, get } from "svelte/store";

let todosArr = [];
const todosInLS = localStorage.getItem("todos");
const parsedTodos = JSON.parse(todosInLS) || [];
if (todosInLS) {
  todosArr = parsedTodos;
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
    TodosStore.update((prevArr) => {
      return [...prevArr, todoObj];
    });

    // Update LS
    if (get(TodosStore).length === 0) {
      localStorage.setItem("todos", JSON.stringify([todoObj]));
    } else {
      todosArr.push(todoObj);
      localStorage.setItem("todos", JSON.stringify(todosArr));
    }
  }
};

export const deleteTodo = (id) => {
  todosArr.splice(
    todosArr.findIndex((todo) => todo.id === id),
    1
  );

  // Update state
  TodosStore.set(todosArr);

  // Update LS
  localStorage.setItem("todos", JSON.stringify(todosArr));
};

export const markTodoAsCompleted = (id) => {
  const indexOfTodo = todosArr.findIndex((todo) => {
    return todo.id === id;
  });
  todosArr[indexOfTodo].completed = true;

  // Update state
  TodosStore.set(todosArr);

  // Update LS
  localStorage.setItem("todos", JSON.stringify(todosArr));
};

export const addTest = async () => {
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

    TodosStore.update(() => arr);

    resolve();
  });
};

export const updateTest = async (todos) => {
  return new Promise((resolve, _) => {
    const updated = todos.map((todo) =>
      Object.assign(todo, { text: `Updated ${todo.text}` })
    );
    TodosStore.update(() => updated);

    resolve();
  });
};

export const removeTest = async (todos) => {
  return new Promise((resolve, _) => {
    const emptyArr = todos.filter((todo) => !todo);

    TodosStore.update(() => emptyArr);
    resolve();
  });
};

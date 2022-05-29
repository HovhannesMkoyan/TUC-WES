import { writable } from 'svelte/store';

let todosArr = [{
    id: 1221,
    text: "asala",
    completed: false
}];
const todosInLS = localStorage.getItem("todos");
if (todosInLS) {
    todosArr = JSON.parse(todosInLS);
}

export const TodosStore = writable(todosArr);

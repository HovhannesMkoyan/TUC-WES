export const addTodo = async (todoObj) => {
  const todos = localStorage.getItem("todos");

  if (todos) {
    const todosArr = JSON.parse(todos);
    todosArr.push(todoObj);
    localStorage.setItem("todos", JSON.stringify(todosArr));
  } else {
    localStorage.setItem("todos", JSON.stringify([todoObj]));
  }
};

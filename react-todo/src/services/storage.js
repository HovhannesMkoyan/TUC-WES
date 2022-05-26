export const addTodo = async (todo) => {
    if (todo) {
        const todoObj = {
            id: Date.now(),
            text: todo,
            completed: false,
        }
        const todos = localStorage.getItem("todos");

        if (todos) {
            const todosArr = JSON.parse(todos);
            todosArr.push(todoObj);
            localStorage.setItem("todos", JSON.stringify(todosArr));
        } else {
            localStorage.setItem("todos", JSON.stringify([todoObj]));
        }
    }
};
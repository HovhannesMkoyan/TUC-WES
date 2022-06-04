<script>
  import Fa from "svelte-fa";
  import {
    faSquareFull,
    faCheck,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { TodosStore, deleteTodo, markTodoAsCompleted } from "../stores";

  let todos = [];
  TodosStore.subscribe((data) => (todos = data));
</script>

<div class="todos-container">
  {#each todos as todo (todo.id)}
    <div class="todo-container">
      <div>
        <Fa icon={faSquareFull} size="xs" />
        <span class={`${todo.completed && "todo-completed"}`}>
          {todo.text}
        </span>
      </div>
      <div class="todo-actions-container">
        {#if todo.completed === false}
          <div on:click={() => markTodoAsCompleted(todo.id)}>
            <Fa icon={faCheck} size="10x" />
          </div>
        {/if}
        <div on:click={() => deleteTodo(todo.id)}>
          <Fa icon={faTrash} size="10x" />
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .todos-container {
    width: 77%;
    height: 270px;
    margin: 50px 0;
    overflow: auto;
  }

  .todo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1da1f2;
    padding: 5px 15px;
    transition: background-color 0.1s linear;
    -webkit-transition: background-color 0.1s linear;
    -moz-transition: background-color 0.1s linear;
    -ms-transition: background-color 0.1s linear;
    -o-transition: background-color 0.1s linear;
  }

  .todo-container:hover {
    background: rgb(29 161 242 / 7%);
  }

  .todo-container > div:first-child {
    display: flex;
    align-items: center;
  }

  .todo-container > div:first-child span {
    margin-left: 10px;
  }

  .todo-actions-container {
    display: flex;
  }

  .todo-completed {
    text-decoration: line-through;
  }
</style>

<script>
  import Fa from "svelte-fa";
  import {
    faSquareFull,
    faCheck,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { TodosStore } from "../stores";

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
          <Fa icon={faCheck} size="10x" />
        {/if}
        <Fa icon={faTrash} size="10x" />
      </div>
    </div>
  {/each}
</div>

<style>
  .todos-container {
    width: 77%;
    margin-top: 30px;
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

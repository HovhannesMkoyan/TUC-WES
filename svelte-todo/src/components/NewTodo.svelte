<script>
  import { get } from "svelte/store";
  import Fa from "svelte-fa";
  import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
  import { TodosStore, addTodo } from "../stores";

  let todo = "";
</script>

<div class="newtodo-container">
  <input type="text" placeholder="What you plan do to?" bind:value={todo} />
  <div class="add-btn" on:click={() => addTodo(todo)}>
    <Fa icon={faSquarePlus} scale={1.38} />
    <span>Add</span>
  </div>
</div>

<style>
  .newtodo-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    color: #1da1f2;
  }

  .newtodo-container input {
    width: 79%;
    border: 1px solid #1da1f2;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 16px;
    outline: none;
  }

  .add-btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 21.5px;
    background: rgba(29, 161, 242, 0.17);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .add-btn > span {
    margin-left: 0.75rem;
  }
</style>

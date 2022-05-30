<script>
  import NewTodo from "./components/NewTodo.svelte";
  import Todos from "./components/Todos.svelte";
</script>

<main>
  <div class="App">
    <div class="container">
      <div class="container-header">
        <h1>What is your plan for today?</h1>
      </div>
      <div class="container-body">
        <NewTodo />
        <Todos />
      </div>
      <div class="made-by-container">
        <p>Made by Svelte</p>
        <a href="http://localhost:3000">Switch to React.js app</a>
      </div>
    </div>
  </div>
</main>

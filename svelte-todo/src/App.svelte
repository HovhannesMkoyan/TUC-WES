<script>
  import NewTodo from "./components/NewTodo.svelte";
  import Todos from "./components/Todos.svelte";
  import AdditionTesting from "./components/Tests/AdditionTesting.svelte";
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
        <div class="tests-container">
          <AdditionTesting />
          <!-- <UpdateTesting />
          <RemovalTesting /> -->
        </div>
      </div>
      <div class="made-by-container">
        <p>Created using Svelte</p>
        <a href="http://localhost:3000">Switch to React.js app</a>
      </div>
    </div>
  </div>
</main>

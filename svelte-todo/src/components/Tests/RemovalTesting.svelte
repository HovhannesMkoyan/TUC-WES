<script>
  import { TodosStore, removeTest } from "../../stores";

  let todos = [];
  TodosStore.subscribe((data) => (todos = data));

  let timeStart,
    timeEnd,
    testCompleted = false;
</script>

<div>
  <div
    class="single-test-container {testCompleted ? 'test-disabled' : ''}"
    on:click={() => {
      timeStart = window.performance.now();
      removeTest(todos).then(() => {
        timeEnd = window.performance.now();
        testCompleted = true;
      });
    }}
  >
    {#if testCompleted}
      Removal completed
    {:else}
      Remove all todos
    {/if}
  </div>

  {#if timeStart && timeEnd}
    <p style="text-align: center">
      {Math.round(timeEnd - timeStart)} ms
    </p>
  {/if}
</div>

<style>
  .single-test-container {
    padding: 7px 0;
    width: 180px;
    text-align: center;
    background-color: #c3e6fa;
    color: #1ca3f1;
    cursor: pointer;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
  }

  .test-disabled {
    cursor: not-allowed;
    background-color: #edf9ff;
  }
</style>

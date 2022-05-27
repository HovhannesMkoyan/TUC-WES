<script>
    import Icon from 'svelte-awesome';
    import { plusSquare } from 'svelte-awesome/icons';
</script>

<div class="newtodo-container">
  <input type="text" placeholder="What you plan do to?" />
  <div class="add-btn">
    <Icon data={plusSquare} scale={1.4}/>
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
    padding: 10px 20px;
    background: rgba(29, 161, 242, 0.17);
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .add-btn > span {
    margin-left: 10px;
  }
</style>

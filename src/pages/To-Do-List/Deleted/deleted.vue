<template>
  <div class="container">
    <div class="header">
      <h3>{{header}}</h3>
      <li>
        <a href="index.html">Index</a>
      </li>
            <li>
        <a href="toDoList.html">To Do List</a>
      </li>
    </div>
    <div>
      <ul>
        <li v-for="(item) in list" :key="item.id">{{index}} {{item.message}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      list: [
        {id:1, message:'example todo', deleted: false}
      ],
      newItem: '',
      header: 'Deleted From To Do List'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  margin: 30px;
}
</style>

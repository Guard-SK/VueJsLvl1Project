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
      <button @click="add" class="btn">BUTTON</button>
      <p>
        example test {{newItem}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      list: [
        
      ],
      data: 0,
      somedata: true,
      newItem: '',
      push_newItem: 'xdxdxd ',
      header: 'Deleted From To Do List'
    }
  },
  methods: {
    add() {
      this. newItem = this.newItem + '\n' + this.push_newItem
      console.log('button called')
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

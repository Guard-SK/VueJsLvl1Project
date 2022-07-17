<template>
  <div class="container">
    <div class="header">
      <h3>{{header}}</h3>
      <li>
        <a href="index.html">Index</a>
      </li>
      <li>
        <a href="deleted.html">Deleted</a>
      </li>
    </div>
    <div>
      <div>
        <input @keyup.enter="list.push({id: list.length+1, message: newItem, deleted: isDeleted})" type="text" placeholder="To Do..." v-model="newItem">
        <button @click="list.push({id: list.length+1, message: newItem, deleted: isDeleted})" class="btn_add">Add To List</button>
      </div>
      <div>
        <label>
          <input type="checkbox" class="isDeleted" v-model="isDeleted">Deleted?
        </label>
      </div>
    </div>
    <div >
      <ul v-for="(item) in list" :key="item.id">
        <li v-if="item.deleted == false" >{{item.message}}</li>
      </ul>
    </div>
    <div>
      <h3>Deleted items</h3>
      <ul v-for="(item) in list" :key="item.id">
        <li v-if="item.deleted == true" >{{item.message}}</li>
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
        {id:1, message:'example todo false', deleted: false},
        {id:2, message:'example todo true', deleted: true}
      ],
      newItem: '',
      isDeleted: false,
      header: 'To Do List'
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

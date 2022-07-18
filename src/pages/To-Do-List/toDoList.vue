<template>
<main>
  <div class="container">
    <div class="header">
      <h2>{{header}}</h2>
      <li>
        <a href="index.html">Index</a>
      </li>
      <li>
        <a href="deleted.html">Deleted</a>
      </li>
    </div>
    <div class="input-div">
      <div>
        <input class="input" @keyup.enter="saveItem" type="text" placeholder="To Do..." v-model="newItem">
        <button :disabled="newItem.length === 0" @click="saveItem" class="btn_add">Add To List</button>
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
</main>
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
  },
  methods: {
    saveItem() {
      this.list.push({id: this.list.length+1, message: this.newItem, deleted: this.isDeleted})
      this.newItem = ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'montserrat', sans-serif;
}
#app {

  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(53, 149, 187, 0.25), rgba(0, 22, 70, 0.75));
  text-align: center;
}

.container {
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100vh;
  padding: 15px;
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 20px;
  box-shadow: 5px 5px;
}

.input-div {
  margin: 24px;
}

.input {
  width: 40%;
}

.header {
  margin: 30px;
}

h3 {
  margin-top: 60px;
}
</style>

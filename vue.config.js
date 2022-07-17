const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    'index': {
      entry: './src/pages/Index/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'toDoList': {
      entry: './src/pages/To-Do-List/main.js',
      template: 'public/index.html',
      title: 'To Do List',
      chunks: [ 'chunk-vendors', 'chunk-common', 'toDoList' ]
    },
    'rockPaperScissors': {
      entry: './src/pages/Rock-Paper-Scissors/main.js',
      template: 'public/index.html',
      title: 'Rock Paper Scissors',
      chunks: [ 'chunk-vendors', 'chunk-common', 'rockPaperScissors' ]
    },
    'deleted': {
      entry: './src/pages/To-Do-List/Deleted/main.js',
      template: 'public/index.html',
      title: 'Deleted To Do List',
      chunks: [ 'chunk-vendors', 'chunk-common', 'deleted' ]
    }
  }
})

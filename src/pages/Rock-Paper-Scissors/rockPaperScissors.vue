<template>
<div class="container">
  <li>
  <a href="index.html">Index</a>
  </li>
    <div>
        <div class="head-wrapper">
            <div>
                <h1 class="title">ROCK, PAPER, SCISSORS</h1>
            </div>
            <div>
                <h1 class="score-h1">SCORE:</h1>
                <h1 class="score">0</h1>
            </div>
        </div>
        <div>
            <label for="name">Your name:</label>
            <input type="text" id="name" name="name"><br><br>
        </div>
        <div class="select-wrapper">
            <p>Select one of the options and than press the button.</p>
            <input type="radio" id="rock" name="selection" value="K">
            <label for="K">Rock</label><br>
            <input type="radio" id="paper" name="selection" value="P">
            <label for="P">Paper</label><br>
            <input type="radio" id="scissors" name="selection" value="N">
            <label for="N">Scissors</label>
        </div>
        <div>
            <button class="start" @click="main()">Start game!</button>
        </div>
        <div>
            <h2 class="result"></h2>
        </div>
    </div>
    <div>
        <h3 class="history_h3">History:</h3>
        <p class="history"></p>
        <button class="resetHistory" @click="reset_history()">Reset History</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    main() {
        game.result
    },
    reset_history() {
        $('.history').text('')
    }
  }
}

import $ from 'jquery'

class Game {
    constructor(score, name) {
        this.score = score
        this.name = name
    }
    ai(){
        let list = ["K", "P", "N"]
        let ai = ''
        let x = Math.floor(Math.random() * 3)
        ai = list[x]
        return ai
    }
    yourPick() {
        if ($('[name=selection]:checked').length) {
            let picked = ''
            picked = document.querySelector('input[name="selection"]:checked').value;
            return picked
        } else {
            return "C"
        }
    }
    history(result_text) {
        this.name = document.getElementById("name").value
        if (this.name != '') {
            $('.history').append('<br />'+this.name+' has ' + result_text + '. ' + 'Score is '+ this.score)
        } else {
            $('.history').append('<br />'+'Guest'+' has ' + result_text + '. ' + 'Score is '+ this.score)
        }
    }

    get result() {
        return this.logic()
    }

    logic() {
        let pc = this.ai()
        let pick = this.yourPick()
        if (pick == 'K' && pc == 'K') {
            $('.result').text('Draw!')
            $('.result').css({
                'color': 'gray'
            })
            this.history('drawn')
            return 'drawn'
        } else if (pick == 'K' && pc == 'P') {
            $('.result').text('You lost!')
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick == 'K' && pc == 'N') {
            $('.result').text('You won!')
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else if (pick == 'P' && pc == 'K') {
            $('.result').text('You won!')
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else if (pick == 'P' && pc == 'P') {
            $('.result').text('Draw!')
            $('.result').css({
                'color': 'gray'
            })
            this.history('drawn')
            return 'drawn'
        } else if (pick == 'P' && pc == 'N') {
            $('.result').text('You lost!')
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick === 'N' && pc === 'K') {
            $('.result').text('You lost!')
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick === 'N' && pc === 'P') {
            $('.result').text('You won!')
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else if (pick === 'N' && pc === 'N') {
            this.history('drawn')
            return 'drawn'
        } else {
            alert('Select your pick!')
            console.log('your pick ' + pick)
            console.log('ai ' + this.ai())
        }
    }
}
const game = new Game(0, '')

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
</style>

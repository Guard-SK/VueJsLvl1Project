<template>
<main>
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
                    <h1 class="score">{{total_score}}</h1>
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
                <button class="start" @click="main">Start game!</button>
            </div>
            <div>
                <h2 :class="{strikeout: true}" class="result" >{{result_data}}</h2>
            </div>
        </div>
        <div>
            <h3 class="history_h3">History:</h3>
            <p class="history">{{history_data}}</p>
            <button class="resetHistory" @click="reset_history">Reset History</button>
        </div>
    </div>
</main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        result_data: 'err',
        color_data: 'red',
        total_score: 10,
        list: [],
        history_data: 'example history'
    }
  },
  methods: {
    main() {
        game.result
    },
    reset_history() {
        this.history = ''
    },
    ai() { 
        let list = ["K", "P", "N"]
        let ai = ''
        let x = Math.floor(Math.random() * 3)
        ai = list[x]
        return ai
    },
    yourPick() {
        if ($('[name=selection]:checked').length) {
            let picked = ''
            picked = document.querySelector('input[name="selection"]:checked').value;
            return picked
        } else {
            return "C"
        }
    },
    history(result_text) {
        this.name = document.getElementById("name").value
        if (this.name != '') {
            this.history_data.append('<br />'+this.name+' has ' + result_text + '. ' + 'Score is '+ this.score)
        } else {
            $('.history').append('<br />'+'Guest'+' has ' + result_text + '. ' + 'Score is '+ this.score)
        }
    },
    logic() {
        // let color_script = 'red'
        let pc = this.ai()
        let pick = this.yourPick()
        if (pick == pc) {
            this.result_data = 'Draw!'
            console.log(this.result_data)
            this.history('drawn')
            return 'drawn'
        } else if (pick == 'K' && pc == 'P') {
            this.result_data = 'You lost!'
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick == 'K' && pc == 'N') {
            this.result_data = 'You won!'
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else if (pick == 'P' && pc == 'K') {
            this.result_data = 'You won!'
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else if (pick == 'P' && pc == 'N') {
            this.result_data = 'You lost!'
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick === 'N' && pc === 'K') {
            this.result_data = 'You lost!'
            $('.result').css({
                'color': 'red'
            })
            this.history('lost')
            return 'lost'
        } else if (pick === 'N' && pc === 'P') {
            this.result_data = 'You won!'
            $('.result').css({
                'color': 'green'
            })
            this.score = this.score + 1
            this.history('won')
            $('.score').text(this.score)
            return 'won'
        } else {
            alert('Select your pick!')
            console.log('your pick ' + pick)
            console.log('ai ' + this.ai())
        }
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
.result {
    color: v-bind('color');
}
</style>

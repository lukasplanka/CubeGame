let totalScore, roundScore, activePlayer, dice, playGame

newStart()

function newStart(){
    totalScore = [0,0]
    roundScore = 0
    activePlayer = 0
    playGame = true

    document.getElementById('totalScorePlayer0').textContent = 0
    document.getElementById('totalScorePlayer1').textContent = 0
    document.getElementById('currentScore0').textContent = 0
    document.getElementById('currentScore1').textContent = 0

    document.querySelector('#name_0').textContent = 'Skóre 1. hráč'
    document.querySelector('#name_1').textContent = 'Skóre 2. hráč'

    document.querySelector('.totalScore0').classList.add('active')
    document.querySelector('.totalScore1').classList.remove('active')
}

document.querySelector('#closeGameRules').addEventListener('click', function(){
    document.querySelector('.gameRules').style.display = 'none'
})

document.querySelector('.rollDice').addEventListener('click', function(){
    if(playGame){
        // random number
        let dice = Math.ceil(Math.random()*6)

        // change image
        let diceElement = document.querySelector('.diceImage')
        diceElement.style.display = 'block'

        // add number from dice
        if (dice !== 1) {
            roundScore = roundScore + dice
            document.getElementById('currentScore' + activePlayer).textContent = roundScore
        } else {
            nextPlayer()
        }
    }
})

// change player
function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1
    } else {
        activePlayer = 0
    }

    roundScore = 0

    document.getElementById('currentScore0').textContent = 0
    document.getElementById('currentScore1').textContent = 0

    document.querySelector('.totalScore0').classList.toggle('active')
    document.querySelector('.totalScore1').classList.toggle('active')
}

// add score to active player
document.querySelector('.holdScore').addEventListener('click', function(){
    if(playGame){
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore

        document.querySelector('#totalScorePlayer' + activePlayer).textContent = totalScore[activePlayer]
        
        if(totalScore[activePlayer] >= 100){
            document.querySelector('#name_' + activePlayer).textContent = 'Víťaz'
            playGame = false
        } else {
            nextPlayer()
        }
    }
})

document.querySelector('.newGame').addEventListener('click', newStart)

// buttons effect
let animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
  
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },500);
  };
  
  let classname = document.getElementsByClassName("confetti-button");
  
  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }

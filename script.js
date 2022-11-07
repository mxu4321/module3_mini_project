// Pseudo code
// set function playGame(){
    // first see alert("welcome, let's play r,p,s") & "ok" 
    // when pressed "ok", see prompt(please enter r/p/s)
    // when user input r/p/s, see alert("won,lost,tie")
    // when user input !== r/p/s, prompt("invalid input, please enter again(r/p/s)")
    // set var userInput & comInput = ["r", "p", "s"];
    // set var comInput = math.floor(math.random()*3);
    // match userInput & comInput
        // if {userInput === comInput} return tie
        // else if {userInput == r && comInput == s}
                // {userInput == p && comInput == r}
                // {userInput == s && comInput == p} return "won";
        // else return "lost";
// }; 
// set var win = 0; var lost = 0; var tie = 0;
// while playGame(), win++, lost++, tie++
// after match, see result alert(
                // "results",
                // "the computer picked ${comInput}", 
                // "you picked ${userInput}", 
                // "win: ${win}",
                // "lost: ${lost}",
                // "tie: ${tie}")
// after press ok to result, see confirm("would you like to play again?")
// if confirmed, return playGame(), else return alert("Thanks for playing")
let wins = 0
let losses = 0
let ties = 0

function displayGame() {
  let playAgain = true

  alert('Let\'s play rock, paper, scissors~')

  while (playAgain) {
    playGame()
    if (confirm('Would you like to play again?')) {
      continue
    } else {
      alert('Thanks for playing!')
      playAgain = false
    }
  }
}

function playGame() {
  let userChoice = prompt('Please choose (r)ock, (p)aper, or (s)cissors').toLowerCase()

  while (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
    userChoice = prompt('Invalid input, please try again')
  }

  let compChoice = generateMove()
  let temp = compChoice.charAt(0)

  if (userChoice === temp) {
    ties++
    alert('Stalemate...')
  } else if ((userChoice === 's' && temp === 'p') ||
    (userChoice === 'r' && temp === 's') ||
    (userChoice === 'p' && temp === 'r')) {
    wins++
    alert('You won!')
  } else {
    losses++
    alert('You lost :(')
  }

  alert(`
  The computer picked ${compChoice}
  You entered ${userChoice}
  Wins: ${wins}
  Losses: ${losses}
  Ties: ${ties}
  `)
}

function generateMove() {
  let moves = ['rock', 'paper', 'scissors']
  let oppInput = Math.floor(Math.random() * 3)
  return moves[oppInput]
}

displayGame()
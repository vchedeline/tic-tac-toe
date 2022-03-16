console.log("We Are LIVE")
/*----- constants -----*/
// X & O - players
const PLAYERS = {
  '1': 'X',
  '-1':'O',
};

// winning combinations
// 012
// 345
// 678

const COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
/*----- app's state (variables) -----*/

// where the users click (where to put an x or o) - make sure a square is not taken first
let board; // stores board positions & what they hold
// whose turn it is
let turn; // eitehr X or O
// when we have a winner or it there is a tie - if game is ongoing
let winner; // can be X/O, tie, null
// Bonus - if the player wants to quit
// Bonus - score for games won
// Bonus - timr for each player

/*----- cached element references -----*/

// message container - h1
const domMessage = document.querySelector('h2');
// the game squares
const gameBoard = document.querySelector('.game-board');
const domSquares = document.querySelectorAll('.square');
// reset button
const resetBtn = document.querySelector('button');

/*----- event listeners -----*/

// click on 9 squares
gameBoard.addEventListener("click", handleMove); // game squares
// click on reset button
resetBtn.addEventListener("click", init);
// BONUS - user initiates game start

/*----- functions -----*/

// initialize (start) game - init()
function init() {
  // data set to kep track of player moves
  board = new Array(9).fill(null); // [null, null...]
  turn = 1; // x goes first
  winner = null; // no winner at start of game
  console.log("Init is working");
}

// starts the game on page load
init();

// handle user interaction - handleMove()
function handleMove(evt) {
  const squareNumber = parseInt(evt.target.dataset.square);
  
  if (board[squareNumber] || winner) {
    return
  }
  
  board[squareNumber] = turn; // set index in the board area to claim spot
 
  // check for winner
  winner = checkForWinner();
 
  turn *= -1; // switch turn 
  
  // render message to user
  render();
}

// check for winner/ 3 in a row (main game logic)
function checkForWinner() {
  console.log("Checking for Winner...");
  for (let index in COMBOS) {
    if(
      board[COMBOS[index][0]] === turn &&
      board[COMBOS[index][1]] === turn &&
      board[COMBOS[index][2]] === turn
    ) {
      return turn;
    }
  }

  if (board.includes(null)){
    return null;
  }
  
  return "tie";
}

// render messages to the DOM
function render() {
  // console.log("rendering...");
  // puts x or o on the board
  board.forEach((element, index) => {
    domSquares[index].textContent = PLAYERS[element];
  });
  
  if(!winner) {
    // tells whose turn it is
    domMessage.textContent =`${PLAYERS[turn]}'s turn`;
  } else if (winner === "tie") {
    // tells user it's a tie
    domMessage.textContent = "It's A Tie!";
  } else {
    domMessage.textContent = `${PLAYERS[winner]} wins!`;
  }
}
console.log("We Are LIVE")
/*----- constants -----*/
// X & O - players
const PLAYERS = {
  '1': 'X',
  '-1':'O',
}

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
]
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
// the game squares
// reset button

/*----- event listeners -----*/

// click on nine squares
// click on reset button
// BONUS - user initiates game start

/*----- functions -----*/

// initialize (start) game
// render messages to the DOM
// check for winner/ 3 in a row (main game logic)
// handle user interaction
// Determines player trun true = p1 false = p2
let playerTurn = true;

let boardState = [null, null, null, null, null, null, null, null, null];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// compairs arrays to see if win condition is met
// need to somehow filter html elements to create arrays of elements
// that have been clicked on, sort those arrays and feed them to this
// function.

function checkWinCon(arr) {}

// Change box condition based on player status
function changeXorO(boolvalue, color, id) {
  document.getElementById(id).style.background = color;
  playerTurn = boolvalue;
}

// Grabs button element id via param passed in onClick
function handleClick(id) {
  const currnetColor = document.getElementById(id).style.background;

  if (boardState[id] === null) {
    if (playerTurn) {
      boardState[id] = "X";
      console.log(boardState);
      changeXorO(false, "blue", id);
    } else {
      boardState[id] = "O";
      console.log(boardState);
      changeXorO(true, "red", id);
    }
  } else {
    console.log("this card is already in use");
  }
}

// Resets boxes to original state
function resetBoxes() {
  const id = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).style.background = "transparent";
  }
}

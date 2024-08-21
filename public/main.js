// Determines player trun true = p1 false = p2
let playerTurn = true;

// assinge to bool later to determine which player wins
// p1 = true p2 = flase
let win = undefined;

// arrays for each win condition
let p1Arr = [];
let p2Arr = [];

// Change box condition based on player status
function changeXorO(boolvalue, color, id) {
  document.getElementById(id).style.background = color;
  playerTurn = boolvalue;
}

// Grabs button element id via param passed in onClick
function handleClick(id) {
  const currnetColor = document.getElementById(id).style.background;

  // Check if card has already been clicked
  if (currnetColor !== "red" && currnetColor !== "blue") {
    if (playerTurn) {
      changeXorO(false, "blue", id);
      p1Arr.push(id);

      // Sorting arrays to match win conditons
      p1Arr.sort();
    } else {
      changeXorO(true, "red", id);
      p2Arr.push(id);
      p2Arr.sort();
    }
  } else {
    console.log("This card is already in use");
  }
}

// Resets boxes to original state
function resetBoxes() {
  const id = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).style.background = "transparent";
  }
}

// Win Conditions displayed as array matrix
// Read from left to right on each line
// 1 2 3
// 4 5 6
// 7 8 9
//
// 1 4 7
// 2 5 8
// 3 6 9
//
// 1 5 9
// 3 5 7
//

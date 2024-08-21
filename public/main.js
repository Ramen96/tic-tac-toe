// Determines player trun true = p1 false = p2
let playerTurn = true;

// Change box condition based on player status
function changeXorO(boolvalue, color, id) {
  document.getElementById(id).style.background = color;
  playerTurn = boolvalue;
}

// Grabs button element id via param passed in onClick
function handleClick(id) {
  const stringifiedNum = id.toString();
  const currnetColor = document.getElementById(id).style.background;
  // Check if card has already been clicked
  if (currnetColor !== "red" && currnetColor !== "blue") {
    if (playerTurn) {
      changeXorO(false, "blue", stringifiedNum);
    } else {
      changeXorO(true, "red", stringifiedNum);
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

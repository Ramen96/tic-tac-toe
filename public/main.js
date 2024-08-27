// Determines player trun true = p1 false = p2
let playerTurn = true;

// assinge to bool later to determine which player wins
// p1 = true p2 = flase
let win = undefined;

// arrays for each win condition
let p1Arr = [];
let p2Arr = [];

const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],

  [1, 5, 9],
  [3, 5, 7],
];

// compairs arrays to see if win condition is met
// need to somehow filter html elements to create arrays of elements
// that have been clicked on, sort those arrays and feed them to this
// function.

function checkWinCon(arr) {
  let commonElements = [];
  let x = JSON.stringify(arr);
  let ceJsonString = JSON.stringify(commonElements);

  winConditions.forEach((element) => {
    element.forEach((nestedElement) => {
      if (arr.includes(nestedElement)) {
        commonElements.push(nestedElement);
        commonElements.sort();
        // removeRepeats(commonElements);
        console.log("common E", removeRepeats(commonElements));
      }
    });
  });
}

function removeRepeats(arr) {
  return [...new Set(arr)];
}

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
    function updateArr(arr, id) {
      arr.push(id);
      arr.sort();
      console.log("updateArr Func", arr);
      removeRepeats(arr);
      checkWinCon(arr);
    }

    if (playerTurn) {
      changeXorO(false, "blue", id);
      updateArr(p1Arr, id);
      // p1Arr.push(id);

      // Sorting arrays to match win conditons
      // p1Arr.sort();
      // alert(p1Arr);
      // checkWinCon(p1Arr);
    } else {
      changeXorO(true, "red", id);
      updateArr(p2Arr, id);
      // p2Arr.push(id);
      // p2Arr.sort();
      // checkWinCon(p2Arr);
    }
  } else {
    console.log("This card is already in use");
  }
}

// Resets boxes to original state
function resetBoxes() {
  p1Arr = [];
  p2Arr = [];
  const id = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).style.background = "transparent";
  }
}

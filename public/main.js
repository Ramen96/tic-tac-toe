// Determines player trun true = p1 false = p2
let playerTurn = false;
let boardState = [null, null, null, null, null, null, null, null, null];
let gameStateWon = false;
let player1Count = 0;
let player2Count = 0;

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

function checkWinCon() {
  let checkX = [];
  let checkO = [];

  function updateText(id) {
    const element = document.getElementById(id);
    if (playerTurn) {
      if (element !== null) {
        player1Count++;
        element.textContent = player1Count;
      } else {
        console.error(`Element with ${id} not found.`);
      }
    } else {
      if (element !== null) {
        player2Count++;
        element.textContent = player2Count;
      } else {
        console.error(`Element with ${id} not found.`);
      }
    }
  }

  function win() {
    if (playerTurn) {
      // alert("player 1 wins");
      updateText("player1Score");
      setTimeout(() => resetBoxes(), 1000);
    }
    if (!playerTurn) {
      // alert("player 2 wins");
      //
      updateText("player2Score");
      setTimeout(() => resetBoxes(), 1000);
    }
  }

  function compairArr(arr) {
    for (let i = 0; i < winConditions.length; i++) {
      let currnentWinCon = JSON.stringify(winConditions[i]);
      const playerArr = JSON.stringify(arr);
      if (currnentWinCon === playerArr) {
        gameStateWon = true;
        win();
      }
    }
  }

  function filterArr(arr) {
    if (arr.length > 3) {
      winConditions.forEach((index) => {
        // index represents each array inside winConditons
        let commonElements = [];
        for (let i = 0; i < arr.length; i++) {
          if (index.includes(arr[i])) {
            // looping over the array passed in the param and checking if its elements are included in the currently indexed array from winConditions
            // the common elements are pushed to a new array and can be compaired to each index of winConditions
            commonElements.push(arr[i]);
            if (commonElements.length === 3) {
              compairArr(commonElements);
            }
          }
        }
      });
    }
    if (arr.length <= 3) {
      compairArr(arr);
    }
  }

  for (let i = 0; i < boardState.length; i++) {
    // Step 1: loop over bordState
    if (boardState[i] !== null) {
      // Step 2: Where index is not null push to player array
      if (boardState[i] === "X") {
        checkX.push(i);
        filterArr(checkX); // Step 3: Filter arrays so they can be screened for win conditons
      } else {
        checkO.push(i);
        filterArr(checkO);
      }
    }
  }
}

// Change box condition based on player status
function changeXorO(boolvalue, color, id) {
  document.getElementById(id).style.background = color;
  playerTurn = boolvalue;
}

// Grabs button element id via param passed in onClick
function handleClick(id) {
  if (gameStateWon === false) {
    if (boardState[id] === null) {
      if (playerTurn) {
        boardState[id] = "X";
        changeXorO(false, "blue", id);
        checkWinCon();
      } else {
        boardState[id] = "O";
        changeXorO(true, "red", id);
        checkWinCon();
      }
    } else {
      console.log("this card is already in use");
    }
  } else {
    console.log("heho heho");
  }
}

// Resets boxes to original state
function resetBoxes() {
  gameStateWon = false;
  boardState = [null, null, null, null, null, null, null, null, null];
  const id = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).style.background = "transparent";
  }
}

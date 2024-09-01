// ##################################################################### //
// ####################### SECTION: Game Logic ######################### //
// ##################################################################### //
let playerTurn = false; // true = p2 false = p1
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
  autoResetBoxes();
}

function autoResetBoxes() {
  let resetTrigger = 0;
  boardState.forEach((index) => {
    index !== null ? resetTrigger++ : "none";
    resetTrigger === 9 ? setTimeout(() => resetBoxes(), 1000) : "none";
  });
}

function updateText(id) {
  const element = document.getElementById(id);
  if (playerTurn) {
    if (element !== null) {
      player1Count++;
      element.textContent = `Score: ${player1Count}`;
    } else {
      console.error(`Element with ${id} not found.`);
    }
  } else {
    if (element !== null) {
      player2Count++;
      element.textContent = `Score: ${player2Count}`;
    } else {
      console.error(`Element with ${id} not found.`);
    }
  }
}

// Change box condition based on player status
function changeXorO(boolvalue, id) {
  const element = document.getElementById(id);
  function addSvg(img, position) {
    element.style.backgroundImage = img;
    element.style.backgroundPosition = position;
  }
  if (playerTurn) {
    addSvg('url("X.svg")', "center");
  } else {
    addSvg('url("O.svg")', "center");
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "70%";
  }
  playerTurn = boolvalue;
}

// Grabs button element id via param passed in onClick
function handleClick(id) {
  if (gameStateWon === false) {
    if (boardState[id] === null) {
      if (playerTurn) {
        boardState[id] = "X";
        changeXorO(false, id);
        checkWinCon();
      } else {
        boardState[id] = "O";
        changeXorO(true, id);
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

function resetGame() {
  resetBoxes();
  playerTurn = false;
  player1Count = 0;
  player2Count = 0;
  document.getElementById("player1Score").textContent = "Score: 0";
  document.getElementById("player2Score").textContent = "Score: 0";
}

// ##################################################################################### //
// #################### SECTION: Background animation ################################## //
// ##################################################################################### //
function randomNumGen() {
  let colors = [];
  const ran = () => {
    return Math.random() * 100;
  };

  for (let i = 0; i < 18; i++) {
    colors.push(ran());
  }
  return colors;
}

// function randColor(arr) {
//   document.getElementById("notBody").style.background =
//     `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
// }

function randColor(arr) {
  const gradient1 = `linear-gradient(217deg, rgba(${arr[0]},${arr[1]},${arr[2]},${Math.random()}), rgba(${arr[9]},${arr[10]},${arr[11]},${Math.random()}) 70.71%)`;
  const gradient2 = `linear-gradient(127deg, rgba(${arr[3]},${arr[4]},${arr[5]},${Math.random()}), rgba(${arr[12]},${arr[13]},${arr[14]},${Math.random()}) 70.71%)`;
  const gradient3 = `linear-gradient(336deg, rgba(${arr[6]},${arr[7]},${arr[8]},${Math.random()}), rgba(${arr[15]},${arr[16]},${arr[17]},${Math.random()}) 70.71%)`;

  document.getElementById("notBody").style.backgroundImage =
    `${gradient1}, ${gradient2}, ${gradient3}`;
}

function getRandCLolor() {
  setTimeout(() => {
    randColor(randomNumGen());
    getRandCLolor();
  }, 3750);
}

getRandCLolor();
randColor(randomNumGen());

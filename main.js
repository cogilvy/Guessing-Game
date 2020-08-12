// Board array to keep track of squares
let board;
let winner = false;

const allSpaces = document.querySelectorAll("td");

// Elements
const table = document.querySelector("table");
table.addEventListener("click", handleMove);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", init);

let winMessage = document.querySelector("#win-message");

function init() {
  board = [null, null, null, true, null, null, null, null, null];
  winMessage.textContent = "";
  render();
}

function render() {
  if (winner === false) {
    allSpaces.forEach(function (space, idx) {
      if (board[idx] === null || board[idx] === true) {
        space.style.backgroundColor = "white";
      } else if (board[idx] === false) {
        space.style.backgroundColor = "red";
      }
    });
  }
}

function handleMove(event) {
  let idx = parseInt(event.target.id.replace("sq-", ""));
  if (board[idx] === null) {
    board[idx] = false;
  } else if (board[idx] === true) {
    winMessage.textContent = "You Won!";
    allSpaces[idx].style.backgroundColor = "green";
    return;
  }
  render();
}

init();

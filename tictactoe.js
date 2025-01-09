// tic tac toe

// This script handles the tic-tac-toe game

// Initialize variables
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X'; // start with player X
let board = Array(9).fill(null); // 3x3=9 cells


function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.includes(null) ? null : 'Tie';
}

function handleClick(event) {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if (board[index] || checkWinner()) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  const winner = checkWinner();
  if (winner) {
    message.textContent = winner === 'Tie' ? "It's a tie!" : `${winner} wins!`;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Erase all cells and start new game
function resetGame() {
  board.fill(null);
  currentPlayer = 'X';
  message.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
}


cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);

//Display current player
message.textContent = `Player ${currentPlayer}'s turn`;

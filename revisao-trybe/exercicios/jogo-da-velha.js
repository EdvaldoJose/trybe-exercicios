const tabuleiro = document.querySelector('#tabuleiro');
const buttons = document.querySelectorAll('.buttonChange');
const msgDiv = document.querySelector('.mensagem')
const resetButton = document.querySelector('#reset');
const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reloadPage() { // saber de ortega porque colocou 7 e 8 e 
  window.location.reload();
}

function changeSelect(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function checkWinner() {
  if (board[0] === board[1] && board[1] === board[2]) {
    return 'Quem ganhou foi o ' + board[0];
  }
  if (board[3] === board[4] && board[4] === board[5]) {
    return 'Quem ganhou foi o ' + board[3];
  }
  if (board[6] === board[7] && board[7] === board[8]) {
    return 'Quem ganhou foi o ' + board[6];
  }
  if (board[0] === board[3] && board[3] === board[6]) {
    return 'Quem ganhou foi o ' + board[0];
  }
  if (board[1] === board[4] && board[4] === board[7]) {
    return 'Quem ganhou foi o ' + board[1];
  }
  if (board[2] === board[5] && board[5] === board[8]) {
    return 'Quem ganhou foi o ' + board[2];
  }
  if (board[0] === board[4] && board[4] === board[8]) {
    return 'Quem ganhou foi o ' + board[0];
  }
  if (board[2] === board[4] && board[4] === board[6]) {
    return 'Quem ganhou foi o ' + board[2];
  }
  let count = 0;
    for (let elements of board) {
      if (typeof elements !== 'number') {
        count += 1;
      }
    }
      if (count === 9) {
    return 'Empate';
  }
  return null;
}

function disableButtons() {
  for ( let btn of buttons ) {
    btn.disabled = true;
  }
}

function writeText(event) {
  const currentSelected = document.querySelector('.selected');
  event.target.innerText = currentSelected.innerText;
  board[event.target.id] = currentSelected.innerText;
  const msg = checkWinner();
  if (msg !== null) {
    const winElement = document.createElement('span');
    winElement.innerText = msg;
    msgDiv.appendChild(winElement);
    disableButtons();
  }  
}

function createBoarder(size) {
  for (let index = 0; index < size; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.id = index;
    newDiv.className = 'div-board';
    newDiv.addEventListener('click', writeText)
    tabuleiro.appendChild(newDiv);
  }
}

window.onload = () => {
  createBoarder(board.length);
  for (let btn of buttons) {
    btn.addEventListener('click', changeSelect);
  }
  resetButton.addEventListener('click', reloadPage);
}






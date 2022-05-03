// Variáveis que serão utilizadas na criação do meu código.rm
const tabuleiro = document.querySelector('#tabuleiro');
  const buttons = document.querySelectorAll('.buttonChange');
    const msgDiv = document.querySelector('.mensagem');
      const resetButton = document.querySelector('#reset');
        const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            // index =[0  1  2  3  4  5  6  7  8]
            //length =[1  2  3  4  5  6  7  8  9]

// Função para recarregar a página.
function reloadPage() {
    window.location.reload();
}    

// Função para trocar a classe selected para o elemento que foi clicado.
function changeSelect(event) {
  const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
      event.target.classList.add('selected');
    // console.log('estou aqui!');
}

// Função que verifica a condição quem ganhou ou houve empate.
function checkWinner() {
    if (board[0] === board[1] && board[1] === board[2]) {
      return 'O parabéns você foi o vencedor :) ' + board[0];
    }
      if (board[3] === board[4] && board[4] === board[5]) {
        return 'O parabéns você foi o vencedor :) ' + board[3];
      }
        if (board[6] === board[7] && board[7] === board[8]) {
          return 'O parabéns você foi o vencedor :) ' + board[6];
        }
          if (board[0] === board[3] && board[3] === board[6]) {
            return 'O parabéns você foi o vencedor :) ' + board[0];
          }
            if (board[1] === board[4] && board[4] === board[7]) {
              return 'O parabéns você foi o vencedor :) ' + board[1];
            }
              if (board[2] === board[5] && board[5] === board[8]){
                return 'O parabéns você foi o vencedor :) ' + board[2];
              }
                if (board[0] === board[4] && board[4] === board[8]){
                  return 'O parabéns você foi o vencedor :) ' + board[0];
                }
                  if (board[2] === board[4] && board[4] === board[6]){
                    return 'O parabéns você foi o vencedor :) ' + board[2];
                  }
  
                  // Condição para verificar se todos os elementos dentro do array Board.
  let count = 0;
    for (let elements of board) {
      if (typeof  elements !== 'number') {
        count += 1;
      }
    }
      if (count === 9) {
        return 'Empate tente novamente! :)';
      }
  // Se não for nenhuma das condições acima retorne nulo.    
      return null;
}

// Função para disabilitar os botões que escolhem X ou O.
function disableButtons() {
  for (let btn of buttons) {
    btn.disabled = true;
  }
}

// Função para escrever nas Divs o elemento selecionado, seja X ou O.
function writeText(event) {
  const currentSelected = document.querySelector('.selected');
    event.target.innerText = currentSelected.innerText;
      board[event.target.id] = currentSelected.innerText;

// Retorno da função checkWinner sendo armazenado na constante msg.
  const msg = checkWinner(); // Esse retorno pode ser nulo ou um string.

  // Verifica se não é nulo.
  if (msg !== null) {

//Cria um span para armazenar mensagem e chame a função para disable.  
  const winElement = document.createElement('span');
    winElement.innerText = msg;
      msgDiv.appendChild(winElement);
  disableButtons();  
  }
}

// Função que cria Divs o board.
function creteBorad(size) {
  for (let index = 0; index < size; index += 1) {
    const newDiv = document.createElement('div');
      newDiv.id = index;
        newDiv.className = 'div-board';
    // Adiciona um evento em cada div criada.
          newDiv.addEventListener('click', writeText);
            tabuleiro.appendChild(newDiv);
  }
}

// Função para ser chamada quando a página for carregada.
window.onload = () => {

  // Cria o board com o tamanho especifíco.
  creteBorad(board.length);

  // Adiciona evento nos botóes X e O.
    for (let btn of buttons) {
      btn.addEventListener('click', changeSelect);
  }
    // Adiciona evento no botão de jogar novamente
        resetButton.addEventListener('click', reloadPage)
}
  



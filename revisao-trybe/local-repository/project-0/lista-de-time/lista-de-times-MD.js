function adicionarTime(){
  let ol = document.getElementById('lista'); // estou capturando o elemento ol através do id
  let input = document.getElementById('txt-tarefa'); // estou capturando o elemento input através do id
  let li = document.createElement('li'); // estou criando uma li 
  li.innerText = input.value; // estou atribuindo o valor innerText do elemento li ao valor digitando dentro do input, que é o input.value, ou seja o valor que o usuário digitou dentro do input
  ol.appendChild(li); // estou adicionando a li dentro da ol, por isso capturei a ol na linha 2
  input.value = ''; // estou apagando o valor digitado pelo usuário para que depois de criada a li dentro da ol, o input seja limpo
}

let botaoAdicionar = document.getElementById('criar-tarefa'); // estou capturando o elemento botão através do id dele
botaoAdicionar.addEventListener('click', adicionarTime); // estou adicionado um evento do tipo click dentro do botão capturado na linha 10, quando clicado a função adicionarTime será executada

function limparListaDeTimes(){
  let ol = document.getElementById('lista'); // estou capturando a ol novamente, igual a linha 2, nesse caso poderia ter declarado no escopo global, mas uma boa prática para evitar bugs é fugir do escopo global e declarar tudo no escopo da função, escrevemos mais porém o código fica mais legível e corremos menos risco de bugs
  console.log(ol.innerHTML); // para dar visibilidade de quem é o innerHTML da ol capturada nesse momento
  ol.innerHTML = null; // estou atribuindo null para o innerHTML, assim todos elementos dentro da ol deixam de existir, ou seja, são "removidos"
}

let maeDoBotaoRemoverTudo = document.getElementById('buttons')
let botaoRemoverTudo = document.createElement('button');
botaoRemoverTudo.addEventListener('click',limparListaDeTimes)
botaoRemoverTudo.innerText = 'Remover Tudo'; // Adicionando o conteúdo textual do botão. 
botaoRemoverTudo.className = 'removerButton'; // Adicionando a classe, isso faz ele pegar os estilos que foram definidos para essa classe removerButton lá no arquivo style.css
buttons.appendChild(botaoRemoverTudo);

/* 
Quando for interagir com um elemento, seja para adicionar um novo elemento dentro dele, seja para capturar o valor que o usuário digitou, seja para alterar o valor, para apagar, adicionar uma classe e etc... Fica nítido aqui um padrão.
Capturo o elemento e executo as ações que desejo =)
 */


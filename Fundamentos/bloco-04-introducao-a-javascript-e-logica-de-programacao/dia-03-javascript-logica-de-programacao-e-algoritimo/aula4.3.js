//Jogo de xadrex - Posição da rainha
let posicaoRainhaLinha = 2;
let posicaoRainhaColuna = 6;

//Posicao de outra peça do
let posicaoPecaLinha = 4;
let posicaoPecaColuna = 5;
/*
//Identifica se o ataque foi bem sucedido ou não
let ataqueBemSucedido = false;

//Verifica se a peça está na mesma linha
if (posicaoRainhaLinha === posicaoPecaLinha) {
    ataqueBemSucedido = true;
    console.log("O ataque foi bem sucedido na mesma linha");
}
//Verifica se a peça está na mesma coluna
if (posicaoRainhaColuna === posicaoRainhaColuna) {
    ataqueBemSucedido = true;
    console.log("O ataque foi bem sucedido")
}
//Verifica se a peça está na mesma diagonal
let somaRainha = posicaoRainhaColuna + posicaoRainhaLinha;
let somaPeca = posicaoPecaColuna + posicaoPecaLinha;

if (sonaRainha === somaPeca) {
    ataqueBemSucedido = true;
    console.log("O ataque foi bem sucedido")
}
*/
//testar com o laço formato

for (let index = 1; index <= 7; index += 1) {
    let linhaRainha = posicaoRainhaLinha + index;
    let colunaRainha = posicaoRainhaColuna + index;

    if(linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
        ataqueBemSucedido = true;
        console.log("O ataque foi bem sucedido na posição SE");
    }
}










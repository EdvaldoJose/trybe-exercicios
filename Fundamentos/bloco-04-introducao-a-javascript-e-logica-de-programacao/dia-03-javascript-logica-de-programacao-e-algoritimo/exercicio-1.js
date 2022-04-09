/*exercicio-01
A Dora aventireira gostaria de ter uma lista com todos os números ímpares entre 1 e 50.
Crie um algoritimo que guarde em uma array detodos os números inteiros ímpares desse intervalo.
Imprima o resultado do array na tela.*/
/*
let = impares = [];

for (let index = 0; index <= 50; index +=1){
    if (index % 2 !== 0) {
        impares.push(index);
    }
}
console.log(impares);

/*exercicio-02
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e imprima o resultado na tela..
*/
let numero = [];

for (let index = 0; index <= 100; index += 1) {
    if (index % 2 != 0) {
        numero.push(index);
    }
}
    console.log(numero);











/*exercicio-03
Escreva um algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array).
Encontre e imprima no console a posição index em que o elemento se encontra no array.
Caso não o encontre, imprima a mensagem "Elemento não encontrado"
*/

let array = [1,2,3,4,1];

for (let index = 0; index < array.length; index++) {
    if (array[index] == 1) {
        console.log(index);
    } else {
        console.log("elemento não encontrado!");
    }
}










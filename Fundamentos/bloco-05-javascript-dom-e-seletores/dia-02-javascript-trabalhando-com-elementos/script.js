//document.write("This is written from JavaScript");
// Criando um elemento com .js para o html.
/*
let container = document.getElementById('frist');
console.log(container);

let newDiv1 = document.createElement('div');
newDiv.className = 'red small circle';

let newDiv2 = document.createElement('div');
newDiv.className = 'red small square';

let newDiv3 = document.createElement('div');
newDiv.className = 'green small circle';

console.log('newDiv');

function createElement(classes) {
    let newDiv = document.createElement('div');
    newDiv.className = classes;
    return newDiv;
}

container.appendChild(createElement('red small circle'));
container.appendChild(createElement('green small circle'));
container.appendChild(createElement('yellow small circle'));

const cores = ['green, red, yellow'];

for (let index = 0; index < 10; index += 1) {
    const umaDiv = createDivElement('green, red , yellow');
    container.appendChild(umaDiv);
}
// ou outro for 

for (let index = 0; index < 30; index += 1) {
    const posicao = math.foor(math.random() * cores.length);
    const cor = cores[posicao];
    const umaDiv = createDivElement(cor = ' small circle ');
    container.appendChild(umaDiv);
}
// Tarefa para brincar com o for acima fazer;
// 1- colocar as formas aleatorias
// 2- colocar tamanhos aleatosios
// Funções vistas hoje, revisar
/* 
Funções vistas na aula de hoje;
1- createElement
2- appendchild
3- removeChild
4- parentNode
5- childNodes
6- children
7- firstChild
8- fistElementChild
9- lastChild
10-nextSibling
11-nextElementSibling
12-previousSibling
13-previousElementSibling
*/
// console.log(document.getElementById('start').nextSibling) // nó
// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



let ingredientsItems = [
    '500g de feijão carioquinha cozido',
    '500g de feijão carioca cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientsItems.length; index += 1) {
    let ingredient = ingredientsItems[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;
    ingredientListItem.className = 'ingredients-list-item';
    //console.log(ingredientListItem);

    ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');
// console.log(ingredientListItems);

for (let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index];

    if (element.innerText.includes('carioquinha')) {
        ingredientList.removeChild(element);
    }
}


function resultado(boolean) {
    
    let num1 = 30;
    let num2 = 20;
    let soma = num1 + num2;
    //let invet = -1
    //let negat = -30

    if(soma < num1 || num2) {
        return false;
    } else if (soma > num1 || num2) {
        return true;
    } else {
        return soma;
    }
}
console.log(resultado(30, 20));


function numImpar(arr) {

    let sumOdds = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 !== 0) {
            sumOdds += arr[index];
        }
    }
    return sumOdds;
}
    console.log(numImpar([1,2,3,4,5,6,7]));


const arr = [1,2,3,4,5,6,7,8,9,10];
//     //console.table(arr);
for (let index = 0; index < arr.length; index += 1) {
    //console.log(arr[index]);
}
for (let index = arr.length - 1; index >= 0; index -= 1) {
    //console.log(arr[index]);
}

let num = [1,2,3,4,5];
//for (let index in arr) {
    //console.log(arr[index]);
//}
for (let value of num) {
    console.log(value);
}

const arrString = ['Daniel', 'Carlos', 'Claudia'];
    for (let value2 of arrString) {
        if(value2 === 'Daniel') {
            console.log(value2.length);
            break;
        }
        console.log('roda novamente');
    }

const numbers = [];
    let count = 1;
        while(numbers.length < 50) {
            numbers.push(count);
            count++;
        }
    console.log(numbers);

/* ex - Incluír no arrays - escreva um algoritimo que irá receber dois array  a e b, retorne um novo valor array com os elementos que see reeepetm em a e b, se nãoo houver elementoo repetidos retorne um array vazuio.entradas: a = [1,2,3], b = [4,2,4] - Saída: [2] - utilize dois for.*/
function includesArrays(a, b) {
    let result = [];
    for (let valueA of a) {
        for (let valueB of b) {
            if (valueA === valueB) {
                result.push(valueA);
            }
        }
    }
    return result;
}
console.log(includesArrays(a =[1,2,3], b = [4,2,4]));

/* exc - eve = identificador de quem critou PAR sendo: 1 para Lucio e 0 para anna.*/
function odOreEven(lucioFingers, anaFingers, even) {
    let result = (lucioFingers + anaFingers) % 2;
        if (result === 0 && even === 1) {
            return 'Lucio venceu';
        }
        if (result !== 0 && even === 1) {
            return 'Lucio venceu';
        }
        else {
            return 'Ana venceu';
        }
}
    console.log(odOreEven(1,3,2));





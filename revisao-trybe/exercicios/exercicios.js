//Crie uma função que receba uma array de inteiros e retorne o maior valor.

const { log } = require("console");

//num = [2,3,6,7,10,1];

function positionHigh(num) {
    let maiorNum = 0;
    for (let index = 0; index < num.length; index += 1) {
        if (num[index] > maiorNum) {
            maiorNum = num[index];
        } else {
            return maiorNum;
        }
    }
}
    console.log(positionHigh([2,3,6,7,10,1]));

// Crie uma função que receba uma array de inteiros e retorne o inteiro que mais se repete.
// array de teste = [2,3,2,5,8,2,3];
//o valor esperado no retorno da função é o 2.

let num1 = 3;
let num2 = 8;

function soma(num1, num2) {
    result = num1 + num2;
    return soma;
}
console.log(soma);

let pessoa = {
    nome: 'Edvaldo',
    idade: '49',
    endereco: 'Rua A',
    sexo: 'masculino'

};
    log('pessoa')

    

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
    
    // // diferença entre a variável var e let
    // var teste = true;
    // var teste = 'edvaldo';
    //     console.log(teste);
    
    // let teste1 = false;
    // let teste1 = 'edvaldo';
    //     console.log(teste1);

    let pizzas = ['quatro queijo', 'margarita', 'lombinho', 'calabresa'];
        pizzas.push('chocolate', 'palmito');

        console.log(pizzas[1]);
           
    for (let i = 0; i < pizzas.length; i++) {
        console.log(pizzas.sort()[i]);
    }    

    let tabuada = 9;

        for (let indice = 0; indice <= tabuada; indice += 1) {
           
            console.log(tabuada * indice);
        }

    let listaDeNomes = ['edvaldo', 'ana paula', 'mônica', 'josé carlos'];
    
    for (let indice = 0; indice < listaDeNomes.length; indice += 1) {
            let nomes = 'Sejam bem vindos a trybe! ' + listaDeNomes[indice];
            console.log(nomes);
    }

    // imprima um quadrado de asterisco
    let n = 5;
    let asterisco = '*';
    let espaco = '';

    for (let imprima = 0; imprima <= n; imprima++) {
        espaco += asterisco;
        console.log(espaco);
    }   

    for (let imprima = 0; imprima < n; imprima++) {
        console.log(espaco);
    }
    
    // objeto

    let  singer = {
        name: 'Milton',
        lastName: 'Nascimento',
        nickName: 'Bituca',
        'estado-civil': 'solteiro',
        age: 77,
        bestAlbuns: ['travessia', 'clube da esquina', 'minas'],
            bornInfo: {
                city: 'Rio de Janeiro',
                state: 'Rio de Janeiro',
            }
    };

        console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' ' + ' possui ' + singer.age + ' anos');

        console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' ' + 'possui ' + singer['age'] + ' anos');

        console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' ' + ' ele está ' + singer['estado-civil']);

        singer['fullName'] = singer.name + ' ' + singer.lastName;

        console.table(singer);

        console.log('O cantor ' + singer['name'] + ' nasceu no estado' + singer.bornInfo.city);

    // for in
    
    let pizzas = {
        sabor: 'palmito', 
        preco: 39.90,
        borda: true,
    };

    for (let key in pizzas) { 
        console.log(key);
        console.log(pizzas);
        console.log(pizzas.preco);
        console.log(pizzas['borda']);
        console.log(pizzas[key]);
    }

    let pizzasDoces = ['chocolate', 'banana', 'morango'];
        for (let key2 in pizzasDoces) {
            console.log(key2);
            console.log(pizzasDoces[key2]); 
            console.log(key2, pizzasDoces[key2]);
        }
    
        // funções

            let statusCarro = 'desligado';
            let aceleracao = 0;
            let rotacaoDoVolante = 0;

        function ligarDesligar() {
            if (statusCarro === 'desligado') {
                statusCarro = 'ligado';
            }
            else {
                statusCarro = 'desligado';
            }
            return statusCarro;
        }
            console.log(ligarDesligar('desligado'));

        function acelerar(incremento) {
            aceleracao = aceleracao + incremento;
            return 'acelerando a ' + aceleracao + ' m/s2';
        }

        function frear(decremento) {
            aceleracao = aceleracao - decremento;
            return 'Desacelerando a ' + aceleracao + ' m/s2';
        }

        function girarVolante(anguloRotacao) {
            rotacaoDoVolante = anguloRotacao;
            return rotacaoDoVolante + 'o';
        }
            console.log(ligarDesligar('ligado'));
       
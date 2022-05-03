// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;

} else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
    return area;
}

// Desafio 3
function splitSentence(string) {
  array = string.split([' ']);
    return array;
}
// console.log(splitSentence('eu quero pegar carona nesse foguete da trybe'));
 
// Desafio 4
function concatName(posicao) {
  tamanho = ([posicao.length -1]);

    let primeiro = posicao[0];
    let ultimo = posicao[tamanho];

    return ultimo + ', ' + primeiro;
}
// console.log(concatName(['edvaldo(1)', 'josé(2)', 'paulo(3)', 'nate(4)', 'carlos(5)']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties;
  let resultado = vitoria + empate;

    return resultado;
  }
  
// Desafio 6.
function highestCount(numbers) {
  let numMaior = Math.max.apply(null, numbers);
  let repete = 0;

  for(let i = 0; i < numbers.length; i += 1) {

    if( numMaior === numbers[i]) {
      repete += 1;
    }
      
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicao = cat1 + cat2;

  if(posicao / 2 === mouse) {
    return "os gatos trombam e o rato foge";

  } else if (cat1 < cat2) {
    return "cat1";

  } else if (cat2 < cat1) {
    return "cat2";
  }
  
}

// Desafio 8
function fizzBuzz(array1) {
 let array2 = [];
  for(let i = 0; i < array1.length; i += 1) {

    if (array1[i] % 3 === 0 && array1[i] % 5 === 0) {
      array2.push("fizzBuzz");
      
    } else if (array1[i] % 3 === 0) {
      array2.push("fizz");
       
    } else if (array1[i] % 5 === 0) { 
      array2.push("buzz");
      
    } else {
      array2.push("bug!");
      
    }
  } 
    return array2;     
}
  
// Desafio 9 >>> Erro corrigido no teste da função.
function encode(str) {
  //str = str.toLowerCase();
  let lista = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let word = '';
  for(let letra of str) {
    if(lista[letra] === undefined) {
      word += letra;

    } else {
      word += lista[letra];
    }

  }
  return word;
}

function decode(str) {
  //str = str.toLowerCase();
  let lista = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let word = '';
  for(let letra of str) {
    if(lista[letra] === undefined) {
      word += letra;

    } else {
      word += lista[letra];
    }

  }
  return word;
}

// Desafio 10 >>> Erro corrigido para passar no teste usando o comando .sort() para ordenar uma array.
function techList(tech, name) {
  if(tech.length === 0) {
    return 'Vazio!';
  }
  let lista = [];
  for(let i = 0; i < tech.length; i++) {
    let objects = { tech: tech.sort()[i], name: name };
    lista.push(objects);
  }
  return lista;
}
//console.log(techList(tech = ["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

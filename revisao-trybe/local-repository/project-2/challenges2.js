
// Desafio 11
function generatePhoneNumber(array) {
  
  const lengthIsValid = array.length !== 11;
  let NoHaveNegativeNumber = true;
  let NoHaveNumberBigger10 = true;
  let NoHaveRepetions = true;
  
  for (const iterator of array) {
    if (iterator < 0) {
      NoHaveNegativeNumber = false;
  }
    if (iterator > 9) {
      NoHaveNumberBigger10 = false;
  }
  let count = 0;
  for (const newIterator of array) {
    if (iterator === newIterator) {
      count += 1;
  }
    if (count === 3) {
      NoHaveRepetions = false;
      break;
      }
    }
  }
    if (lengthIsValid) {
      return 'Array com tamanho incorreto.';
  }
    if (!(NoHaveNegativeNumber && NoHaveNumberBigger10 && NoHaveRepetions)) {
      return 'não é possível gerar um número de telefone com esses valores';
  }
      return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
  
 
// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC)) && (lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA)))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13

//function hydrate(drinkOrder) {

  
    function hydrate(drinkOrder) {
      let order = (/\d+/g);
      let combination = drinkOrder.match(order);
      let agua = 0;
      
      for (let inicial of combination) {
      agua += Number(inicial);
      }
      if (agua > 1) {
      return `${agua} copos de água`;
      }
      return `${agua} copo de água`;
      }
      console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); 

  //   let counter = 0;
  //   for (const char of string) {
  //   if (typeof char === 'number') 
  //    counter += char;
  //   }
  //   return counter;
  // }
  
  // console.log(hydrate('1 cerveja'));

//   let soma = 0;
//   let order = drinkOrder.replace(/[^0-9]/g, '');
//   let arr = order.split('');
//   for (let index = 0; index < arr.length; index += 1) {
//     soma += arr[index];
//   }
//   if (soma === 1) {
//     return 'copo de água';
//   } else {
//     return 'copos de água'
//   }
// }
// //console.log(hydrate(['2 cerveja', '3 copos de vinho']));


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

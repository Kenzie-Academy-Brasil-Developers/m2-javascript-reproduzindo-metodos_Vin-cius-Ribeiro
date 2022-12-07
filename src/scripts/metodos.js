/*Adicione seu codigo abaixo */

const lancheiras = [
  {
    frutas: "abacaxi",
    suco: "morango",
    agua: true,
    preco: 10,
  },
  {
    frutas: "banana",
    suco: "uva",
    agua: false,
    preco: 15,
  },
  {
    frutas: "maçã",
    suco: "laranja",
    agua: true,
    preco: 8,
  },
];

const numbers = [5, 9, 10, 30, 5, 8, 19, 9, 8, 50];

/*Método: map()*/

function mapa(array) {
  let novaLista = [];
  for (let i = 0; i < array.length; i++) {
    novaLista = array;
    if (novaLista[i].suco == "laranja") {
      novaLista[i].suco = "amora";
    }
  }
  return novaLista; // retorna a lista alterada sem alterar a original
}
console.log(mapa(lancheiras));

/*Método: filter()*/ // - check

function filtro(array) {
  let filtrado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].agua == true) {
      filtrado.push(array[i]);
    }
  }
  return filtrado; // filtrar as lancheiras que tem água
}

console.log(filtro(lancheiras));

/*Método: find()*/ // - check

function filtroUnidade(array) {
  let filtrado = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].agua == true) {
      filtrado.push(array[i]);
      return filtrado; // filtrar a primeira lancheira que tem água
    }
  }
}

console.log(filtroUnidade(lancheiras));

/*Método: reduce()*/ // - check

function reducao(array) {
  let acumulador = 0;
  for (let i = 0; i < array.length; i++) {
    acumulador += array[i].preco;
  }
  return acumulador; // reduz os preços em um unico valor os somando
}

console.log(reducao(lancheiras));

/*Método: includes()*/

function incluir(array, confirir, index) {
  if (index == undefined) {
    index = 0
  }
  for (let i = index; i < array.length; i++) {
    if (array[i] == confirir) {
      return true
    }
  }
  return false
}

console.log(incluir(numbers, 5, -1)) // retorna o true ou false

/*Método: indexOf()*/

function indice(array, conferir, index) {
  if (index == undefined) {
    index = 0
  }
  for (let i = index; array.length; i++) {
    if (array[i] == conferir) {
      return i
    }
  }
  return -1
}

console.log(indice(numbers, 5))

/*Adicione seu codigo abaixo */

const lancheiras = [
  {
    fruta: "abacaxi",
    suco: "morango",
    agua: true,
    preco: 10,
  },
  {
    fruta: "banana",
    suco: "uva",
    agua: false,
    preco: 15,
  },
  {
    fruta: "maçã",
    suco: "laranja",
    agua: true,
    preco: 8,
  },
];

const numbers = [5, 9, 10, 30, 5, 8, 19, 9, 8, 50];

/*Método: map()*/ // callback

function percorrerMapa(elemento, index, array) {
  let copia = { ...elemento };

  if (elemento.suco == "laranja") {
    copia.suco = "amora";
  }
  return copia;
}

function mapa(array, callback) {
  let novaLista = [];
  for (let i = 0; i < array.length; i++) {
    novaLista.push(callback(array[i], i, array));
  }
  return novaLista;
}

console.log(mapa(lancheiras, percorrerMapa));

/*Método: filter()*/ // - check // callback

function percorrerfiltro(elemento, index, array) {
  let copia;

  if (elemento.agua == true) {
    copia = elemento;
  }
  return copia;
}

function filtro(array, callback) {
  const listaFiltrada = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) != undefined) {
      listaFiltrada.push(callback(array[i], i, array));
    }
  }

  return listaFiltrada;
}

console.log(filtro(lancheiras, percorrerfiltro));

/*Método: find()*/ // - check // callback

function percorreFiltroUnidade(elemento, index, array) {
  let filtrado;

  if (elemento == undefined) {
    return lancheiras;
  }
  if (elemento.fruta == "banana") {
    filtrado = elemento;
    return filtrado;
  }
}

function filtroUnidade(array, callback) {
  let listaFiltradaPorUnidade = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) != undefined) {
      listaFiltradaPorUnidade.push(callback(array[i], i, array));
    }
  }

  return listaFiltradaPorUnidade;
}

console.log(filtroUnidade(lancheiras, percorreFiltroUnidade));

/*Método: reduce()*/ // - check // callback

function percorrerReducao(acumulador, valorAtual, index, array) {

  let cont = acumulador + valorAtual
  
  return cont;
}

function reducao(array, callback) {
  let acumulador = 0;
  
  for (let i = 0; i < array.length; i++) {
   acumulador = callback(acumulador, array[i].preco, i, array)
  }
  return acumulador
}

console.log(reducao(lancheiras, percorrerReducao));

/*Método: includes()*/

function incluir(array, confirir, index) {
  if (index == undefined) {
    index = 0;
  }
  for (let i = index; i < array.length; i++) {
    if (array[i] == confirir) {
      return true;
    }
  }
  return false;
}

console.log(incluir(numbers, 5, -1)); // retorna o true ou false

/*Método: indexOf()*/

function indice(array, conferir, index) {
  if (index == undefined) {
    index = 0;
  }
  for (let i = index; array.length; i++) {
    if (array[i] == conferir) {
      return i;
    }
  }
  return -1;
}

console.log(indice(numbers, 9));

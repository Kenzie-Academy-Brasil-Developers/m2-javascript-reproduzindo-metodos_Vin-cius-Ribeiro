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

function percorrerMapa(elemento) {
  let novaLista = [];
  for (let i = 0; i < lancheiras.length; i++) {
    novaLista = lancheiras;
    if (novaLista[i].suco == elemento) {
      novaLista[i].suco = "amora";
    }
  }
  return novaLista;
}

function mapa(elemento) {
  const listaTrocada = percorrerMapa(elemento);

  return listaTrocada;
}

console.log(mapa("laranja"));

/*Método: filter()*/ // - check // callback

function percorrerfiltro(elemento) {
  let filtrado = [];

  for (let i = 0; i < lancheiras.length; i++) {
    if (elemento == undefined) {
      return lancheiras
    }

    if (elemento == lancheiras[i].agua) {
      filtrado.push(lancheiras[i]);
    } else if (elemento == lancheiras[i].fruta) {
      filtrado.push(lancheiras[i]);
    } else if (elemento == lancheiras[i].suco) {
      filtrado.push(lancheiras[i]);
    } else if (elemento == lancheiras[i].preco) {
      filtrado.push(lancheiras[i]);
    }
  }
  return filtrado;
}

function filtro(elemento) {
  const listaFiltrada = percorrerfiltro(elemento);

  return listaFiltrada;
}

console.log(filtro(true));

/*Método: find()*/ // - check // callback

function percorreFiltroUnidade(elemento) {
  let filtrado = [];
  
  for (let i = 0; i < lancheiras.length; i++) {
    if (elemento == undefined) {
      return lancheiras
    }

    if (elemento == "agua" && lancheiras[i].agua == true) {
      filtrado.push(lancheiras[i]);
      return filtrado
    } else if (elemento == lancheiras[i].fruta) {
      filtrado.push(lancheiras[i]);
      return filtrado
    } else if (elemento == lancheiras[i].suco) {
      filtrado.push(lancheiras[i]);
      return filtrado
    } else if (elemento == lancheiras[i].preco) {
      filtrado.push(lancheiras[i]);
      return filtrado
    }
  }
}

function filtroUnidade(elemento) {
  const listaFiltradaPorUnidade = percorreFiltroUnidade(elemento)

  return listaFiltradaPorUnidade
}

console.log(filtroUnidade("banana"));

/*Método: reduce()*/ // - check // callback

function percorrerReducao(elemento) {
  if (elemento == "preco") {
    let acumulador = 0;
    for (let i = 0; i < lancheiras.length; i++) {
      acumulador += lancheiras[i].preco;
    }
    return acumulador;
  }
  if (elemento == undefined) {
    return lancheiras
  }
} 

function reducao(elemento) {
  const listaReducao = percorrerReducao(elemento);

  return listaReducao;
}

console.log(reducao("preco"));

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

console.log(indice(numbers, 5));

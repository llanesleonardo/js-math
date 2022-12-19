const arregloNumeros = [
  10, 20, 10000, 30, 10, 10, 30, 30, 30, 10000, 10000, 10000, 10000, 10000,
  10000, 10000,
];

const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(arreglo) {
  /* let suma = 0;

  for (let index = 0; index < arregloNumeros.length; index++) {
    suma += arregloNumeros[index];
  }*/

  function sumarTodosLosNumeros(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaArreglo = arreglo.reduce(sumarTodosLosNumeros);
  const cantidadArreglo = arreglo.length;
  const promedio = sumaArreglo / cantidadArreglo;
  return promedio;
};

//console.log(calcularPromedio(arregloNumeros));

PlatziMath.esPar = function esPar(arreglo) {
  /* if (arreglo.length % 2) {
    return false;
  } else {
    return true;
  }*/

  return !(arreglo.length % 2);
};

PlatziMath.esImPar = function esImPar(arreglo) {
  /* if (arreglo.length % 2) {
      return false;
    } else {
      return true;
    }*/

  return arreglo.length % 2;
};

PlatziMath.calcularMediana = function calcularMediana(arreglo) {
  const listaPar = PlatziMath.esPar(arreglo);
  let promedioDeValoresParaMediana = 0;
  let promedioMediana = 0;
  let valorDeMediana = 0;

  const listaOrdenada = PlatziMath.ordenarValoresLista(arreglo);

  if (listaPar) {
    const valor1 = arreglo[arreglo.length / 2 - 1];

    const valor2 = arreglo[arreglo.length / 2];

    promedioDeValoresParaMediana = PlatziMath.calcularPromedio([
      valor1,
      valor2,
    ]);

    valorDeMediana = promedioDeValoresParaMediana;
  } else {
    IndexMediana = Math.floor(arreglo.length / 2);

    valorDeMediana = arreglo[IndexMediana];
  }

  return valorDeMediana;
};

PlatziMath.ordenarValoresLista = function ordenarValoresLista(arreglo) {
  function ordenarValor(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }

  return arreglo.sort(ordenarValor);
};

PlatziMath.calcularModa = function calcularModa(arreglo) {
  const objetoDeValoresModa = {};

  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    if (objetoDeValoresModa[element]) {
      objetoDeValoresModa[element] += 1;
    } else {
      objetoDeValoresModa[element] = 1;
    }
  }

  const listaArray = Object.entries(objetoDeValoresModa);
  const listaOrdenada = PlatziMath.ordenarValoresListaBidimensional(
    listaArray,
    1
  );

  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  return moda;
};

PlatziMath.ordenarValoresListaBidimensional =
  function ordenarValoresListaBidimensional(listaBidimensionalDesordenada, i) {
    function ordenarValor(valorAcumulado, nuevoValor) {
      console.log(valorAcumulado[i], nuevoValor[i]);
      return valorAcumulado[i] - nuevoValor[i];
    }

    return listaBidimensionalDesordenada.sort(ordenarValor);
  };

const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];

function valorRealNotasCreditos(notes) {
  return notes.note * notes.credit;
}

const valorNotasCreditos = notes.map(valorRealNotasCreditos);

function sumaNotasPonderadas(sum = 0, newVal) {
  return sum + newVal;
}

const sumaNotasPonderadasResultado =
  valorNotasCreditos.reduce(sumaNotasPonderadas);

const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});

const promedioPonderado = sumaNotasPonderadasResultado / sumOfCredits;

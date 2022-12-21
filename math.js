const ladoCuadrado = 5;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const radioCirculo = 3;

// El uso de funciones permite reusar el código

function operacionesCuadrado(ladoCuadrado) {
  const perimetroCuadrado = ladoCuadrado * 4;
  const areaCuadrado = ladoCuadrado * ladoCuadrado;
  return {
    perimetroCuadrado,
    areaCuadrado,
  };
}

function operacionesTriangulo(lado1, lado2, base, altura) {
  const perimetroTriangulo = lado1 + lado2 + base;
  const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;
  return {
    perimetroTriangulo,
    areaTriangulo,
  };
}

function calcularAlturaTraingulo(lado1, base) {
  if (lado1 == base) {
    console.warn("Este no es un triángulo isosceles");
  } else {
    return Math.sqrt(Math.pow(lado1, 2) - Math.pow(lado1, 2) / 4);
  }
}

function calcularAlturaTrianguloEscaleno(ladoa, ladob, ladoc, base) {
  const semiperimetro = (ladoa + ladob + ladoc) / 2;
  if (ladoa == ladob || ladoa == ladoc || ladob == ladoc) {
    console.warn("Este no es un triángulo escaleno");
  }
  {
    return (
      (2 / base) *
      Math.sqrt(
        semiperimetro *
          (semiperimetro - ladoa) *
          (semiperimetro - ladob) *
          (semiperimetro - ladoc)
      )
    );
  }
}

function operacionesCirculo(radio) {
  const diametro = radioCirculo * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  const circunferencia = diametro * Math.PI;
  const areaCirculo = radioAlCuadrado * Math.PI;

  return {
    circunferencia,
    areaCirculo,
  };
}

// Se puede usar diferentes tipos de console
//group
//endGroup
//warn
//log

console.log({
  triangulo: operacionesTriangulo(
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo
  ),
  cuadrado: operacionesCuadrado(ladoCuadrado),
  circulo: operacionesCirculo(radioCirculo),
});

/**-------------------------------------- */

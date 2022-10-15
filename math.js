const ladoCuadrado = 5;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

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
});

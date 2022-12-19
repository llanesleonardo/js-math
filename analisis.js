console.log(salarios);

// Analisis personal para Juanita

function encontrarDatosPersona(arregloSalarios, personaBuscar) {
  function filtradoDePersonasySalarios(persona) {
    return persona.name == personaBuscar;
  }

  const datosPersona = arregloSalarios.find(filtradoDePersonasySalarios);

  console.log(datosPersona);

  return datosPersona;
}

medianaSalariosPersona(salarios, "Juanita");

function medianaSalariosPersona(salarios, personaBuscar) {
  const personaEcontradatrabajos = encontrarDatosPersona(
    salarios,
    personaBuscar
  ).trabajos;

  const SalariosEnBaseTrabajo = personaEcontradatrabajos.map((trabajo) => {
    return trabajo.salario;
  });

  const mediana = PlatziMath.calcularMediana(SalariosEnBaseTrabajo);

  console.log(SalariosEnBaseTrabajo, mediana);
}

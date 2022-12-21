//console.log(salarios);

// Analisis personal para Juanita

function encontrarDatosPersona(arregloSalarios, personaBuscar) {
  function filtradoDePersonasySalarios(persona) {
    return persona.name == personaBuscar;
  }

  const datosPersona = arregloSalarios.find(filtradoDePersonasySalarios);

  //console.log(datosPersona);

  return datosPersona;
}

medianaSalariosPersona(salarios, "Juanita");

function medianaSalariosPersona(arregloSalarios, personaBuscar) {
  const personaEncontradatrabajos = encontrarDatosPersona(
    arregloSalarios,
    personaBuscar
  ).trabajos;

  const SalariosEnBaseTrabajo = personaEncontradatrabajos.map((trabajo) => {
    return trabajo.salario;
  });

  const mediana = PlatziMath.calcularMediana(SalariosEnBaseTrabajo);

  // console.log(SalariosEnBaseTrabajo, mediana);

  return mediana;
}

/************************************** */

function proyeccionPorPersona(arregloSalarios, personaBuscar) {
  const personaEncontradatrabajos = encontrarDatosPersona(
    arregloSalarios,
    personaBuscar
  ).trabajos;

  const SalariosEnBaseTrabajo = personaEncontradatrabajos.map((trabajo) => {
    return trabajo.salario;
  });

  let crecimientoSalario = [];

  for (let index = 1; index < personaEncontradatrabajos.length; index++) {
    const salarioActual = personaEncontradatrabajos[index].salario;
    const salarioAnterior = personaEncontradatrabajos[index - 1].salario;
    const incrementoSalario = salarioActual - salarioAnterior;

    const incrementoPrcentajeSalario = incrementoSalario / salarioAnterior;

    crecimientoSalario.push(incrementoPrcentajeSalario);
  }
  const medianaPorcentajes = PlatziMath.calcularMediana(crecimientoSalario);

  //console.log("Crecimiento Salario", crecimientoSalario);
  //console.log("Mediana", medianaPorcentajes);

  const cercimientoPorcentaje = crecimientoSalario.map((incrementoSalario) => {
    return Math.floor(incrementoSalario * 100) + "%";
  });
  //console.log("Crecimiento Salario en Porcentaje", cercimientoPorcentaje);

  const ultimoSalario =
    personaEncontradatrabajos[personaEncontradatrabajos.length - 1].salario;

  // console.log(ultimoSalario);
  const nuevoSalario = ultimoSalario * medianaPorcentajes + ultimoSalario;

  return nuevoSalario;
}

//console.log(proyeccionPorPersona(salarios, "Juanita"));

// Analisis Empresarial

function encontrarDatosEmpresas(arregloSalarios) {
  const trabajoPorPersona = [];
  const trabajoComoObjeto = {};
  const salarios = [];
  let contadador = 0;
  arregloSalarios.forEach((persona) => {
    let trabajoPorPersona = persona.trabajos;
    trabajoPorPersona.forEach((trabajo) => {
      if (!trabajoComoObjeto[trabajo.empresa]) {
        trabajoComoObjeto[trabajo.empresa] = {};
      }

      if (!trabajoComoObjeto[trabajo.empresa][trabajo.year]) {
        trabajoComoObjeto[trabajo.empresa][trabajo.year] = [];
      }

      trabajoComoObjeto[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
  });

  // console.log(trabajoComoObjeto);
  return trabajoComoObjeto;
}

function medianaDeEmpresasPorAnio(salarios) {
  const objetoEmpresa = encontrarDatosEmpresas(salarios);
  const arregloObjetosEmpresa = Object.entries(objetoEmpresa);
  let objetoMedianasPorEmpresaAnio = {};
  let mediana;
  //console.log(objetoEmpresa);

  for (const empresa of arregloObjetosEmpresa) {
    // console.log(empresa);
    if (!objetoMedianasPorEmpresaAnio[empresa[0]]) {
      objetoMedianasPorEmpresaAnio[empresa[0]] = {};
    }
    const arrayAnios = Object.entries(empresa[1]);

    for (const salario of arrayAnios) {
      mediana = PlatziMath.calcularMediana(salario[1]);
      if (!objetoMedianasPorEmpresaAnio[empresa[0]][salario[0]]) {
        objetoMedianasPorEmpresaAnio[empresa[0]][salario[0]] = mediana;
      }
    }
  }

  return objetoMedianasPorEmpresaAnio;
}

//console.log(medianaDeEmpresasPorAnio(salarios));

function medianaPorEmpresaPorAnio(salarios, nombre, anio) {
  const objetoEmpresa = encontrarDatosEmpresas(salarios);

  if (!objetoEmpresa[nombre]) {
    console.warn("No existe la empresa");
    return;
  }

  if (!objetoEmpresa[nombre][anio]) {
    console.warn("No existe el anio");
    return;
  }

  return PlatziMath.calcularMediana(objetoEmpresa[nombre][anio]);
}

//console.log(medianaPorEmpresaPorAnio(salarios, "Freelance", "2050"));

function proyeccionSalariosPorEmpresas(salarios, empresaParam) {
  const incrementoMedianas = [];
  const medianasPorEmpresaPorAnioValor = Object.entries(
    medianaDeEmpresasPorAnio(salarios)
  );

  //console.log(empresaParam);
  function empresaFiltradaFunction(empresa) {
    return empresa[0] === empresaParam;
  }

  const empresaFiltrada = medianasPorEmpresaPorAnioValor.find(
    empresaFiltradaFunction
  );

  // console.log(empresaFiltrada);

  salariosParaMediana = Object.values(empresaFiltrada[1]);

  // console.log(salariosParaMediana);

  for (let index = 1; index < salariosParaMediana.length; index++) {
    const medianaActual = salariosParaMediana[index];
    const medianaAnterior = salariosParaMediana[index - 1];
    const incrementoMediana = medianaActual - medianaAnterior;
    const incrementoMedianaComparacion = incrementoMediana / medianaAnterior;
    incrementoMedianas.push(incrementoMedianaComparacion);
  }

  // console.log(incrementoMedianas);
  const incrementoMedianadeMedianas =
    PlatziMath.calcularMediana(incrementoMedianas);

  const ultimoSalario = salariosParaMediana[salariosParaMediana.length - 1];

  const nuevoSalarioSigAnio =
    ultimoSalario + ultimoSalario * incrementoMedianadeMedianas;

  //console.log(nuevoSalarioSigAnio);
  return nuevoSalarioSigAnio;
}

proyeccionSalariosPorEmpresas(salarios, "MarketerosCOL");

function analisisGeneralMedianas(salarios) {
  function obtenerNombres(persona) {
    return persona.name;
  }
  const nombres = salarios.map(obtenerNombres);
  let medianaPorPersona = [];

  for (const nombre of nombres) {
    // console.log(nombre);
    medianaPorPersona.push(medianaSalariosPersona(salarios, nombre));
  }

  const medianaGeneral = PlatziMath.calcularMediana(medianaPorPersona);

  return medianaGeneral;
}

console.log(analisisGeneralMedianas(salarios));

function analisisTop10Medianas(salarios) {
  function obtenerNombres(persona) {
    return persona.name;
  }
  const nombres = salarios.map(obtenerNombres);
  let medianaPorPersona = [];
  for (const nombre of nombres) {
    // console.log(nombre);
    medianaPorPersona.push(medianaSalariosPersona(salarios, nombre));
  }

  const listaOrdenadaMedianas =
    PlatziMath.ordenarValoresLista(medianaPorPersona);

  const cantidad = listaOrdenadaMedianas.length / 10;
  const limite = listaOrdenadaMedianas.length - cantidad;

  const top10 = listaOrdenadaMedianas.slice(
    limite,
    listaOrdenadaMedianas.length
  );

  return PlatziMath.calcularMediana(top10);
}

console.log(analisisTop10Medianas(salarios));

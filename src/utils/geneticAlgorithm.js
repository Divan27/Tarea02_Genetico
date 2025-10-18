
function generarPoblacionInicial(tamanoPoblacion, cantidadNumeros) {
  const poblacion = [];
  for (let i = 0; i < tamanoPoblacion; i++) {
    const individuo = [];
    for (let j = 0; j < cantidadNumeros; j++) {
      individuo.push(Math.random() < 0.5 ? 0 : 1);
    }
    poblacion.push(individuo);
  }
  return poblacion;
}

function calcularSuma(individuo, numeros) {
  let suma = 0;
  for (let i = 0; i < individuo.length; i++) {
    if (individuo[i] === 1) {
      suma = suma + numeros[i];
    }
  }
  return suma;
}

function calcularAptitud(individuo, numeros, limite) {
  const suma = calcularSuma(individuo, numeros);
  if (suma > limite) {
    return 0;
  }
  return suma;
}

function seleccionTorneo(poblacion, aptitudes) {
  const indice1 = Math.floor(Math.random() * poblacion.length);
  const indice2 = Math.floor(Math.random() * poblacion.length);
  if (aptitudes[indice1] > aptitudes[indice2]) {
    return poblacion[indice1];
  } else {
    return poblacion[indice2];
  }
}

function cruzar(padre1, padre2) {
  const puntoCorte = Math.floor(Math.random() * padre1.length);
  const hijo1 = [];
  const hijo2 = [];
  for (let i = 0; i < padre1.length; i++) {
    if (i < puntoCorte) {
      hijo1.push(padre1[i]);
      hijo2.push(padre2[i]);
    } else {
      hijo1.push(padre2[i]);
      hijo2.push(padre1[i]);
    }
  }
  return [hijo1, hijo2];
}

function mutar(individuo, probabilidadMutacion) {
  const individuoMutado = [];
  for (let i = 0; i < individuo.length; i++) {
    if (Math.random() < probabilidadMutacion) {
      individuoMutado.push(individuo[i] === 0 ? 1 : 0);
    } else {
      individuoMutado.push(individuo[i]);
    }
  }
  return individuoMutado;
}

export function runGeneticAlgorithm(numeros, limite, tamanoPoblacion = 10, numeroGeneraciones = 100) {
  const resultados = {
    generaciones: [],
    mejorSolucion: null,
    generacionMejorSolucion: 0,
    mejorAptitud: 0
  };
  let poblacion = generarPoblacionInicial(tamanoPoblacion, numeros.length);
  for (let generacion = 1; generacion <= numeroGeneraciones; generacion++) {
    const aptitudes = [];
    for (let i = 0; i < poblacion.length; i++) {
      const aptitud = calcularAptitud(poblacion[i], numeros, limite);
      aptitudes.push(aptitud);
    }
    let mejorIndiceGeneracion = 0;
    for (let i = 1; i < aptitudes.length; i++) {
      if (aptitudes[i] > aptitudes[mejorIndiceGeneracion]) {
        mejorIndiceGeneracion = i;
      }
    }
    const mejorIndividuoGeneracion = poblacion[mejorIndiceGeneracion];
    const mejorAptitudGeneracion = aptitudes[mejorIndiceGeneracion];
    const sumaGeneracion = calcularSuma(mejorIndividuoGeneracion, numeros);
    resultados.generaciones.push({
      numero: generacion,
      mejorAptitud: mejorAptitudGeneracion,
      mejorSuma: sumaGeneracion,
      mejorIndividuo: mejorIndividuoGeneracion.slice(),
      individuos: poblacion.map((ind, idx) => ({
        cromosoma: ind.slice(),
        aptitud: aptitudes[idx],
        subconjunto: ind.map((bit, i) => bit === 1 ? numeros[i] : null).filter(x => x !== null)
      }))
    });
    if (mejorAptitudGeneracion > resultados.mejorAptitud) {
      resultados.mejorAptitud = mejorAptitudGeneracion;
      resultados.mejorSolucion = mejorIndividuoGeneracion.slice();
      resultados.generacionMejorSolucion = generacion;
    }

    
    const nuevaPoblacion = [];
    nuevaPoblacion.push(mejorIndividuoGeneracion.slice());
    while (nuevaPoblacion.length < tamanoPoblacion) {
      const padre1 = seleccionTorneo(poblacion, aptitudes);
      const padre2 = seleccionTorneo(poblacion, aptitudes);
      const hijos = cruzar(padre1, padre2);
      const hijo1Mutado = mutar(hijos[0], 0.1);
      const hijo2Mutado = mutar(hijos[1], 0.1);
      nuevaPoblacion.push(hijo1Mutado);
      if (nuevaPoblacion.length < tamanoPoblacion) {
        nuevaPoblacion.push(hijo2Mutado);
      }
    }
    poblacion = nuevaPoblacion;
  }
  return resultados;
}

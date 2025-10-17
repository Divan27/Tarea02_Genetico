import { runGeneticAlgorithm } from '../utils/geneticAlgorithm';

function FinalSolution({ resultado, numbers }) {
  if (!resultado) return null;
  const { mejorSolucion, mejorAptitud, generacionMejorSolucion } = resultado;
  // Convertir el vector binario a subconjunto de números
  const subconjuntoOptimo = numbers
    ? numbers.filter((num, idx) => mejorSolucion[idx] === 1)
    : [];
  return (
    <section>
      <h2>Mejor solución encontrada</h2>
      <p>Subconjunto óptimo: {subconjuntoOptimo.join(', ')}</p>
      <p>Aptitud: {mejorAptitud}</p>
      <p>Generación: {generacionMejorSolucion}</p>
    </section>
  );
}

export default FinalSolution;

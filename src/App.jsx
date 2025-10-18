
/**
 * @fileoverview Componente principal de la aplicación de Algoritmo Genético
 * 
 * Esta aplicación implementa una interfaz gráfica para resolver el problema de optimización
 * de subconjuntos usando algoritmos genéticos. Permite al usuario establecer un límite
 * y ejecutar el algoritmo para encontrar el mejor subconjunto de números que se acerque
 * al límite sin excederlo.
 * 
 * @author Roymar Castillo
 * @author Dilan Zamora
 * 
 * @version 1.0.0
 */

import './App.css';
import Header from './components/Header';
import LimitInput from './components/LimitInput';
import NumberSet from './components/NumberSet';
import GenerationProgress from './components/GenerationProgress';
import FinalSolution from './components/FinalSolution';
import { useState } from 'react';
import { runGeneticAlgorithm } from './utils/geneticAlgorithm';

/**
 * Componente principal de la aplicación
 * 
 * Maneja el estado global de la aplicación y coordina la interacción entre todos
 * los componentes hijos. Controla la ejecución del algoritmo genético y la
 * visualización de los resultados.
 * 
 * @component
 * @returns {JSX.Element} El layout completo de la aplicación
 */
function App() {
  // Estados para manejar los datos del algoritmo genético
  const [numbers, setNumbers] = useState([]); // Conjunto de números generados aleatoriamente
  const [limit, setLimit] = useState(0); // Límite superior establecido por el usuario
  const [resultado, setResultado] = useState(null); // Resultado final del algoritmo
  const [generaciones, setGeneraciones] = useState([]); // Historial de todas las generaciones

  /**
   * Ejecuta el algoritmo genético completo
   * 
   * Genera un conjunto aleatorio de números y ejecuta el algoritmo genético
   * para encontrar el mejor subconjunto que se acerque al límite establecido.
   * 
   * @function
   * @returns {void}
   */
  const handleRunAlgorithm = () => {
    if (!limit) return;
    
    // Generar conjunto aleatorio de números
    const cantidad = 10;
    const min = 1;
    const max = limit;
    const nuevos = Array.from({ length: cantidad }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    setNumbers(nuevos);
    
    // Ejecutar el algoritmo genético
    const res = runGeneticAlgorithm(nuevos, limit);
    setResultado(res);
    setGeneraciones(res.generaciones);
  };

  /**
   * Maneja el cambio del límite establecido por el usuario
   * 
   * Actualiza el límite y resetea los resultados anteriores para permitir
   * una nueva ejecución del algoritmo.
   * 
   * @function
   * @param {number} value - Nuevo valor del límite
   * @returns {void}
   */
  const handleLimitChange = (value) => {
    setLimit(value);
    setResultado(null);
    setGeneraciones([]);
  };

  return (
    <div className="app-desktop-container">
      <Header />
      <main className="main-content">
        <div className="left-column">
          <section className="controls-panel card">
            <h2>Configuración</h2>
            <LimitInput onLimitChange={handleLimitChange} />
            <NumberSet numbers={numbers} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
              <button className="main-action-btn" onClick={handleRunAlgorithm} disabled={!limit}>
                Iniciar Algoritmo Genético
              </button>
            </div>
          </section>
          <section className="solution-panel card">
            <FinalSolution resultado={resultado} numbers={numbers} />
          </section>
        </div>
        <section className="progress-panel card">
          <GenerationProgress generaciones={generaciones} />
        </section>
      </main>
    </div>
  );
}

export default App;

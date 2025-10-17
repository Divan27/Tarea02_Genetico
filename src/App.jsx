

import './App.css';
import Header from './components/Header';
import LimitInput from './components/LimitInput';
import NumberSet from './components/NumberSet';
import GenerationProgress from './components/GenerationProgress';
import FinalSolution from './components/FinalSolution';
import { useState } from 'react';
import { runGeneticAlgorithm } from './utils/geneticAlgorithm';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [limit, setLimit] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [generaciones, setGeneraciones] = useState([]);

  // Generar un conjunto aleatorio de números (puedes ajustar cantidad/rango)
  const generarNumeros = () => {
    const cantidad = 10;
    const min = 1;
    const max = 50;
    const nuevos = Array.from({ length: cantidad }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    setNumbers(nuevos);
    setResultado(null);
    setGeneraciones([]);
  };

  // Ejecutar el algoritmo genético
  const handleRunAlgorithm = () => {
    if (numbers.length === 0 || !limit) return;
    const res = runGeneticAlgorithm(numbers, limit);
    setResultado(res);
    setGeneraciones(res.generaciones);
  };

  // Manejar cambio de límite
  const handleLimitChange = (value) => {
    setLimit(value);
    setResultado(null);
    setGeneraciones([]);
  };

  return (
    <div className="app-desktop-container">
      <Header />
      <main className="main-content">
        <section className="controls-panel card">
          <h2>Configuración</h2>
          <LimitInput onLimitChange={handleLimitChange} />
          <NumberSet numbers={numbers} />
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={generarNumeros}>Generar Números</button>
            <button className="main-action-btn" onClick={handleRunAlgorithm} disabled={numbers.length === 0 || !limit}>
              Iniciar Algoritmo Genético
            </button>
          </div>
        </section>
        <section className="results-panel card">
          <h2>Resultados</h2>
          <GenerationProgress generaciones={generaciones} />
          <FinalSolution resultado={resultado} numbers={numbers} />
        </section>
      </main>
    </div>
  );
}

export default App;

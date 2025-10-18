

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

  
  const handleRunAlgorithm = () => {
    if (!limit) return;
    
    
    const cantidad = 10;
    const min = 1;
    const max = limit;
    const nuevos = Array.from({ length: cantidad }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    setNumbers(nuevos);
    
    
    const res = runGeneticAlgorithm(nuevos, limit);
    setResultado(res);
    setGeneraciones(res.generaciones);
  };

  
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

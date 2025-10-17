import { useState } from 'react';
import Header from './components/Header';
import LimitInput from './components/LimitInput';
import NumberSet from './components/NumberSet';
import GenerationProgress from './components/GenerationProgress';
import FinalSolution from './components/FinalSolution';
import './App.css';

function App() {
  const [limit, setLimit] = useState(0);
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const randomSet = Array.from({ length: 25 }, () =>
      Math.floor(Math.random() * 50 + 1)
    );
    setNumbers(randomSet);
  };

  return (
    <div className="app-container">
      <Header />
      <LimitInput onLimitChange={setLimit} />
      <button onClick={generateNumbers}>Generar conjunto aleatorio</button>
      <NumberSet numbers={numbers} />
      <GenerationProgress />
      <FinalSolution />
    </div>
  );
}

export default App;

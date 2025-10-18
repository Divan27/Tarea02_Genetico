import { useState } from 'react';

function LimitInput({ onLimitChange }) {
  const [limit, setLimit] = useState('');

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setLimit(value);
    onLimitChange(value);
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label htmlFor="limit">Valor límite L:</label>
      <input
        type="number"
        id="limit"
        value={limit}
        onChange={handleChange}
        placeholder="Ingrese el valor de L"
        min="1"
      />
    </div>
  );
}

export default LimitInput;

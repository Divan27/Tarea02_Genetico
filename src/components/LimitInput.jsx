import { useState } from 'react';

function LimitInput({ onLimitChange }) {
  const [limit, setLimit] = useState('');

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setLimit(value);
    onLimitChange(value);
  };

  return (
    <section>
      <label htmlFor="limit">Valor límite L:</label>
      <input
        type="number"
        id="limit"
        value={limit}
        onChange={handleChange}
        placeholder="Ingrese el valor de L"
      />
    </section>
  );
}

export default LimitInput;

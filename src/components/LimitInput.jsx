/**
 * @fileoverview Componente LimitInput para configurar el límite del algoritmo
 * 
 * Este componente permite al usuario establecer el valor límite superior (L)
 * que el algoritmo genético utilizará como restricción para la optimización
 * de subconjuntos.
 * 
 * @author Roymar Castillo
 * @author Dilan Zamora
 * 
 * @version 1.0.0
 */

import { useState } from 'react';

/**
 * Componente LimitInput para entrada del valor límite
 * 
 * Renderiza un campo de entrada numérico que permite al usuario establecer
 * el límite superior para el problema de optimización.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onLimitChange - Función callback que se ejecuta cuando cambia el límite
 * @returns {JSX.Element} Input numérico con label para el valor límite
 */
function LimitInput({ onLimitChange }) {
  /** @type {[string, Function]} Estado local para el valor del input */
  const [limit, setLimit] = useState('');

  /**
   * Maneja el cambio de valor en el input
   * 
   * Convierte el valor a número entero, actualiza el estado local
   * y notifica al componente padre del cambio.
   * 
   * @function
   * @param {Event} e - Evento de cambio del input
   * @returns {void}
   */
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

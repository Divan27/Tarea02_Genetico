
function FinalSolution({ resultado, numbers }) {
  if (!resultado || !resultado.mejorSolucion) {
    return (
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#fff' }}>
          Mejor solución encontrada
        </h3>
        <p style={{ color: '#e0e6f0', fontStyle: 'italic' }}>No se ha encontrado una solución aún.</p>
      </div>
    );
  }
  const { mejorSolucion, mejorAptitud, generacionMejorSolucion } = resultado;
  const subconjuntoOptimo = numbers.filter((num, idx) => mejorSolucion[idx] === 1);
  return (
    <div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#fff' }}>
        Mejor solución encontrada
      </h3>
      <div style={{ background: '#0d1320', padding: '1.5rem', borderRadius: '8px' }}>
        <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
          <strong>Subconjunto óptimo:</strong><br/>
          <span style={{ color: '#4ade80', fontSize: '1.1rem', fontWeight: '600' }}>
            {subconjuntoOptimo.join(', ')}
          </span>
        </p>
        <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem' }}>
          <strong>Aptitud:</strong> <span style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: '600' }}>{mejorAptitud}</span>
        </p>
        <p style={{ marginBottom: '0', fontSize: '1.05rem' }}>
          <strong>Generación:</strong> <span style={{ color: '#fbbf24', fontSize: '1.1rem', fontWeight: '600' }}>{generacionMejorSolucion}</span>
        </p>
      </div>
    </div>
  );
}

export default FinalSolution;

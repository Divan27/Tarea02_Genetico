
function FinalSolution({ resultado, numbers }) {
  if (!resultado || !resultado.mejorSolucion) {
    return (
      <div>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginTop: '0', marginBottom: '1rem', color: '#1a1a1a', borderBottom: '2px solid #1a1a1a', paddingBottom: '0.5rem' }}>
          Mejor solución encontrada
        </h2>
        <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '0.9rem' }}>No se ha encontrado una solución aún.</p>
      </div>
    );
  }
  const { mejorSolucion, mejorAptitud, generacionMejorSolucion } = resultado;
  const subconjuntoOptimo = numbers.filter((num, idx) => mejorSolucion[idx] === 1);
  return (
    <div>
      <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginTop: '0', marginBottom: '1rem', color: '#1a1a1a', borderBottom: '2px solid #1a1a1a', paddingBottom: '0.5rem' }}>
        Mejor solución encontrada
      </h2>
      <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '8px', border: '2px solid #60a5fa' }}>
        <p style={{ marginBottom: '0.75rem', fontSize: '0.95rem', color: '#1a1a1a' }}>
          <strong>Subconjunto óptimo:</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {subconjuntoOptimo.map((num, idx) => (
            <span key={idx} style={{ background: '#1a2233', color: '#fff', padding: '0.4rem 0.7rem', borderRadius: '6px', fontSize: '0.95rem', fontWeight: '600' }}>
              {num}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={{ marginBottom: '0', fontSize: '0.95rem', color: '#1a1a1a' }}>
            <strong>Aptitud:</strong> <span style={{ color: '#2563eb', fontSize: '1.1rem', fontWeight: '700' }}>{mejorAptitud}</span>
          </p>
          <p style={{ marginBottom: '0', fontSize: '0.95rem', color: '#1a1a1a' }}>
            <strong>Gen:</strong> <span style={{ color: '#d97706', fontSize: '1.1rem', fontWeight: '700' }}>{generacionMejorSolucion}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalSolution;

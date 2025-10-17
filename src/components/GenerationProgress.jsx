function GenerationProgress({ generaciones }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#fff' }}>
        Progreso de generaciones
      </h3>
      {!generaciones || generaciones.length === 0 ? (
        <p style={{ color: '#e0e6f0', fontStyle: 'italic' }}>
          Aquí se mostrará cómo evoluciona la solución en cada generación.
        </p>
      ) : (
        <div style={{ maxHeight: '200px', overflowY: 'auto', padding: '0.5rem', background: '#0d1320', borderRadius: '6px' }}>
          {generaciones.map((gen, idx) => (
            <div key={idx} style={{ marginBottom: '0.5rem', padding: '0.5rem', borderBottom: '1px solid #2d3a4a' }}>
              <p style={{ margin: '0.25rem 0', fontSize: '0.95rem' }}>
                <strong>Gen {gen.numero}:</strong> Aptitud = {gen.mejorAptitud}, Suma = {gen.mejorSuma}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenerationProgress;

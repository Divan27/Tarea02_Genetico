function NumberSet({ numbers }) {
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3a4a' }}>
        Conjunto de números generados
      </h3>
      <div className="number-set">
        {numbers.length === 0 ? (
          <p style={{ color: '#6b7280', fontStyle: 'italic' }}>No hay números generados aún.</p>
        ) : (
          numbers.map((num, index) => (
            <span key={index}>{num}</span>
          ))
        )}
      </div>
    </div>
  );
}

export default NumberSet;

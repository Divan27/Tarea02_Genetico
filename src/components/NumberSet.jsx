function NumberSet({ numbers }) {
  return (
    <section>
      <h2>Conjunto de números generados</h2>
      <div className="number-set">
        {numbers.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>
    </section>
  );
}

export default NumberSet;

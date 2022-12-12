const Statistics = props => {
  const { stats, title } = props;
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(elem => (
          <li key={elem.id}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

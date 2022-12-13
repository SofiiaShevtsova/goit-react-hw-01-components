import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = props => {
  const { stats, title } = props;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={styles.stat_item}
            style={{
              backgroundColor: `${getRandomHexColor()}`,
            }}
          >
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;

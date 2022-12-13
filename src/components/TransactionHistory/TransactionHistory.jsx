import PropTypes from 'prop-types';
import styles from './history.module.css';

const TransactionHistory = props => {
  const { transactions } = props;
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.table_head}>
        <tr>
          <th className={styles.table_h_name}>Type</th>
          <th className={styles.table_h_name}>Amount</th>
          <th className={styles.table_h_name}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.table_body}>
        {transactions.map(elem => tableTransactionType(elem))}
      </tbody>
    </table>
  );
};

const tableTransactionType = elem => {
  return (
    <tr key={elem.id}>
      <td className={styles.table_h_name}>{elem.type}</td>
      <td className={styles.table_h_name}>{elem.amount}</td>
      <td className={styles.table_h_name}>{elem.currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
const TransactionHistory = props => {
  const { transactions } = props;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions.map(elem => tableTransactionType(elem))}</tbody>
    </table>
  );
};

const tableTransactionType = elem => {
  return (
    <tr key={elem.id}>
      <td>{elem.type}</td>
      <td>{elem.amount}</td>
      <td>{elem.currency}</td>
    </tr>
  );
};

export default TransactionHistory;

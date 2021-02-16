import React from 'react';
import transactions from '../transactions.json';
import SingleTransaction from './SingleTransaction/SingleTransaction';

const TransactionHistory = () => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(el => (
            <SingleTransaction key={el.id} {...el} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

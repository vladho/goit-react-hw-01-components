import React from 'react';
import transactions from '../../utils/transactions.json';
import SingleTransaction from './SingleTransaction/SingleTransaction';
import { transaction, header } from './TransactionHistory.module.css';

const TransactionHistory = () => {
  return (
    <>
      <table className={transaction}>
        <thead className={header}>
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

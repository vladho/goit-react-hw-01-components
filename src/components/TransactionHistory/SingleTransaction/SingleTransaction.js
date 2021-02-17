import React from 'react';
import PropTypes from 'prop-types';

const SingleTransaction = props => {
  const { type, amount, currency } = props;
  console.log(props);
  return (
    <>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

SingleTransaction.propTypes = {};

export default SingleTransaction;

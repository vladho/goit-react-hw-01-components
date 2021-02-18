import React from 'react';
import PropTypes from 'prop-types';

const SingleTransaction = props => {
  const { type, amount, currency } = props;
  // console.log(props);
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

SingleTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default SingleTransaction;

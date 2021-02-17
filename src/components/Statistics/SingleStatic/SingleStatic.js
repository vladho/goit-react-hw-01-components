import React from 'react';
import PropTypes from 'prop-types';
import './SingleStatic.css';

const SingleStatic = ({ label, percentage }) => {
  return (
    <>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </>
  );
};

SingleStatic.propTypes = {};

export default SingleStatic;

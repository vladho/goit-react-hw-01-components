import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleStatic.module.css';

const randomColor = () => {
  let r = Math.round(255.0 * Math.random());
  let g = Math.round(255.0 * Math.random());
  let d = Math.round(255.0 * Math.random());

  let col = `rgb(${r},${g},${d})`;
  return col;
};

const SingleStatic = ({ label, percentage }) => {
  return (
    <>
      <li className={styles.item} style={{ backgroundColor: randomColor() }}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    </>
  );
};

SingleStatic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SingleStatic;

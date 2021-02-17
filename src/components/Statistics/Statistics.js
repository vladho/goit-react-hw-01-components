import React from 'react';
import PropTypes from 'prop-types';
// import stastical from '../statistical-data.json';
import SingleStatic from './SingleStatic/SingleStatic';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map(el => (
          <SingleStatic key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

SingleStatic.propTypes = {};

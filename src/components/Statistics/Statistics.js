import React from 'react';
import PropTypes from 'prop-types';
// import stastical from '../statistical-data.json';
import SingleStatic from './SingleStatic/SingleStatic';
import { container, title, list } from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  // console.log(typeof title);
  return (
    <section className={container}>
      {title && <h2 className={title}>Upload stats</h2>}
      <ul className={list}>
        {stats.map(el => (
          <SingleStatic key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

SingleStatic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};

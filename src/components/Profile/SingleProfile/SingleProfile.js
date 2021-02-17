import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleProfile.module.css';

const ProfileList = props => {
  const { name, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;
  console.log(stats);
  return (
    <>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.img} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Followers </span>
          <span className={styles.label}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views </span>
          <span className={styles.label}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes </span>
          <span className={styles.label}>{likes}</span>
        </li>
      </ul>
    </>
  );
};

ProfileList.propTypes = {};

export default ProfileList;

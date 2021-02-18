import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleFriend.module.css';

const SingleFriend = props => {
  const { avatar, name, isOnline } = props;

  return (
    <li className={styles.item}>
      {isOnline ? (
        <span className={styles.online}></span>
      ) : (
        <span className={styles.offline}></span>
      )}
      {/* <span className={isOnline ? `{styles.online}` : 'offline'}></span> */}
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

SingleFriend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default SingleFriend;

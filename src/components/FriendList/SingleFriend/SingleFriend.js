import React from 'react';
import PropTypes from 'prop-types';
import {
  item,
  online,
  offline,
  stylesAvatar,
  stylesName,
} from './SingleFriend.module.css';

const SingleFriend = props => {
  const { avatar, name, isOnline } = props;

  return (
    <li className={item}>
      <span className={isOnline ? online : offline}></span>
      <img className={stylesAvatar} src={avatar} alt="" width="48" />
      <p className={stylesName}>{name}</p>
    </li>
  );
};

SingleFriend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default SingleFriend;

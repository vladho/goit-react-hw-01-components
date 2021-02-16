import React from 'react';
import PropTypes from 'prop-types';

const SingleFriend = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

SingleFriend.propTypes = {};

export default SingleFriend;

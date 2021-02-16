import React from 'react';
import friends from '../friends.json';
import SingleFriend from './SingleFriend/SingleFriend';

const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <SingleFriend key={el.id} {...el} />
      ))}
    </ul>
  );
};
export default FriendList;

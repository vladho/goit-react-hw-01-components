import React from 'react';
import friends from '../../utils/friends.json';
import SingleFriend from './SingleFriend/SingleFriend';
import { list } from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={list}>
      {friends.map(el => (
        <SingleFriend key={el.id} {...el} />
      ))}
    </ul>
  );
};
export default FriendList;

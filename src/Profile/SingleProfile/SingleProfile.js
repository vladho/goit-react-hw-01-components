import React from 'react';
import PropTypes from 'prop-types';

const ProfileList = props => {
  const { name, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;
  console.log(stats);
  return (
    <>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </>
  );
};

ProfileList.propTypes = {};

export default ProfileList;

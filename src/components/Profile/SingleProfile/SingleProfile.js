import React from 'react';
import PropTypes from 'prop-types';
import {
  description,
  styleName,
  styleTag,
  styleLocation,
  list,
  item,
  label,
  img,
} from './SingleProfile.module.css';

const ProfileList = props => {
  const { name, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <>
      <div className={description}>
        <img src={avatar} alt="Аватар пользователя" className={img} />
        <p className={styleName}>{name}</p>
        <p className={styleTag}>{tag}</p>
        <p className={styleLocation}>{location}</p>
      </div>

      <ul className={list}>
        <li className={item}>
          <span className={label}>Followers </span>
          <span className={label}>{followers}</span>
        </li>
        <li className={item}>
          <span className={label}>Views </span>
          <span className={label}>{views}</span>
        </li>
        <li className={item}>
          <span className={label}>Likes </span>
          <span className={label}>{likes}</span>
        </li>
      </ul>
    </>
  );
};

ProfileList.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default ProfileList;

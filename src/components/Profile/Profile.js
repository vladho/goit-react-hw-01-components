import React from 'react';
import SingleProfile from './SingleProfile/SingleProfile';
import user from '../../utils/user.json';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <SingleProfile key={user.name} {...user} />
    </div>
  );
};

export default Profile;

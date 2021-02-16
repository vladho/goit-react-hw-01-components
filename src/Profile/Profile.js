import React from 'react';
import SingleProfile from './SingleProfile/SingleProfile';
import user from '.././user.json';

const Profile = () => {
  return (
    <div className="profile">
      <SingleProfile key={user.name} {...user} />
    </div>
  );
};

export default Profile;

import React from 'react';
import './UserInfo.css';
import avatar from '../assets/UserAvatar.png'; 

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src={avatar} alt="User Avatar" className="user-avatar" />
      <div className="user-details">
        <h2>Олена Баговець</h2>
        <p>22 роки</p>
        <p>+3 80501112233</p>
      </div>
    </div>
  );
};

export default UserInfo;
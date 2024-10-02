import React from 'react';
import './UserInfo.css';
import avatar from '../assets/UserAvatar.png';

interface User {
  firstName: string;
  age: number;
  mobile: string;
}

const UserInfo: React.FC<User> = ({ firstName, age, mobile }) => {
  return (
    <div className="user-info">
      <img src={avatar} alt="User Avatar" className="user-avatar" />
      <div className="user-details">
        {/* Подчеркиваем имя */}
        <h2>
          <span className="highlight">{firstName}</span>
        </h2>
        <p>{age} роки</p>
        <p>{mobile}</p>
      </div>
    </div>
  );
};

export default UserInfo;
import React from 'react';

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src="path_to_avatar" alt="Аватар" className="user-avatar" />
      <div className="user-details">
        <h2>Олена Баговец</h2>
        <p>22 роки</p>
        <p>+3 80501112233</p>
      </div>
    </div>
  );
};

export default UserInfo;
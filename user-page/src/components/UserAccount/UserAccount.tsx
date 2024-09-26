import React from 'react';
import Button from '../ui/Button';
import './UserAccount.css';

const UserAccount = () => {
  const handleLogout = () => {
    console.log('Логин завершен');
  };

  return (
    <div className="user-account">
      <div className="user-info">
        <h2>Олена Баговец</h2>
        <p>22 роки</p>
        <p>+3 80501112233</p>
        <Button text="Выйти" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default UserAccount;
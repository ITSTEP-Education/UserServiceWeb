import React from 'react';
import Button from '../ui/Button';
import UserInfo from '../UserInfo/UserInfo';
import Courses from './Courses';
import './UserAccount.css';

const UserAccount = () => {
  const handleLogin = () => {
    console.log('Login clicked');
    // Логика для входа
  };

  const handleDataDownload = () => {
    console.log('Завантажити дані clicked');
    // Логика для загрузки данных
  };

  return (
    <div className="user-account">
      {/* Информация о пользователе */}
      <UserInfo />

      {/* Кнопки */}
      <div className="button-section">
        <Button text="LOGIN" onClick={handleLogin} />
        <Button text="ЗАВАНТАЖИТИ ДАНІ" onClick={handleDataDownload} />
      </div>

      {/* Блок с курсами */}
      <Courses />
    </div>
  );
};

export default UserAccount;
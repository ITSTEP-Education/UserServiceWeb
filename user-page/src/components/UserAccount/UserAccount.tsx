import React, { useState } from 'react';
import Button from '../ui/Button';
import UserInfo from '../UserInfo/UserInfo';
import Courses from './Courses';
import './UserAccount.css';

const UserAccount = () => {
  // Добавляем состояния для имени, фамилии, возраста и телефона
  const [firstName, setFirstName] = useState('Олена');
  const [lastName, setLastName] = useState('Баговець');
  const [age, setAge] = useState(22);
  const [mobile, setMobile] = useState('+3 80501112233');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleDataDownload = () => {
    console.log('ЗАВАНТАЖИТИ ДАНІ clicked');
    // Логика для загрузки данных
  };

  return (
    <div className="user-account">
      {/* Поля ввода имени и фамилии */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Ім'я"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Прізвище"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input-field"
        />
        <Button text="ЗАВАНТАЖИТИ ДАНІ" className="custom-button" onClick={handleDataDownload} />
      </div>

      {/* Информация о пользователе */}
      <UserInfo firstName={firstName} lastName={lastName} age={age} mobile={mobile} />

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
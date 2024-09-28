import React from 'react';
import './MainContent.css'; // Подключаем стили
import googlePlay from '../assets/google_play.png';
import appStore from '../assets/app_store.png';
import image1 from '../assets/Image 1.png';
import image2 from '../assets/Image 2.png';
import LoginForm from '../LoginForm/LoginForm';
import UserInfo from '../UserInfo/UserInfo';
import Courses from '../UserAccount/Courses';
import Button from '../ui/Button';

const MainContent = () => {
  const handleDataDownload = () => {
    console.log('ЗАВАНТАЖИТИ ДАНІ clicked');
  };

  return (
    <div className="main-content">
      {/* Заголовок и картинки */}
      <div className="main-content-header">
        <h1>
          Освітня <br />
          екосистема для <br />
          розвитку кар'єри в IT
        </h1>
        <div className="main-content-images">
          <img src={image1} alt="Image 1" className="main-content-image" />
          <img src={image2} alt="Image 2" className="main-content-image" />
        </div>
      </div>

      {/* Блок логина */}
      <div className="login-section">
        <LoginForm />
        <div className="playstore-section">
          {/* Иконки магазинов */}
          <img src={googlePlay} alt="Google Play" className="store-icon" />
          <img src={appStore} alt="App Store" className="store-icon" />
          <Button text="ЗАВАНТАЖИТИ ДАНІ" className="custom-button" onClick={handleDataDownload} />
        </div>
      </div>

      {/* Блок информации о пользователе */}
      <UserInfo />

      {/* Блок с курсами */}
      <Courses />
    </div>
  );
};

export default MainContent;
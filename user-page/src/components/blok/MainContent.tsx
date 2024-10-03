import React, { useState } from 'react';
import { fetchUserData } from '../../services/api'; // Импортируем функцию из api.ts
import './MainContent.css';
import googlePlay from '../assets/google_play.png';
import appStore from '../assets/app_store.png';
import image1 from '../assets/Image 1.png';
import image2 from '../assets/Image 2.png';
import LoginForm from '../LoginForm/LoginForm';
import UserInfo from '../UserInfo/UserInfo';
import Courses from '../UserAccount/Courses';
import Button from '../ui/Button';
import { Input } from '../ui/Input.styled';

const MainContent: React.FC = () => {
  const [firstName, setFirstName] = useState(' ');
  const [lastName, setLastName] = useState(' ');

  const [userName, setUserName] = useState('');
  const [age, setAge] = useState(0);
  const [mobile, setMobile] = useState('+38  ');
  const [productName, setProductName] = useState('');
  const [typeEngeeniring, setTypeEngeeniring] = useState('');
  const [mounthPay, setMounthPay] = useState(0);
  const [mounthQty, setMounthQty] = useState(0.0);

  const [error, setError] = useState<string | null>(null);

  // Функция для обработки запроса на сервер
  const handleDataDownload = async () => {
    try {
      // Вызов функции API для загрузки данных пользователя
      const data = await fetchUserData(`${firstName}-${lastName}`); // Укажите username или другой параметр

      // Устанавливаем загруженные данные в состояние
      setUserName(data.userName);     
      setAge(data.age);
      setMobile(data.phone);
      setProductName(data.productName);
      setTypeEngeeniring(data.typeEngeeniring);
      setMounthPay(data.mounthPay);
      setMounthQty(data.mounthQty);
      // console.log('Загруженные данные:', data);
    } catch (error) {
      setError('Ошибка загрузки данных');
      // console.error('Ошибка:', error);
    }
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
        </div>
      </div>

      {/* Поля для имени и фамилии с кнопкой */}
      <div className="input-container">
        <Input
          type="text"
          placeholder="Ім'я"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Прізвище"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button
          text="ЗАВАНТАЖИТИ ДАНІ"
          className="custom-button"
          onClick={handleDataDownload}
        />
      </div>

      {/* Блок информации о пользователе */}
      <UserInfo
        userName={userName}
        age={age}
        mobile={mobile}
      />

      {/* Отображение сообщения об ошибке */}
      {error && <p className="error-message">{error}</p>}

      {/* Блок с курсами */}
      <Courses name={productName} typeEngeeniring={typeEngeeniring} mounthQty={mounthQty} mounthPay={mounthPay}/>
    </div>
  );
};

export default MainContent;
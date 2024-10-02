import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/user-data?username=YourUsername`);
        setUserData(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          {/* Эти данные отображаются при наличии userData */}
          {/* 
          <h2>{userData?.firstName} {userData?.lastName}</h2>
          <p>Возраст: {userData?.age}</p>
          <p>Телефон: {userData?.mobile}</p> 
          */}
        </div>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  );
};

export default UserData;
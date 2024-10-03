import React from 'react';
import './MainContainer.css';
import MainContent from '../blok/MainContent'; // Импортируем основной контент

const MainContainer = () => {
  return (
    <main className="main-container">
      {/* Включаем основной контент и другие компоненты */}
      <MainContent />
      {/* Здесь можно добавить другие компоненты */}
    </main>
  );
};

export default MainContainer;
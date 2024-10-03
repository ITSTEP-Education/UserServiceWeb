import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage'; // Страница логина
import MainContainer from './components/blok/MainContainer'; // Главная страница с контейнером

function App() {
  return (
    <Router>
      <Routes>
        {/* Редирект с корневого пути на /main */}
        <Route path="/" element={<Navigate to="/main" />} />

        {/* Маршрут для главной страницы (с MainContainer) */}
        <Route path="/main" element={<MainContainer />} />

        {/* Маршрут для страницы логина */}
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import UserAccount from './components/UserAccount/UserAccount';

function App() {
  return (
    <Router>
      <Routes>
        {/* Редирект с корневого пути на /account */}
        <Route path="/" element={<Navigate to="/account" />} />
        {/* Маршрут для страницы логина */}
        <Route path="/login" element={<LoginPage />} />
        {/* Маршрут для страницы аккаунта */}
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
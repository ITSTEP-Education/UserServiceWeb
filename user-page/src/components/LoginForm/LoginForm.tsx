import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Логика авторизации
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Ошибка авторизации');
      }

      const data = await response.json();
      console.log('Успешный вход:', data);
      // Сохранение токена или другая логика после успешной авторизации
    } catch (error) {
      setError('Ошибка авторизации. Попробуйте еще раз.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>ВХІД</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Логин"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        className="login-input"
      />
      <button type="submit" className="login-button">Логин</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default LoginForm;
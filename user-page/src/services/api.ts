import axios from 'axios';

// Функция для получения данных пользователя
export const fetchUserData = async (username: string) => {
  try {
    const response = await axios.get(`https://localhost:7228/api/v1/User/client-data/${username}`);
    return response.data; // Вернуть данные пользователя
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    throw error;
  }
};
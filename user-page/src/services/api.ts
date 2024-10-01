import axiosInstance from './axiosConfig'; // Импортируем настроенный экземпляр Axios

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7228/api/v1/User/client-data'; // Используем переменную окружения

// Функция для получения данных пользователя
export const fetchUserData = async (username: string) => {
  try {
    // Выполняем запрос с передачей параметра username
    const response = await axiosInstance.get(`${API_URL}/alla-pavlova`, { params: { username } });
    return response.data; // Возвращаем данные
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    throw error; // Пробрасываем ошибку дальше для обработки
  }
};
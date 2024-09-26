import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUserData = async (username: string) => {
  try {
    const response = await axios.get(`${API_URL}/api/admin/user-data`, { params: { username } });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
  }
};
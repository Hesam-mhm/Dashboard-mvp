import axios from 'axios';

export const frappeAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FRAPPE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios, { AxiosError, AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-hot-toast';
import { getCommonHeaders, handleError } from './settings';
import { requestsConstants } from './settings';

export const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: requestsConstants.timeout,
    headers: getCommonHeaders(),
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers = AxiosHeaders.from({ ...config.headers, ...getCommonHeaders() });
      return config;
    },
    (error: AxiosError) => {
      return handleError(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      if (!navigator.onLine) {
        toast.error('شما آفلاین هستید. لطفاً اتصال اینترنت خود را بررسی کنید.');
      }
      if (error.code === 'ECONNABORTED') {
        toast.error('درخواست طولانی شد و تایم‌اوت شد.');
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

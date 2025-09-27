import { toast } from 'react-hot-toast';
import baseUrls from './BaseUrls';

export const requestsConstants = {
  baseUrl: baseUrls.main,
  timeout: 60000,
  retryCount: 3,
  staleTime: 5 * 60 * 1000,
  gcTime: 30 * 60 * 1000,
};

export const getCommonHeaders = () => {
  const token = localStorage.getItem('Token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const handleError = (error: any) => {
  const message = error?.response?.data?.message || 'خطایی رخ داده است';
  //TODO : check it
  switch (error?.response?.status) {
    case 400:
      toast.error('درخواست نامعتبر است');
      break;
    case 401:
      toast.error('لطفاً دوباره وارد شوید');
      // Dispatch a global event on 401 to handle unauthorized access in other components and contexts (e.g., logout or redirect)
      window.dispatchEvent(new CustomEvent('-auth-error', { detail: { status: 401 } }));
      break;
    case 403:
      toast.error('شما دسترسی لازم را ندارید');
      break;
    case 404:
      toast.error('منبع مورد نظر یافت نشد');
      break;
    case 500:
      toast.error('خطای سرور. لطفاً بعداً تلاش کنید');
      break;
    default:
      toast.error(message);
  }
  return Promise.reject(error);
};

export const handleSuccess = (data: any) => {
  if (data?.message) {
    toast.success(data.message);
  }
};

import { mainAxiosInstance } from '../../../configs/apiRequests/AxiosInstanses';
import { FrappeUserType } from '../../../modules/auth';

export const login = async (email: string, password: string) => {
  const response = await mainAxiosInstance.post(`/api/method/login`, { usr: email, pwd: password });
  return response.data;
};

export const getLoggedUser = async () => {
  const response = await mainAxiosInstance.get(`/api/method/frappe.auth.get_logged_user`);
  return response.data;
};

export const getUserDetails = async (username: string) => {
  const response = await mainAxiosInstance.get(`/api/resource/User/${username}`);
  return response.data.data as FrappeUserType;
};

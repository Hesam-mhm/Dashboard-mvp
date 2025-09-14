import { frappeAxiosInstance } from '../../../configs/apiRequests/AxiosInstanses';
import { FrappeUserType } from '../../../modules/auth';

export const login = async (email: string, password: string) => {
  const response = await frappeAxiosInstance.post(`/api/method/login`, { usr: email, pwd: password });
  return response.data;
};

export const getLoggedUser = async () => {
  const response = await frappeAxiosInstance.get(`/api/method/frappe.auth.get_logged_user`);
  return response.data;
};

export const getUserDetails = async (username: string) => {
  const response = await frappeAxiosInstance.get(`/api/resource/User/${username}`);
  return response.data.data as FrappeUserType;
};

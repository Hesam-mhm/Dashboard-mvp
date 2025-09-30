import { createAxiosInstance } from './Axios';
import BaseUrls from './BaseUrls';
export const chartAxiosInstance = createAxiosInstance(BaseUrls.chart);

export const mainAxiosInstance = createAxiosInstance(BaseUrls.main);

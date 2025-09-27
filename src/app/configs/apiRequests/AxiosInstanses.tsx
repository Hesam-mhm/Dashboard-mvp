import { createAxiosInstance } from './Axios';
import BaseUrls from './BaseUrls';

export const mainAxiosInstance = createAxiosInstance(BaseUrls.main);
export const chartAxiosInstance = createAxiosInstance(BaseUrls.chart);

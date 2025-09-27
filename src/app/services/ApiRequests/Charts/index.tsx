import { chartAxiosInstance } from '../../../configs/apiRequests/AxiosInstanses';
import { RequestChartType } from '../../../../types/RequestChart/RequestChart';

const requestChart = async (data: RequestChartType) => {
  const response = await chartAxiosInstance.post(`/charts/generate-chart`, data);
  return response.data;
};

export { requestChart };

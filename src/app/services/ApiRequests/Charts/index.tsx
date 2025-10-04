import { chartAxiosInstance } from '../../../configs/apiRequests/AxiosInstanses';
import { AllChartsResponseType, ConfirmAndAddChartToDashboardRequestType, ConfirmAndAddChartToDashboardResponseType, DeleteChartRequestType, RequestChartResponseType, RequestChartType, UpdateChartRequestQueryParamType, UpdateChartRequestType, UpdateChartResponseType } from '../../../../types/Charts/Charts.type';
import { AllChartsQueryParamsType, ConfirmChartsRequestType, ConfirmedChartType } from '../../../../types/Charts/Charts.type';
import EndPoints from '../EndPoints';

const getAllCharts = async (data: AllChartsQueryParamsType) => {
  const response = await chartAxiosInstance.get(EndPoints.CHARTS.getAllCharts,{params: data});
  return response.data as AllChartsResponseType;
};

const updateChart = async ( data: UpdateChartRequestType) => {
  const response = await chartAxiosInstance.put(EndPoints.CHARTS.updateChart.replace("{chart_id}", data.query_params?.chart_id),data,{params: {user_id: data.query_params?.user_id}} );
  return response.data as UpdateChartResponseType;
};

const deleteChart = async (data: DeleteChartRequestType) => {
  const response = await chartAxiosInstance.delete(EndPoints.CHARTS.deleteChart.replace("{chart_id}", data.chart_id), {params: {user_id: data.user_id}});
  return response.data;
};

const requestChart = async (data: RequestChartType) => {
    const response = await chartAxiosInstance.post(EndPoints.CHARTS.generateChart, data);
  return response.data as RequestChartResponseType;
};

const confirmPendingChart = async (data: ConfirmChartsRequestType) => {
  const response = await chartAxiosInstance.post(EndPoints.CHARTS.confirmChart, data);
  return response.data as ConfirmedChartType;
};

const confirmAndAddChartToDashboard = async (data: ConfirmAndAddChartToDashboardRequestType) => {
  const response = await chartAxiosInstance.post(EndPoints.CHARTS.confirmAndAddChartToDashboard, data);
  return response.data as ConfirmAndAddChartToDashboardResponseType;
};


export const ChartsApiRequests = 
{ requestChart, confirmPendingChart, getAllCharts, updateChart, deleteChart, confirmAndAddChartToDashboard };


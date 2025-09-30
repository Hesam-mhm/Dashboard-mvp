import { useMutation, useQuery } from '@tanstack/react-query';
import { ConfirmAndAddChartToDashboardRequestType, DeleteChartRequestType, RequestChartType, UpdateChartRequestQueryParamType, UpdateChartRequestType } from '../../../../types/Charts/Charts.type';
import { AllChartsQueryParamsType, ConfirmChartsRequestType } from '../../../../types/Charts/Charts.type';
import ApiService from '../ApiService';
import { queryClient } from '../../../configs/apiRequests/ReactQuery';
import { mutationKeys, queryKeys } from '../QueryKeys';

const useRequestChart = () => {
  return useMutation({
    mutationKey: [mutationKeys.charts.generateChart],
    mutationFn: (data: RequestChartType) => ApiService.ChartsApiRequests.requestChart(data),
  });
};
const useGetAllCharts = (data: AllChartsQueryParamsType) => {
  return useQuery({
    queryKey: [queryKeys.charts.getAllCharts],
    queryFn: async () => await   ApiService.ChartsApiRequests.getAllCharts(data),
  });
};
const useConfirmPendingChart = () => {
  return useMutation({
    mutationKey: [mutationKeys.charts.confirmChart],
    mutationFn: async (data: ConfirmChartsRequestType) => await ApiService.ChartsApiRequests.confirmPendingChart(data),
  });
};
const useUpdateChart = () => {
  return useMutation({
    mutationKey: [mutationKeys.charts.updateChart],
    mutationFn: async ( data: UpdateChartRequestType) => await ApiService.ChartsApiRequests.updateChart(data),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts.getAllCharts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.dashboardDetail] ,exact:false});
    },
  });
};  
const useDeleteChart = () => {
  return useMutation({
    mutationKey: [mutationKeys.charts.deleteChart],
    mutationFn: async (data: DeleteChartRequestType) => await ApiService.ChartsApiRequests.deleteChart(data),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts.getAllCharts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.dashboardDetail] ,exact:false});
    },
  });
};
const useConfirmAndAddChartToDashboard = () => {
  return useMutation({
    mutationKey: [mutationKeys.charts.confirmAndAddChartToDashboard],
    mutationFn: async (data: ConfirmAndAddChartToDashboardRequestType) => await ApiService.ChartsApiRequests.confirmAndAddChartToDashboard(data),
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts.getAllCharts] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.dashboardDetail] ,exact:false});
    },
  });
};

export { useRequestChart, useConfirmPendingChart, useGetAllCharts, useUpdateChart, useDeleteChart, useConfirmAndAddChartToDashboard };

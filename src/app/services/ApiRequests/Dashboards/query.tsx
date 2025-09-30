import { useMutation, useQuery } from "@tanstack/react-query";
import { DashboardsApiRequests } from ".";
import { mutationKeys, queryKeys } from "../QueryKeys";
import { AddChartToDashboardRequestType, CreateDashboardRequestType, DeleteDashboardQueryParamType, GetDashboardByIdQueryParamType, GetDashboardsQueryParamType, UpdateDashboardRequestType } from "../../../../types/Dashboard/CreateDashboard.type";
import { queryClient } from "../../../configs/apiRequests/ReactQuery";
import ApiService from "../ApiService";

const useGetAllDashboards = (data: GetDashboardsQueryParamType) => {     
    return  useQuery({
        queryKey: [queryKeys.dashboards.allDashboards, data],
        queryFn:    async () => await DashboardsApiRequests.GetAllDashboards(data),
    });
}

const useGetDashboardById = (data: GetDashboardByIdQueryParamType) => {
    return useQuery({
        queryKey: [queryKeys.dashboards.dashboardDetail, data.dashboard_id],
        queryFn: async () => await DashboardsApiRequests.GetDashboardById(data),
    });
}


const useCreateDashboard = () => {

    return useMutation({
        mutationKey: [mutationKeys.dashboards.dashboardCreate],
        mutationFn:async (data: CreateDashboardRequestType) => await DashboardsApiRequests.CreateDashboard(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.allDashboards ] ,exact:false })
        },
        });
}

const useUpdateDashboard = () => {

    return useMutation({
        mutationKey: [mutationKeys.dashboards.dashboardUpdate],
        mutationFn:async (data: UpdateDashboardRequestType) => await DashboardsApiRequests.UpdateDashboard(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.allDashboards ] ,exact:false })
            queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.dashboardDetail ] ,exact:false })
            
        },
    });
}

const useDeleteDashboard = () => {

    return useMutation({
        mutationKey: [mutationKeys.dashboards.dashboardDelete],
        mutationFn:async (data: DeleteDashboardQueryParamType) => await DashboardsApiRequests.DeleteDashboard(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: [queryKeys.dashboards.allDashboards ]     ,exact:false })
        },
    });
}

const useAddChartToDashboard = () => {
    return useMutation({
      mutationKey: [mutationKeys.dashboards.addChartsToDashboards],
      mutationFn: async (data: AddChartToDashboardRequestType) => await ApiService.DashboardsApiRequests.addChartToDashboard(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getAllCharts'] });
      },
    });
  };

export default useGetAllDashboards; 

export {
    useGetAllDashboards,
    useGetDashboardById,
    useCreateDashboard,
    useUpdateDashboard,
    useDeleteDashboard,
    useAddChartToDashboard,
}
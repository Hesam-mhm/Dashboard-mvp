import { AddChartToDashboardRequestType, AddChartToDashboardResponseType, CreateDashboardRequestType, CreateDashboardResponseType, DeleteDashboardQueryParamType, GetDashboardByIdQueryParamType, GetDashboardByIdResponseType, GetDashboardsQueryParamType, GetDashboardsResponseType, UpdateDashboardRequestType, UpdateDashboardResponseType } from "../../../../types/Dashboard/CreateDashboard.type";
import { chartAxiosInstance } from "../../../configs/apiRequests/AxiosInstanses";
import EndPoints from "../EndPoints";




const GetAllDashboards = async (params ?: GetDashboardsQueryParamType) => {
    const response = await chartAxiosInstance.get(EndPoints.DASHBOARD.getAllDashboards.replace("{user_id}", params?.user_id || ""),{
      params: { 
        user_id : params?.user_id ,
        limit: params?.limit || 100,
        offset: params?.offset || 0,
      }
    });
    return  response.data as GetDashboardsResponseType;
  }

const GetDashboardById = async (params ?: GetDashboardByIdQueryParamType) => {
    const response = await chartAxiosInstance.get(EndPoints.DASHBOARD.getDashboardById.replace("{dashboard_id}", params?.dashboard_id),{
      params: {
        user_id : params?.user_id ,
      }
    });
    return  response.data as GetDashboardByIdResponseType;
  }

const CreateDashboard = async (data : CreateDashboardRequestType) => {
    const response = await chartAxiosInstance.post(EndPoints.DASHBOARD.CREATE, data);
    return  response.data as CreateDashboardResponseType;
  }

const UpdateDashboard = async ( data : UpdateDashboardRequestType) => {
  console.log(data)
    const response = await chartAxiosInstance.put(EndPoints.DASHBOARD.updateDashboard.replace("{dashboard_id}", data.dashboard_id), data.data);
    return  response.data as UpdateDashboardResponseType;
  }
  
const DeleteDashboard = async (params ?: DeleteDashboardQueryParamType) => {
    const response = await chartAxiosInstance.delete(EndPoints.DASHBOARD.deleteDashboard.replace("{dashboard_id}", params?.dashboard_id),{
      params: {
        user_id : params?.user_id ,
      }
    });
    return  response.data ;
  }

const addChartToDashboard = async (data: AddChartToDashboardRequestType) => {
  const response = await chartAxiosInstance.post(EndPoints.DASHBOARD.addChartToDashboard, data);
  return response.data as AddChartToDashboardResponseType;
};

export const DashboardsApiRequests = {
    GetAllDashboards,
    GetDashboardById,
    CreateDashboard,
    UpdateDashboard,
    DeleteDashboard,
    addChartToDashboard,
}
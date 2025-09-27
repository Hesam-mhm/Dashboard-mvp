import { GetDashboardByIdQueryParamType, GetDashboardByIdResponseType, GetDashboardsQueryParamType, GetDashboardsResponseType } from "../../../../types/Dashboard/CreateDashboard.type";
import { mainAxiosInstance } from "../../../configs/apiRequests/AxiosInstanses";
import EndPoints from "../EndPoints";




const GetAllDashboards = async (params ?: GetDashboardsQueryParamType) => {
    const response = await mainAxiosInstance.get(EndPoints.DASHBOARD.GET_ALL.replace("{user_id}", params?.user_id || ""),{
      params: { 
        user_id : params?.user_id ,
        limit: params?.limit || 5,
        offset: params?.offset,
      }
    });
    return  response.data as GetDashboardsResponseType;
  }

const GetDashboardById = async (params ?: GetDashboardByIdQueryParamType) => {
    const response = await mainAxiosInstance.get(EndPoints.DASHBOARD.GET.replace("{dashboard_id}", params?.dashboard_id),{
      params: {
        user_id : params?.user_id ,
      }
    });
    return  response.data as GetDashboardByIdResponseType;
  }
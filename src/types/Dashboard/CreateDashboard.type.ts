import { ChartPosition, Timestamped, UserScopedParams, PaginationParams, IdName } from "../GeneralTypes/Common.type";

export type CreateDashboardRequestType = UserScopedParams & {
    name?: string;
};

export type CreateDashboardResponseType = Timestamped & IdName & {
    chart_positions?: ChartPosition[];
};

export type GetDashboardByIdResponseType =  {
    id ?: string;
    name ?: string;
    created_at ?: string;
    updated_at ?: string;
    chart_positions ?: ChartPosition[];
};

export type GetDashboardsQueryParamType = UserScopedParams & PaginationParams;

export type GetDashboardsResponseType = {
    dashboards?: GetDashboardByIdResponseType[];
};

export type GetDashboardByIdQueryParamType = UserScopedParams & {
    dashboard_id?: string;
};


export type UpdateDashboardRequestType = {
    dashboard_id?: string;
    data?: {
        user_id?: string;
        name?: string;
        chart_positions?: ChartPosition[];
    };
};
export type UpdateDashboardResponseType = CreateDashboardResponseType;
export type DeleteDashboardQueryParamType = GetDashboardByIdQueryParamType;

export type AddChartToDashboardRequestType = UserScopedParams & {
    dashboard_ids?: string[];
    chart_ids?: string[];
};

export type AddChartToDashboardResponseType = Timestamped & IdName & {
    chart_positions?: ChartPosition[];
};
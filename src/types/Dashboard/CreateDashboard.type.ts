export type CreateDashboardRequestType = {
    user_id: string;
    name: string;
    layout: {[key: string]: {}};
    charts_order: string[];
};

export type CreateDashboardResponseType = {
    id: string;
    name: string;
    layout: {[key: string]: {}};
    charts_order: string[];
    created_at: string;
    updated_at: string;
};


export type GetDashboardsQueryParamType = {
    user_id : string;
    limit : number;
    offset : number;
}

export type GetDashboardsResponseType = {
    dashboards:CreateDashboardResponseType[]
}

export type GetDashboardByIdQueryParamType = {
    user_id : string;
    dashboard_id : string;
}

export type GetDashboardByIdResponseType = CreateDashboardResponseType
export type UpdateDashboardRequestType = CreateDashboardRequestType
export type UpdateDashboardResponseType = CreateDashboardResponseType
export type DeleteDashboardQueryParamType = GetDashboardByIdQueryParamType

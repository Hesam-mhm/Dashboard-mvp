import { FieldsMapping, PaginationParams, UserScopedParams, ChartPreview, Timestamped } from "../GeneralTypes/Common.type";

export type RequestChartType = UserScopedParams & {
    natural_query?: string;
    external_db_id?: number;
};

export type RequestChartResponseType =  {
    pending_chart_id?: string;
    chart_type?: string;
    fields_mapping?: {
      [key: string]: {
        column?: string;
        label?: string;
      }
    },
    title?: string,
    preview_data?: { [key: string]: any };
    iterations_used?: number,
    empty_result?: boolean
  }
  
export type ConfirmedChartType = Timestamped & {
    id?: string;
    name?: string;
    chart_type?: string;
    fields_mapping?: FieldsMapping;
    natural_query?: string;
};


export type DeleteChartRequestType = UserScopedParams & {
    chart_id?: string;
};
  
export type UpdateChartRequestQueryParamType = UserScopedParams & {
    chart_id?: string;
};

export type UpdateChartRequestType = {
    query_params?: UpdateChartRequestQueryParamType;
    body_params?: {
        natural_query?: string;
        external_db_id?: number;
        refresh_mode?: 'cached' | 'realtime';
        title?: string;
        sql?: string;
        chart_type_key?: string;
        fields_mapping?: FieldsMapping;
    };
    
};

export type UpdateChartResponseType = Timestamped & {
    id?: string;
    chart_type?: string;
    fields_mapping?: FieldsMapping;
    natural_query?: string;
    title?: string;
    external_db_id?: number;
};


export type ConfirmChartsRequestType = UserScopedParams & {
    pending_chart_id?: string;
};
export type ConfirmChartsResponseType = {
    status?: string;
    chart_id?: string;
};

export type AllChartsQueryParamsType = UserScopedParams & PaginationParams;
export type AllChartsResponseType = (Timestamped & {
    id?: string;
    chart_type?: string;
    fields_mapping?: FieldsMapping;
    natural_query?: string;
    title?: string;
})[];
      




export type ConfirmAndAddChartToDashboardRequestType = UserScopedParams & {
    chart_id?: string;
    dashboard_id?: string;
};
  
export type ConfirmAndAddChartToDashboardResponseType = {
    chart_preview?: ChartPreview;
    confirmed_chart_id?: string;
    dashboard_id?: string;
    position_added?: number;
};


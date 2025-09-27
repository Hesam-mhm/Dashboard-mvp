export type RequestChartType = {
    user_id: string;
    natural_query: string;
    external_db_id: number;
  };
  
export type ConfirmChartsRequestType = {
    "user_id": string,
    "pending_chart_id" : string
}

export type AllChartsQueryParamsType ={
    user_id : string,
    limit : number,
    offset : number
}